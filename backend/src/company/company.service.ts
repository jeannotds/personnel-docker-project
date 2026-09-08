import { ConflictException, HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { PrismaService } from '../prisma/prisma.service';
import { stat } from 'fs';

@Injectable()
export class CompanyService {
  constructor(private readonly prisma: PrismaService){}
  async create(createCompanyDto: CreateCompanyDto) {
    const company = await this.prisma.company.findFirst({
      where: {name: createCompanyDto.name}
    })

    if(company){
      // throw new HttpException("Already exist", HttpStatus.CONFLICT)
      throw new ConflictException("Company already exist")
    }
    const companySave = await this.prisma.company.create({
      data: createCompanyDto
    });
    return {
      status: 'success',
      message: "Company created successfully",
      companySave,
    };
  }

  async findAll() {
    const companies = await this.prisma.company.findMany({
      orderBy: {
        createdAt: "desc"
      }
    })

    return {
      status: "success",
      message: "Companies retrieved successfully",
      companies,
    }
  }

  async findOne(id: number) {
    const company = await this.prisma.company.findUnique({
      where: {
        id: id
      }
    })

    if(!company){
      throw new NotFoundException("Company not found")
    }
    return {
      status: "success",
      message: "Company founded successfully",
      company,
    };
  }

  async update(id: number, updateCompanyDto: UpdateCompanyDto) {
    const company = await this.prisma.company.findUnique({
      where: {id:id}
    })
    if(!company){
      throw new NotFoundException("Company not exist")
    }
    const updatedCompany = await this.prisma.company.update({
      where: {id: id},
      data: updateCompanyDto
    })
    return {
      status: "success",
      message: "Company updated successfully",
      updatedCompany
    }
  }

  async remove(id: number) {
    const company = await this.prisma.company.findUnique({where: {id: id}})
    if(!company){
      throw new NotFoundException("Company not exist")
    }
    return await this.prisma.company.delete({
      where: {id: id}
    })
  }
}
