import { Module } from '@nestjs/common';
import { UnitsService } from './units.service';
import { UnitsResolver } from './units.resolver';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Unit } from './entities/unit.entity';

@Module({
  imports: [MikroOrmModule.forFeature([Unit])],
  providers: [UnitsResolver, UnitsService],
})
export class UnitsModule {}
