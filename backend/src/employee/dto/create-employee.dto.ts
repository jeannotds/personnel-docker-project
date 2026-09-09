import { Type } from "class-transformer"
import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"

export class CreateEmployeeDto {

    @IsNotEmpty()
    @IsString()
    firstName: string

    @IsOptional()
    @IsString()
    lastName: string

    @IsNotEmpty()
    @IsEmail()
    @IsString()
    email: string

    @Type(() => Number)
    @IsNotEmpty()
    @IsNumber()
    departmentId: number
}
