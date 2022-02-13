import { Injectable } from '@nestjs/common';
import { DevilFruitDto } from './create/create-devil-fruit.dto';
import { DevilFruit } from './devil-fruit';

@Injectable()
export class DevilFruitsService {
  private readonly devilFruits: DevilFruit[] = [
    new DevilFruit('1', 'Mera Mera', 'Logia'),
    new DevilFruit('2', 'Gomu Gomu', 'Paramecia'),
  ];

  create(devilFruitDto: DevilFruitDto) {
    const devilFruit = new DevilFruit(
      devilFruitDto.id,
      devilFruitDto.name,
      devilFruitDto.type,
    );
    this.devilFruits.push(devilFruit);
  }

  findAll(): DevilFruit[] {
    return this.devilFruits;
  }

  findById(id: string) {
    return this.devilFruits.find((el) => el.id == id);
  }
}
