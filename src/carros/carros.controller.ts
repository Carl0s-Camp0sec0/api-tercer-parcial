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
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { CarrosService } from './carros.service';
import { CreateCarroDto } from './dto/create-carro.dto';
import { UpdateCarroDto } from './dto/update-carro.dto';

@Controller('carros')
export class CarrosController {
  constructor(private readonly carrosService: CarrosService) {}

  // POST /carros - Crear nuevo carro
  @Post()
  create(@Body() createCarroDto: CreateCarroDto) {
    return this.carrosService.create(createCarroDto);
  }

  // POST /carros/:id/imagen - Subir imagen para un carro
  @Post(':id/imagen')
  @UseInterceptors(
    FileInterceptor('imagen', {
      storage: diskStorage({
        destination: './uploads/carros',
        filename: (req, file, callback) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          const filename = `carro-${uniqueSuffix}${ext}`;
          callback(null, filename);
        },
      }),
      fileFilter: (req, file, callback) => {
        if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
          return callback(new Error('Solo se permiten archivos de imagen'), false);
        }
        callback(null, true);
      },
      limits: {
        fileSize: 5 * 1024 * 1024, // 5MB
      },
    }),
  )
  async uploadImage(
    @Param('id', ParseIntPipe) id: number,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const imagePath = `uploads/carros/${file.filename}`;
    return this.carrosService.updateImagePath(id, imagePath);
  }

  // GET /carros - Obtener todos los carros
  @Get()
  findAll() {
    return this.carrosService.findAll();
  }

  // GET /carros/:id - Obtener un carro por ID
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.carrosService.findOne(id);
  }

  // PUT /carros/:id - Actualización completa
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCarroDto: UpdateCarroDto,
  ) {
    return this.carrosService.update(id, updateCarroDto);
  }

  // PATCH /carros/:id - Actualización parcial
  @Patch(':id')
  patch(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCarroDto: UpdateCarroDto,
  ) {
    return this.carrosService.patch(id, updateCarroDto);
  }

  // DELETE /carros/:id - Eliminar carro
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.carrosService.remove(id);
  }
}