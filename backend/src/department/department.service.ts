import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client/extension';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateDepartmentDto } from './dto/update-department.dto';

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
            data: createDepartmented,
        }
    }

    async findAll(){
        const departments = await this.prisma.department.findMany({
            include: {
                company: true
            },
            orderBy: {
                createdAt: "desc"
            }
        })
        return {
            status: "success",
            message: "Departments founded successfully",
            departments
        }
    }

    async findOne(id: number){
        const company = await this.prisma.department.findUnique({
            where: {
                id:id
            }
        })

        if(!company){
            throw new NotFoundException("Department not found")
        }

        return {
            status: "success",
            message: "Department founded successfully",
            data: company
        }
    }

    async update(id: number, updateDepartmentDto: UpdateDepartmentDto){
        const findDepartment = await this.prisma.department.findUnique({
            where: {id}
        })

        if(!findDepartment){
            throw new NotFoundException("Department not found")
        }

        const findCompany = await this.prisma.company.findUnique({
            where: {id: updateDepartmentDto.companyId}
        })

        if(!findCompany){
            throw new NotFoundException("Company not found")
        }

        const updateDepartment = await this.prisma.department.update({
            where: {id: id},
            data: updateDepartmentDto
        })

        return {
            status: "success",
            message: "Department upated successfully",
            data: updateDepartment,
        }
    }

    
}
