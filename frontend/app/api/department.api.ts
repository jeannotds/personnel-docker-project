import { ResponseDepartments } from "../interfaces/interface";
import api from "../lib/api";

export const getDepartmentsHttp = async (): Promise<ResponseDepartments> => {
  try {
    const response = await api.get<ResponseDepartments>("/departments");
    console.log("response companies : ", response.data);
    return response.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
