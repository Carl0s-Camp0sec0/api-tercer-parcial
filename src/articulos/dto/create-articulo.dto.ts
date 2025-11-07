import { IsString, IsNotEmpty, IsOptional, IsEnum } from 'class-validator';

export class CreateArticuloDto {
  @IsString()
  @IsNotEmpty()
  titulo: string;

  @IsString()
  @IsNotEmpty()
  resumen: string;

  @IsString()
  @IsNotEmpty()
  categoria: string;

  @IsString()
  @IsNotEmpty()
  idioma: string;

  @IsString()
  @IsNotEmpty()
  tema_principal: string;

  @IsOptional()
  @IsEnum(['borrador', 'publicado', 'revision'])
  estado_publicacion?: 'borrador' | 'publicado' | 'revision';

  @IsOptional()
  @IsString()
  ruta_archivo_texto?: string;
}