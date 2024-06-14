import axios from "axios";
import { ApiResponse } from "../model/user";

class DataService {

  private readonly baseUrl: string

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }

  async getUser(): Promise<ApiResponse> {
    try {

      const response: ApiResponse = await axios.get(this.baseUrl);
      const { data, status, statusText } = response;
      return { data, status, statusText };
    }
    catch (error) {
      throw error
    }

  }

}


export { DataService }