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
    // Configuración de variables de entorno
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    
    // Configuración de TypeORM
    TypeOrmModule.forRoot(databaseConfig),
    
    // Módulos de la aplicación
    CarrosModule,
    DocumentosModule,
    ArticulosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}