import axios from "axios";
import { User } from "../models/UserModel";
const URL = "https://648623dda795d24810b7be60.mockapi.io/api/users/";

async function getUsers(): Promise<User[]> {
  const response = await axios.get<User[]>(`${URL}users`);

  return response.data;
}
async function updateUserName(userId: string, name: string): Promise<User> {
  const response = await axios.put<User>(`${URL}users/${userId}`, { name });

  return response.data;
}

export const api = {
  getUsers,
  updateUserName,
};
