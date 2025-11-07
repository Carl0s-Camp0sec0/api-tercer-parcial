import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDocumentoDto } from './dto/create-documento.dto';
import { UpdateDocumentoDto } from './dto/update-documento.dto';
import { Documento } from './entities/documento.entity';

@Injectable()
export class DocumentosService {
  constructor(
    @InjectRepository(Documento)
    private documentoRepository: Repository<Documento>,
  ) {}

  // Crear un nuevo documento
  async create(createDocumentoDto: CreateDocumentoDto): Promise<Documento> {
    const documento = this.documentoRepository.create(createDocumentoDto);
    return await this.documentoRepository.save(documento);
  }

  // Obtener todos los documentos
  async findAll(): Promise<Documento[]> {
    return await this.documentoRepository.find({
      order: { fecha_creacion: 'DESC' }
    });
  }

  // Obtener un documento por ID
  async findOne(id: number): Promise<Documento> {
    const documento = await this.documentoRepository.findOne({ where: { id } });
    if (!documento) {
      throw new NotFoundException(`Documento con ID ${id} no encontrado`);
    }
    return documento;
  }

  // Actualizar un documento completo (PUT)
  async update(id: number, updateDocumentoDto: UpdateDocumentoDto): Promise<Documento> {
    const documento = await this.findOne(id);
    Object.assign(documento, updateDocumentoDto);
    return await this.documentoRepository.save(documento);
  }

  // PATCH - Actualización parcial
  async patch(id: number, updateDocumentoDto: Partial<UpdateDocumentoDto>): Promise<Documento> {
    const documento = await this.findOne(id);
    Object.assign(documento, updateDocumentoDto);
    return await this.documentoRepository.save(documento);
  }

  // Eliminar un documento
  async remove(id: number): Promise<{ message: string }> {
    const documento = await this.findOne(id);
    await this.documentoRepository.remove(documento);
    return { message: `Documento con ID ${id} eliminado exitosamente` };
  }

  // Método para actualizar la ruta del PDF
  async updatePdfPath(id: number, pdfPath: string): Promise<Documento> {
    const documento = await this.findOne(id);
    documento.ruta_archivo_pdf = pdfPath;
    return await this.documentoRepository.save(documento);
  }

  // Buscar documentos por tipo
  async findByType(tipo: string): Promise<Documento[]> {
    return await this.documentoRepository.find({
      where: { tipo_documento: tipo },
      order: { fecha_creacion: 'DESC' }
    });
  }
}