import { EntityRepository, wrap } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { CreateUnitInput } from './dto/create-unit.input';
import { UpdateUnitInput } from './dto/update-unit.input';
import { Unit } from './entities/unit.entity';
import PostNotFoundException from './errors/not-found-exception';

@Injectable()
export class UnitsService {
  constructor(
    @InjectRepository(Unit)
    private readonly unitRepository: EntityRepository<Unit>,
  ) {}
  async create({ name, email, phone }: CreateUnitInput) {
    const newUnit = await this.unitRepository.create({ name, email, phone });
    await this.unitRepository.persistAndFlush(newUnit);
    return newUnit;
  }

  async findAll(): Promise<Unit[]> {
    const units = await this.unitRepository.findAll();
    return units;
  }

  async findOne(id: number): Promise<Unit> {
    const unit = await this.unitRepository.findOne(id);
    if (!unit) {
      throw new PostNotFoundException(id);
    }
    return unit;
  }

  async update(id: number, { email, name, phone }: UpdateUnitInput) {
    const existingUnit = await this.unitRepository.findOne(id);
    wrap(existingUnit).assign({ email, name, phone });
    await this.unitRepository.persistAndFlush(existingUnit);
    return existingUnit;
  }

  async remove(id: number) {
    const unit = await this.unitRepository.findOne(id);
    this.unitRepository.removeAndFlush(unit);
  }
}
