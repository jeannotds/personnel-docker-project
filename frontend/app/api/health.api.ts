import axios from "axios";
import { HealthProps } from "../interfaces/interface";

export const healthHttp = async (): Promise<HealthProps> => {
  try {
    const response = await axios.get<HealthProps>("http://localhost:3005/health");
      return response.data;
  } catch (err) {
    console.error(err);
    throw err
  }
};
