import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client/extension';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DepartmentService {
    constructor(private readonly prisma: PrismaService){}

    async create(createDepartmentDto: CreateDepartmentDto){

        const company = await this.prisma.company.findUnique({
            where: {id: createDepartmentDto.companyId}
        })

        if(!company){
            throw new NotFoundException("Company not found")
        }

        const departementFound = await this.prisma.department.findFirst({
            where: {name: createDepartmentDto.name}
        })

        if(departementFound){
            throw new ConflictException("Department already exist")
        }

        const createDepartmented = await this.prisma.department.create({data: createDepartmentDto, include:{
            company: true
        }})

        return {
            status: "success",
            message: "Department created successfully",
            createDepartmented,
        }
    }

    async findAll(){
        const departments = await this.prisma.department.findMany({
            include: {
                company: true
            }
        })
        return {
            status: "success",
            message: "Departments founded successfully",
            departments
        }
    }

    
}
