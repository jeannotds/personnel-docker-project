import {
  ConflictException,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { PrismaService } from '../prisma/prisma.service';
import { RedisService } from '../redis/redis.service';

@Injectable()
export class CompanyService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly redis: RedisService,
  ) {}

  async create(createCompanyDto: CreateCompanyDto) {
    const company = await this.prisma.company.findFirst({
      where: { name: createCompanyDto.name },
    });

    if (company) {
      // throw new HttpException("Already exist", HttpStatus.CONFLICT)
      throw new ConflictException('Company already exist');
    }
    const companySave = await this.prisma.company.create({
      data: createCompanyDto,
    });

    // invalidate cache companies
    await this.redis.getClient().del('companies');
    // await this.redis.getClient().del("company")

    return {
      status: 'success',
      message: 'Company created successfully',
      data: companySave,
    };
  }

  async findAll() {
    const cacheKey = 'companies';

    //chercher dans cache
    const cacheCompanies = await this.redis.get(cacheKey);

    if (cacheCompanies) {
      console.log('Companies loaded from Redis ⚡');
      return {
        status: 'success',
        message: 'Companies retried from cache successfully',
        data: JSON.parse(cacheCompanies),
      };
    }

    // 2. Si pas dans Redis → PostgreSQL
    const companies = await this.prisma.company.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    await this.redis.set(cacheKey, companies, 30);

    console.log('companies : ', companies);

    return {
      status: 'success',
      message: 'Companies retrieved successfully',
      data: companies,
    };
  }

  async findOne(id: number) {
    const cacheKey = `company:${id}`;

    const cacheCompany = await this.redis.get(cacheKey);

    if (cacheCompany) {
      console.log(`Company ${id} loaded from Redis ⚡`);
      return {
        status: 'success',
        message: 'Company retried from cache successfully',
        data: JSON.parse(cacheCompany),
      };
    }

    const company = await this.prisma.company.findUnique({
      where: {
        id: id,
      },
    });

    if (!company) {
      throw new NotFoundException('Company not found');
    }

    //Mettre en cache
    await this.redis.set(cacheKey, company, 60);

    return {
      status: 'success',
      message: 'Company founded successfully',
      data: company,
    };
  }

  async update(id: number, updateCompanyDto: UpdateCompanyDto) {
    const company = await this.prisma.company.findUnique({
      where: { id: id },
    });

    if (!company) {
      throw new NotFoundException('Company not exist');
    }

    const updatedCompany = await this.prisma.company.update({
      where: { id: id },
      data: updateCompanyDto,
    });

    // Invalidate cache company
    await this.redis.del('companies');
    await this.redis.del(`company:${id}`);

    return {
      status: 'success',
      message: 'Company updated successfully',
      data: updatedCompany,
    };
  }

  async remove(id: number) {
    const company = await this.prisma.company.findUnique({ where: { id: id } });
    if (!company) {
      throw new NotFoundException('Company not exist');
    }
    const deletedCompany = await this.prisma.company.delete({
      where: { id: id },
    });

    // Invalide cache company
    await this.redis.del('companies');
    await this.redis.del(`company:${id}`);

    return {
      status: 'success',
      message: 'Company deleted successfully',
      data: deletedCompany,
    };
  }
}
