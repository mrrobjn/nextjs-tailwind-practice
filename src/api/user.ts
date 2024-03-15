import api from ".";

class UserService {
  async getUsers(params: object) {
    try {
      const res = await api.get("api/user", { params });
      return res.data;
    } catch (error) {
      throw error;
    }
  }

  async login(data: StringIndexSignature) {
    try {
      const formData = new FormData();
      Object.keys(data).forEach(key => formData.append(key, data[key]));
      const res = await api.post("api/auth", formData);
      return res.data;
    } catch (error) {
      throw error;
    }
  }
}

export default new UserService();
