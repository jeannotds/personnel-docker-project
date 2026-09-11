import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { CompanyModule } from './company/company.module';
import { DepartmentModule } from './department/department.module';
import { EmployeeModule } from './employee/employee.module';
import { TaskModule } from './task/task.module';
import { RedisService } from './redis/redis.service';
import { RedisModule } from './redis/redis.module';

@Module({
  imports: [PrismaModule, CompanyModule, DepartmentModule, EmployeeModule, TaskModule, RedisModule],
  controllers: [AppController],
  providers: [AppService, RedisService],
})
export class AppModule {}
