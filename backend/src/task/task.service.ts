import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TaskService {
  constructor(private readonly prisma: PrismaService){}
  
  async create(createTaskDto: CreateTaskDto) {
    const { title, description,completed,employeeId } = createTaskDto;

    const employee = await this.prisma.employee.findUnique({where: {id: employeeId}})

    if(!employee){
      throw new NotFoundException("Employee not found")
    }

    const createdEmployee = await this.prisma.task.create({
      data: {
        title, description, completed,employeeId
      }
    })

    return {
      status: "success",
      message: "Tasks created successfully",
      data: createdEmployee
    }

  }

  async findAll() {
    const tasks = await this.prisma.task.findMany({
      include: {
        employee: {
          include: {
            department: {
              include: {
                company: true
              }
            }
          }
        }
      }
    })
    return {
      status: "success",
      message: "Tasks retrieved successfully",
      data: tasks,
    }
  }

  async findOne(id: number) {
    const task = await this.prisma.task.findUnique({
      where: {id},
      include: {
        employee: {
          include: {
            department: {
              include: {
                company: true
              }
            }
          }
        }
      }
    })

    if(!task){
      throw new NotFoundException("Task not found")
    }

    return {
      status: "success",
      message: "Task retrieved successfully",
      data: task
    }
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
     const task = await this.prisma.task.findUnique({
      where: {
        id,
      },
    });

    if (!task) {
      throw new NotFoundException('Task not found');
    }

     // Si employeeId est envoyé, vérifier le nouvel Employee
    if (updateTaskDto.employeeId !== undefined) {
      const employee = await this.prisma.employee.findUnique({
        where: {
          id: updateTaskDto.employeeId,
        },
      });

      if (!employee) {
        throw new NotFoundException('Employee not found');
      }
    }

    const updatedTask = await this.prisma.task.update({
      where: {
        id,
      },
      data: updateTaskDto,
    });

    return {
      status: 'success',
      message: 'Task updated successfully',
      data: updatedTask,
    };
  }

  async remove(id: number) {
    const task = await this.prisma.task.findUnique({
      where: {
        id,
      },
    });

    if (!task) {
      throw new NotFoundException('Task not found');
    }

    await this.prisma.task.delete({
      where: {
        id,
      },
    });

    return {
      status: 'success',
      message: 'Task deleted successfully',
    };
  }
}
