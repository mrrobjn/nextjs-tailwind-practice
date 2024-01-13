import api from "@/api";

class UserService {
  async getUsers(params: object) {
    try {
      const res = await api.get("users", { params });
      return res.data;
    } catch (error) {
      throw error;
    }
  }
}

export default new UserService();