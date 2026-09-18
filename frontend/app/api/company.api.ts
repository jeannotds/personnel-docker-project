import {
  CreateCompany,
  ResponseCompanies,
  ResponseCompany,
  UpdateCompany,
} from "../interfaces/interface";
import api from "../lib/api";

export const getCompaniesHttp = async (): Promise<ResponseCompanies> => {
  try {
    const response = await api.get<ResponseCompanies>("/companies");
    return response.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const getCompanyHttp = async (id: number): Promise<ResponseCompany> => {
  try {
    const response = await api.get<ResponseCompany>(`/companies/${id}`);
    return response.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const createCompanyHttp = async (
  data: CreateCompany,
): Promise<ResponseCompany> => {
  try {
    const response = await api.post<ResponseCompany>("/company", data);
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const updateCompanyHttp = async (
  id: number,
  data: UpdateCompany,
): Promise<ResponseCompany> => {
  try {
    const response = await api.patch<ResponseCompany>(`/companies/${id}`, data);
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const deleteCompany = async (id: number): Promise<ResponseCompany> => {
  try {
    const response = await api.delete<ResponseCompany>(`/companies/${id}`);
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
