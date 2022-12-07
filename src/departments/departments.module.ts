import { Module } from '@nestjs/common';
import { DepartmentsService } from './departments.service';
import { DepartmentsResolver } from './departments.resolver';
import { Department } from './entities/department.entity';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { UnitsModule } from 'src/units/units.module';
import { Unit } from './../units/entities/unit.entity';

@Module({
  imports: [
    MikroOrmModule.forFeature({ entities: [Department, Unit] }),
    UnitsModule,
  ],
  providers: [DepartmentsResolver, DepartmentsService],
})
export class DepartmentsModule {}
