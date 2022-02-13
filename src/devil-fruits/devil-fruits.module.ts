import { Module } from '@nestjs/common';
import { DevilFruitsService } from './devil-fruit.service';
import { DevilFruitsController } from './devil-fruits.controller';

@Module({
  controllers: [DevilFruitsController],
  providers: [DevilFruitsService],
})
export class DevilFruitsModule {}
