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
import { ArticulosService } from './articulos.service';
import { CreateArticuloDto } from './dto/create-articulo.dto';
import { UpdateArticuloDto } from './dto/update-articulo.dto';

@Controller('articulos')
export class ArticulosController {
  constructor(private readonly articulosService: ArticulosService) {}

  // POST /articulos - Crear nuevo artículo
  @Post()
  create(@Body() createArticuloDto: CreateArticuloDto) {
    return this.articulosService.create(createArticuloDto);
  }

  // POST /articulos/:id/texto - Subir archivo de texto para un artículo
  @Post(':id/texto')
  @UseInterceptors(
    FileInterceptor('texto', {
      storage: diskStorage({
        destination: './uploads/articulos',
        filename: (req, file, callback) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          const filename = `articulo-${uniqueSuffix}${ext}`;
          callback(null, filename);
        },
      }),
      fileFilter: (req, file, callback) => {
        if (!file.originalname.match(/\.(txt|md|doc|docx)$/)) {
          return callback(new Error('Solo se permiten archivos de texto (.txt, .md, .doc, .docx)'), false);
        }
        callback(null, true);
      },
      limits: {
        fileSize: 5 * 1024 * 1024, // 5MB
      },
    }),
  )
  async uploadText(
    @Param('id', ParseIntPipe) id: number,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const textPath = `uploads/articulos/${file.filename}`;
    return this.articulosService.updateTextPath(id, textPath);
  }

  // GET /articulos - Obtener todos los artículos con filtros opcionales
  @Get()
  findAll(
    @Query('estado') estado?: 'borrador' | 'publicado' | 'revision',
    @Query('categoria') categoria?: string,
  ) {
    if (estado) {
      return this.articulosService.findByStatus(estado);
    }
    if (categoria) {
      return this.articulosService.findByCategory(categoria);
    }
    return this.articulosService.findAll();
  }

  // GET /articulos/:id - Obtener un artículo por ID
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.articulosService.findOne(id);
  }

  // PUT /articulos/:id - Actualización completa
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateArticuloDto: UpdateArticuloDto,
  ) {
    return this.articulosService.update(id, updateArticuloDto);
  }

  // PATCH /articulos/:id - Actualización parcial
  @Patch(':id')
  patch(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateArticuloDto: UpdateArticuloDto,
  ) {
    return this.articulosService.patch(id, updateArticuloDto);
  }

  // DELETE /articulos/:id - Eliminar artículo
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.articulosService.remove(id);
  }
}