import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  UseInterceptors,
  UploadedFile,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { DocumentosService } from './documentos.service';
import { CreateDocumentoDto } from './dto/create-documento.dto';
import { UpdateDocumentoDto } from './dto/update-documento.dto';

@Controller('documentos')
export class DocumentosController {
  constructor(private readonly documentosService: DocumentosService) {}

  // POST /documentos - Crear nuevo documento
  @Post()
  create(@Body() createDocumentoDto: CreateDocumentoDto) {
    return this.documentosService.create(createDocumentoDto);
  }

  // POST /documentos/:id/pdf - Subir PDF para un documento
  @Post(':id/pdf')
  @UseInterceptors(
    FileInterceptor('pdf', {
      storage: diskStorage({
        destination: './uploads/documentos',
        filename: (req, file, callback) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          const filename = `documento-${uniqueSuffix}${ext}`;
          callback(null, filename);
        },
      }),
      fileFilter: (req, file, callback) => {
        if (!file.originalname.match(/\.(pdf)$/)) {
          return callback(new Error('Solo se permiten archivos PDF'), false);
        }
        callback(null, true);
      },
      limits: {
        fileSize: 10 * 1024 * 1024, // 10MB
      },
    }),
  )
  async uploadPdf(
    @Param('id', ParseIntPipe) id: number,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const pdfPath = `uploads/documentos/${file.filename}`;
    return this.documentosService.updatePdfPath(id, pdfPath);
  }

  // GET /documentos - Obtener todos los documentos
  @Get()
  findAll(@Query('tipo') tipo?: string) {
    if (tipo) {
      return this.documentosService.findByType(tipo);
    }
    return this.documentosService.findAll();
  }

  // GET /documentos/:id - Obtener un documento por ID
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.documentosService.findOne(id);
  }

  // PUT /documentos/:id - Actualización completa
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDocumentoDto: UpdateDocumentoDto,
  ) {
    return this.documentosService.update(id, updateDocumentoDto);
  }

  // PATCH /documentos/:id - Actualización parcial
  @Patch(':id')
  patch(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDocumentoDto: UpdateDocumentoDto,
  ) {
    return this.documentosService.patch(id, updateDocumentoDto);
  }

  // DELETE /documentos/:id - Eliminar documento
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.documentosService.remove(id);
  }
}