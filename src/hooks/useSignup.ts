import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { redirect } from "next/navigation";
import { useDispatch } from "react-redux";
import { addToast } from "@/redux/slices/toastSlice";
import { SignupFormInputs } from "@/utils/types";
import { Endpoints } from "@/api/endpoints";
import axiosInstance from "@/axiosinstance/axiosInstance";
import Cookies from "js-cookie";
import { signupResponse } from "@/utils/types";
const { register } = Endpoints;

const signup = async (
  registerData: SignupFormInputs
): Promise<signupResponse> => {
  try {
    const response = await axiosInstance.post<signupResponse>(
      register,
      registerData
    );
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(`Signup failed: ${error.message}`);
      throw new Error(error.message);
    }
    throw new Error("An unknown error occurred during signup.");
  }
};

export const UseRegister = (): UseMutationResult<
  signupResponse,
  Error,
  SignupFormInputs
> => {

  const dispatch = useDispatch();
  return useMutation<signupResponse, Error, SignupFormInputs>({
    mutationKey: ["register"],
    mutationFn: signup,
    onSuccess: (data) => {
      console.log("User successfully registered:", data);
      const token = data?.token;

      if (token) {
        Cookies.set("token", token, {
          expires: 7,
          secure: true,
          sameSite: "Strict",
        });
           dispatch(addToast({ message: "Signup Successful", type: "success" }));

        setTimeout(() => {
          redirect("/user/login");
        }, 1000);
      }
    },
    onError: (error: Error) => {

      console.error("Error during registration:", error.message);
      dispatch(addToast({ message: "Signup Failed!", type: "error" }));
    },
  });
};
