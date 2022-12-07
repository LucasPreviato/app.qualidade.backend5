import { EntityRepository, wrap } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { Unit } from './../units/entities/unit.entity';
import PostNotFoundException from './../errors/not-found-exception';
import { CreateDepartmentInput } from './dto/create-department.input';
import { UpdateDepartmentInput } from './dto/update-department.input';
import { Department } from './entities/department.entity';

@Injectable()
export class DepartmentsService {
  constructor(
    @InjectRepository(Department)
    private readonly departmentRepository: EntityRepository<Department>,
  ) {}
  async create(createDepartmentInput: CreateDepartmentInput, unitid: number) {
    const newDepartment = await this.departmentRepository.create({
      ...createDepartmentInput,
      unitid,
    });
    await this.departmentRepository.persistAndFlush(newDepartment);
    return newDepartment;
  }

  async findAll(): Promise<Department[]> {
    const departments = await this.departmentRepository.findAll();
    return departments;
  }

  async findOne(id: number): Promise<Department> {
    const department = await this.departmentRepository.findOne(id);
    if (!department) {
      throw new PostNotFoundException(id);
    }
    return department;
  }

  async update(
    id: number,
    { name, description, email, initials, unitid }: UpdateDepartmentInput,
  ) {
    const existingDepartment = await this.departmentRepository.findOne(id);
    wrap(existingDepartment).assign({
      name,
      description,
      email,
      initials,
      unitid,
    });
    await this.departmentRepository.persistAndFlush(existingDepartment);
    return existingDepartment;
  }

  async remove(id: number) {
    const department = await this.departmentRepository.findOne(id);
    this.departmentRepository.removeAndFlush(department);
  }
}
