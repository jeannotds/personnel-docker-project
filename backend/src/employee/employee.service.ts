import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class EmployeeService {
  constructor(private readonly prisma: PrismaService){}

  async create(createEmployeeDto: CreateEmployeeDto) {
    const {firstName, lastName, email, telephone, departmentId} = createEmployeeDto;
    const existingDepartment = await this.prisma.department.findFirst({
      where: {id: departmentId}
    })

    if(!existingDepartment){
      throw new NotFoundException("Department not found")
    }
    
    const existingEmployee = await this.prisma.employee.findFirst({
      where: {
        email
      }
    })

    if(existingEmployee){
      throw new ConflictException("Email already exist")
    }

     const existingTelephone = await this.prisma.employee.findFirst({
      where: {
        telephone
      }
    })

    if(existingTelephone){
      throw new ConflictException("Telephone already exist")
    }

    const employee = await this.prisma.employee.create({
      data: {
        firstName, lastName, email, telephone, departmentId
      },
      include: {
        department: {
          select: {
            name: true,
            companyId: true
          }
        }
      }
    })

    return {
      status: "success",
      message: "Employee created successfully",
      data: employee
    }
  }

  findAll() {
    return `This action returns all employee`;
  }

  findOne(id: number) {
    return `This action returns a #${id} employee`;
  }

  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    return `This action updates a #${id} employee`;
  }

  remove(id: number) {
    return `This action removes a #${id} employee`;
  }
}
