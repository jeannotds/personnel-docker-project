import { ResponseEmployees } from "../interfaces/interface";
import api from "../lib/api";

export const getEmployeesHttp = async (): Promise<ResponseEmployees> => {
  try {
    const response = await api.get<ResponseEmployees>("/employees");
    return response.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
