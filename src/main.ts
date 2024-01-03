import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // 가장 큰 모듈(root) : AppModule
  await app.listen(3000); // 3000번 포트에서 실행한다.
}
bootstrap();
