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

export class Department {}
