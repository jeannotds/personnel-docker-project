import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class EmployeeService {
  constructor(private readonly prisma: PrismaService){}

  async create(createEmployeeDto: CreateEmployeeDto) {
    const {firstName, lastName, email, telephone, departmentId} = createEmployeeDto;
    const existingDepartment = await this.prisma.department.findUnique({
      where: {id: departmentId}
    })

    if(!existingDepartment){
      throw new NotFoundException("Department not found")
    }
    
    const existingEmployee = await this.prisma.employee.findUnique({
      where: {
        email
      }
    })

    if(existingEmployee){
      throw new ConflictException("Email already exist")
    }

     const existingTelephone = await this.prisma.employee.findUnique({
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
          include: {
            company: true
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

  async findAll() {
    const employees = await this.prisma.employee.findMany({
      include:{
        department: {
          include: {
            company: true
          }
        }
      }
    })
    return {
      status: "success",
      message: "Employees retrieved successfully",
      data: employees,
    }
  }

  async findOne(id: number) {
    const employee = await this.prisma.employee.findUnique({
      where: {id},
      include: {
        department: {
          include: {
            company: true,
          }
        }
      }
    })

    if(!employee){
      throw new NotFoundException("Employee not found")
    }

    return {
      status: "success",
      message: "Employee founded successfully",
      data: employee,
    }
  }

  async update(id: number, updateEmployeeDto: UpdateEmployeeDto) {

      const employee = await this.prisma.employee.findUnique({where: {id}})

      if(!employee){
        throw new NotFoundException("Employee not found")
      }


        // Vérifier le nouveau département uniquement
        // s'il est envoyé dans la requête
        if (updateEmployeeDto.departmentId !== undefined) {
          const department = await this.prisma.department.findUnique({
            where: {
              id: updateEmployeeDto.departmentId,
            },
          });

          if (!department) {
            throw new NotFoundException('Department not found');
          }
        }

      const updatedEmployee = await this.prisma.employee.update({
        where: {id},
        data: updateEmployeeDto,
      })

      return {
        status: "success",
        message: "Employee updated successfully",
        data: updatedEmployee,
      }
  }

  async remove(id: number) {
          const employee = await this.prisma.employee.findUnique({where: {id}})

      if(!employee){
        throw new NotFoundException("Employee not found")
      }

      const department = await this.prisma.department.findUnique({where: {id: employee.departmentId}})

      if(!department){
        throw new NotFoundException("Department not found")
      }

      await this.prisma.employee.delete({
        where: {id}
      })

      return {
        status: "success",
        message: "Employee deleted successfully",
      }

  }
}
