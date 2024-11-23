import 'dotenv/config';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('ToDo API')
    .setDescription(
      'Documentação da API de tarafas, para a disciplina de Técnicas avançadas de desenvolvimento de software.',
    )
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api-docs', app, document);

  await app.listen(process.env.API_PORT || 3000, () => {
    console.log(
      `\nServer started on http://localhost:${process.env.API_PORT || 3000}\n`,
    );
  });
}

bootstrap();
