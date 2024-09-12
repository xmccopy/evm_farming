import axios, { AxiosInstance, AxiosResponse } from 'axios';

interface RegisterResponse {
  user: {
    id: string;
    email: string;
    password: string;
    activationCode: string;
  };
  token: string;
}

class ApiService {
  private api: AxiosInstance;

  constructor(baseURL: string, token: string = '') {
    this.api = axios.create({
      baseURL: baseURL,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
  }

  setToken(token: string): void {
    this.api.defaults.headers['Authorization'] = `Bearer ${token}`;
  }

  async register(email: string, password: string, activationCode: string): Promise<AxiosResponse<RegisterResponse>> {
    return this.api.post<RegisterResponse>('/auth/register', { email, password, activationCode });
  }
}

export default ApiService;
