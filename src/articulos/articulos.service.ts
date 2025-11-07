import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateArticuloDto } from './dto/create-articulo.dto';
import { UpdateArticuloDto } from './dto/update-articulo.dto';
import { Articulo } from './entities/articulo.entity';

@Injectable()
export class ArticulosService {
  constructor(
    @InjectRepository(Articulo)
    private articuloRepository: Repository<Articulo>,
  ) {}

  // Crear un nuevo artículo
  async create(createArticuloDto: CreateArticuloDto): Promise<Articulo> {
    const articulo = this.articuloRepository.create(createArticuloDto);
    return await this.articuloRepository.save(articulo);
  }

  // Obtener todos los artículos
  async findAll(): Promise<Articulo[]> {
    return await this.articuloRepository.find({
      order: { fecha_creacion: 'DESC' }
    });
  }

  //  Obtener un artículo por ID
  async findOne(id: number): Promise<Articulo> {
    const articulo = await this.articuloRepository.findOne({ where: { id } });
    if (!articulo) {
      throw new NotFoundException(`Artículo con ID ${id} no encontrado`);
    }
    return articulo;
  }

  // Actualizar un artículo completo (PUT)
  async update(id: number, updateArticuloDto: UpdateArticuloDto): Promise<Articulo> {
    const articulo = await this.findOne(id);
    Object.assign(articulo, updateArticuloDto);
    return await this.articuloRepository.save(articulo);
  }

  // PATCH - Actualización parcial
  async patch(id: number, updateArticuloDto: Partial<UpdateArticuloDto>): Promise<Articulo> {
    const articulo = await this.findOne(id);
    Object.assign(articulo, updateArticuloDto);
    return await this.articuloRepository.save(articulo);
  }

  // DELETE - Eliminar un artículo
  async remove(id: number): Promise<{ message: string }> {
    const articulo = await this.findOne(id);
    await this.articuloRepository.remove(articulo);
    return { message: `Artículo con ID ${id} eliminado exitosamente` };
  }

  // Método para actualizar la ruta del archivo de texto
  async updateTextPath(id: number, textPath: string): Promise<Articulo> {
    const articulo = await this.findOne(id);
    articulo.ruta_archivo_texto = textPath;
    return await this.articuloRepository.save(articulo);
  }

  // Buscar artículos por estado
  async findByStatus(estado: 'borrador' | 'publicado' | 'revision'): Promise<Articulo[]> {
    return await this.articuloRepository.find({
      where: { estado_publicacion: estado },
      order: { fecha_creacion: 'DESC' }
    });
  }

  // Buscar artículos por categoría
  async findByCategory(categoria: string): Promise<Articulo[]> {
    return await this.articuloRepository.find({
      where: { categoria },
      order: { fecha_creacion: 'DESC' }
    });
  }
}