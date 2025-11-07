import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('documentos')
export class Documento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  titulo: string;

  @Column({ type: 'text' })
  descripcion: string;

  @Column({ type: 'varchar', length: 100 })
  tipo_documento: string;

  @Column({ type: 'varchar', length: 150 })
  autor: string;

  @Column({ type: 'varchar', length: 20 })
  version: string;

  @Column({ type: 'varchar', length: 500, nullable: true })
  ruta_archivo_pdf: string;

  @CreateDateColumn({ name: 'fecha_creacion' })
  fecha_creacion: Date;

  @UpdateDateColumn({ name: 'fecha_actualizacion' })
  fecha_actualizacion: Date;
}