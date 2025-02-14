import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { LoginFormInputs, loginResponse } from "@/utils/types";
import { Endpoints } from "@/api/endpoints";
import axiosInstance from "@/axiosinstance/axiosInstance";
import { useDispatch } from "react-redux";
import { addToast } from "@/redux/slices/toastSlice";
import Cookies from "js-cookie";
const { userlogin } = Endpoints;

const login = async (loginData: LoginFormInputs): Promise<loginResponse> => {
  try {
    const response = await axiosInstance.post<loginResponse>(userlogin, loginData);
    return response.data;
  } catch (error: unknown) {
  
    if (error instanceof Error) {
      console.error(`Login failed: ${error.message}`);
      throw new Error(error.message); 
    }

    throw new Error("An unknown error occurred. Please try again later.");
  }
};

export const UseLogin = (): UseMutationResult<loginResponse, Error, LoginFormInputs> => {
  const dispatch = useDispatch();

  return useMutation<loginResponse, Error, LoginFormInputs>({
    mutationKey: ["login"],
    mutationFn: login,
    onSuccess: (data) => {
      const token = data?.token;

      if (token) {
        Cookies.set("token", token, {
          expires: 7,
          secure: true,
          sameSite: "Strict",
        });
        dispatch(addToast({ message: "Login Successful", type: "success" }));
      }
    },
    onError: (error: Error) => {
      console.error(`Error during login: ${error.message}`);
      dispatch(addToast({ message: "Login Failed!", type: "error" }));
    },
  });
};
