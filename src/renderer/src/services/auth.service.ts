import axiosConfig from "../utils/axios";

const AUTH = {
  SIGN_IN: "/auth/sign-in",
  SIGN_UP: "/auth/sign-up",
};

const AuthService = {
  signIn: (email: string, password: string, mac: string) =>
    axiosConfig.post(AUTH.SIGN_IN, {
      email,
      password,
      mac,
    }),
  singUp: (fullName: string, email: string, password: string, mac: string) =>
    axiosConfig.post(AUTH.SIGN_UP, {
      fullName,
      email,
      password,
      mac,
    }),
};

export default AuthService;
