import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      // disableErrorMessages: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  app.enableCors({
    // origin: "http://localhost:3006"
    origin: '*',
  });

  // await app.listen(process.env.PORT ?? 3005);

  // config docker
  await app.listen(process.env.PORT ? 3005 : '0.0.0.0');
}
bootstrap();

// backend container
// 127.0.0.1:3005
//       ↑
// accessible seulement depuis le backend lui-même ❌

// 0.0.0.0:3005
//       ↑
// accessible depuis les autres conteneurs ✅
