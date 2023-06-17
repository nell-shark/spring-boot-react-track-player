import {axiosInstance} from '@services/axios-instance';
import {UserInfo} from "@interfaces/user-Info";

class UserService {
    public getUserInfo() {
        return axiosInstance.get<UserInfo>('/api/v1/users/info');
    }
}

export const userService = new UserService();
