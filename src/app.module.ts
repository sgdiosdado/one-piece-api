import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { DevilFruitsModule } from './devil-fruits/devil-fruits.module';
import { LoggerMiddleware } from './middlewares/logger.middleware';

@Module({
  imports: [DevilFruitsModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('devil-fruits');
  }
}
