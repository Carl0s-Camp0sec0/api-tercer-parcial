import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateDocumentoDto {
  @IsString()
  @IsNotEmpty()
  titulo: string;

  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @IsString()
  @IsNotEmpty()
  tipo_documento: string;

  @IsString()
  @IsNotEmpty()
  autor: string;

  @IsString()
  @IsNotEmpty()
  version: string;

  @IsOptional()
  @IsString()
  ruta_archivo_pdf?: string;
}