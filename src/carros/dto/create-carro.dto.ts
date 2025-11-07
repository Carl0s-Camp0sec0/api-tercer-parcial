import { IsString, IsNumber, IsNotEmpty, IsOptional, Min, Max, IsDecimal } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateCarroDto {
  @IsString()
  @IsNotEmpty()
  marca: string;

  @IsString()
  @IsNotEmpty()
  modelo: string;

  @IsNumber()
  @Min(1900)
  @Max(new Date().getFullYear() + 1)
  año: number;

  @IsString()
  @IsNotEmpty()
  color: string;

  @Transform(({ value }) => parseFloat(value))
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  precio: number;

  @IsNumber()
  @Min(0)
  kilometraje: number;

  @IsOptional()
  @IsString()
  imagen_carro?: string;
}