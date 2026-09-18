import { ResponseTasks } from "../interfaces/interface";
import api from "../lib/api";

export const getTasksHttp = async (): Promise<ResponseTasks> => {
  try {
    const response = await api.get<ResponseTasks>("/tasks");
    return response.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
