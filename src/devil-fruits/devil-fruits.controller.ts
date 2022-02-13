import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import { DevilFruitDto } from './create/create-devil-fruit.dto';
import { DevilFruitsService } from './devil-fruit.service';

@Controller('devil-fruits')
export class DevilFruitsController {
  constructor(private service: DevilFruitsService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.service.findById(id);
  }

  @Post()
  @HttpCode(201)
  create(@Body() createDevilFruitDto: DevilFruitDto) {
    this.service.create(createDevilFruitDto);
  }
}
