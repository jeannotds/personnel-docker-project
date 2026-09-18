export interface HealthProps {
  status: string;
  message: string;
}

export interface Company {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateCompany {
  name: string;
}

export interface UpdateCompany {
  name: string;
}

export interface ResponseCompany {
  status: string;
  message: string;
  data: Company;
}

export interface ResponseCompanies {
  status: Boolean;
  message: string;
  data: Company[];
}

export interface Department {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateDepartment {
  name: string;
  companyId: number;
}

export interface ResponseDepartments {
  status: string;
  message: string;
  data: Department[];
}

export interface ResponseDepartment {
  status: string;
  message: string;
  data: Department;
}

export interface Department {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  companyId: number;
  company: Company;
}

export interface CreateEmployee {
  firstName: string;
  lastName: string;
  email: string;
  telephone: string;
}

export interface ResponseEmployees {
  status: string;
  message: string;
  data: Employee[];
}

export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  telephone: string;
  createdAt: string;
  updatedAt: string;
  departmentId: number;
  department: Department;
}

export interface CreateTask {
  title: string;
  description: string;
  completed: Boolean;
}

export interface ResponseTasks {
  id: number;
  title: string;
  description: string;
  completed: Boolean;
  createdAt: string;
  updatedAt: string;
  employeeId: number;
  data: Employee[];
}
