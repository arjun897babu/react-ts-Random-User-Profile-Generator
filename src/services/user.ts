import { ApiResponse, User } from "../model/user";
import { DataService } from "./data";


class UserService {

  private readonly dataService: DataService

  constructor(dataService: DataService) {
    this.dataService = dataService
  }
  
  async getUserDetails(): Promise<User | undefined> {
    try {
      const response: ApiResponse = await this.dataService.getUser()
       
      return response.data
    } catch (error) {
       
     throw error
    }
  }
}



export { UserService }