import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DepartmentsService } from './departments.service';
import { Department } from './entities/department.entity';
import { CreateDepartmentInput } from './dto/create-department.input';
import { UpdateDepartmentInput } from './dto/update-department.input';
import { Unit } from 'src/units/entities/unit.entity';

@Resolver(() => Department)
export class DepartmentsResolver {
  constructor(private readonly departmentsService: DepartmentsService) {}

  @Mutation(() => Department)
  createDepartment(
    @Args('createDepartmentInput') createDepartmentInput: CreateDepartmentInput,
    unitid: number,
  ) {
    return this.departmentsService.create(createDepartmentInput, unitid);
  }

  @Query(() => [Department], { name: 'departments' })
  findAll() {
    return this.departmentsService.findAll();
  }

  @Query(() => Department, { name: 'department' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.departmentsService.findOne(id);
  }

  @Mutation(() => Department)
  updateDepartment(
    @Args('updateDepartmentInput') updateDepartmentInput: UpdateDepartmentInput,
  ) {
    return this.departmentsService.update(
      updateDepartmentInput.id,
      updateDepartmentInput,
    );
  }

  @Mutation(() => Department)
  removeDepartment(@Args('id', { type: () => Int }) id: number) {
    return this.departmentsService.remove(id);
  }
}
