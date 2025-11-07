import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('articulos')
export class Articulo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  titulo: string;

  @Column({ type: 'text' })
  resumen: string;

  @Column({ type: 'varchar', length: 100 })
  categoria: string;

  @Column({ type: 'varchar', length: 50 })
  idioma: string;

  @Column({ type: 'varchar', length: 150 })
  tema_principal: string;

  @Column({ 
    type: 'enum', 
    enum: ['borrador', 'publicado', 'revision'],
    default: 'borrador'
  })
  estado_publicacion: 'borrador' | 'publicado' | 'revision';

  @Column({ type: 'varchar', length: 500, nullable: true })
  ruta_archivo_texto: string;

  @CreateDateColumn({ name: 'fecha_creacion' })
  fecha_creacion: Date;

  @UpdateDateColumn({ name: 'fecha_actualizacion' })
  fecha_actualizacion: Date;
}