import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Configurar validación global
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Remover propiedades no definidas en el DTO
    forbidNonWhitelisted: true, // Lanzar error si hay propiedades no permitidas
    transform: true, // Transformar automáticamente los tipos
  }));
  
  // Configurar CORS para desarrollo
  app.enableCors();
  
  // Puerto del servidor
  const port = 3000;
  await app.listen(port);
  
  console.log(`Servidor corriendo en http://localhost:${port}`);
}

bootstrap();