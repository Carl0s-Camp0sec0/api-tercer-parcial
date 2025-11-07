import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { databaseConfig } from './config/database.config';

// Importar módulos generados automáticamente
import { CarrosModule } from './carros/carros.module';
import { DocumentosModule } from './documentos/documentos.module';
import { ArticulosModule } from './articulos/articulos.module';

@Module({
  imports: [
    // configuración de variables de entorno
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    
    // configuración de TypeORM
    TypeOrmModule.forRoot(databaseConfig),
    
    // modulos de la aplicación
    CarrosModule,
    DocumentosModule,
    ArticulosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}