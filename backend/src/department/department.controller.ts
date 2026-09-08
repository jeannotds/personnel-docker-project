import { Body, Controller, Get, Post } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { CreateDepartmentDto } from './dto/create-department.dto';

@Controller('departments')
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}

  @Post()
  createDepartment(@Body() createDepartmentDto: CreateDepartmentDto){
    return this.departmentService.create(createDepartmentDto)
  }

  @Get()
  findAll(){
    return this.departmentService.findAll()
  }
}
