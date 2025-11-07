import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCarroDto } from './dto/create-carro.dto';
import { UpdateCarroDto } from './dto/update-carro.dto';
import { Carro } from './entities/carro.entity';

@Injectable()
export class CarrosService {
  constructor(
    @InjectRepository(Carro)
    private carroRepository: Repository<Carro>,
  ) {}

  // Crear un nuevo carro
  async create(createCarroDto: CreateCarroDto): Promise<Carro> {
    const carro = this.carroRepository.create(createCarroDto);
    return await this.carroRepository.save(carro);
  }

  // Obtener todos los carros
  async findAll(): Promise<Carro[]> {
    return await this.carroRepository.find({
      order: { fecha_creacion: 'DESC' }
    });
  }

  // Obtener un carro por ID
  async findOne(id: number): Promise<Carro> {
    const carro = await this.carroRepository.findOne({ where: { id } });
    if (!carro) {
      throw new NotFoundException(`Carro con ID ${id} no encontrado`);
    }
    return carro;
  }

  // Actualizar un carro completo (PUT)
  async update(id: number, updateCarroDto: UpdateCarroDto): Promise<Carro> {
    const carro = await this.findOne(id);
    Object.assign(carro, updateCarroDto);
    return await this.carroRepository.save(carro);
  }

  // PATCH - Actualización parcial
  async patch(id: number, updateCarroDto: Partial<UpdateCarroDto>): Promise<Carro> {
    const carro = await this.findOne(id);
    Object.assign(carro, updateCarroDto);
    return await this.carroRepository.save(carro);
  }

  // Eliminar un carro
  async remove(id: number): Promise<{ message: string }> {
    const carro = await this.findOne(id);
    await this.carroRepository.remove(carro);
    return { message: `Carro con ID ${id} eliminado exitosamente` };
  }

  // Método para actualizar la ruta de imagen
  async updateImagePath(id: number, imagePath: string): Promise<Carro> {
    const carro = await this.findOne(id);
    carro.imagen_carro = imagePath;
    return await this.carroRepository.save(carro);
  }
}