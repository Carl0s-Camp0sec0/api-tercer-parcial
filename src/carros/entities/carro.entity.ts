import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('carros')
export class Carro {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  marca: string;

  @Column({ type: 'varchar', length: 150 })
  modelo: string;

  @Column({ type: 'int' })
  año: number;

  @Column({ type: 'varchar', length: 50 })
  color: string;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  precio: number;

  @Column({ type: 'int', default: 0 })
  kilometraje: number;

  @Column({ type: 'varchar', length: 500, nullable: true })
  imagen_carro: string;

  @CreateDateColumn({ name: 'fecha_creacion' })
  fecha_creacion: Date;

  @UpdateDateColumn({ name: 'fecha_actualizacion' })
  fecha_actualizacion: Date;
}