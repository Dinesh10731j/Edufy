import { Endpoints } from "@/api/endpoints";
const { userContact } = Endpoints;
import axiosInstance from "@/axiosinstance/axiosInstance";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { ContactFormInputs, contactResponse } from "@/utils/types";
import { useDispatch } from "react-redux";
import { addToast } from "@/redux/slices/toastSlice";
const contact = async (
  contactData: ContactFormInputs
): Promise<contactResponse> => {
  try {
    const response = await axiosInstance.post<contactResponse>(
      userContact,
      contactData
    );
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("An unknown error occurred");
    }
  }
};

export const UseContact = (): UseMutationResult<
  contactResponse,
  Error,
  ContactFormInputs
> => {
  const dispatch = useDispatch();
  return useMutation<contactResponse, Error, ContactFormInputs>({
    mutationKey: ["contact"],
    mutationFn: contact,
    onSuccess: (data) => {
      console.log("This is the response from the server",data);
      dispatch(addToast({ type: "success", message: data.message }));
    },
    onError: (error) => {
      dispatch(addToast({ type: "error", message: error.message }));
    },
  });
};
