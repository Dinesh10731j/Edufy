import { useMutation } from "@tanstack/react-query";
import { Endpoints } from "@/api/endpoints";
const { register } = Endpoints;
import axiosInstance from "@/axiosinstance/axiosInstance";
import { SignupFormInputs } from "@/utils/types";
const signup = async (registerData: SignupFormInputs) => {
  try {
    const response = await axiosInstance.post(register, registerData);
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("An error occured");
    }
  }
};

export const UseRegister = () => {
  return useMutation({
    mutationKey: ["register"],
    mutationFn: signup,
  });
};
