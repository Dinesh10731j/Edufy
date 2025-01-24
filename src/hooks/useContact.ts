import { Endpoints } from "@/api/endpoints";
const { userContact } = Endpoints;
import axiosInstance from "@/axiosinstance/axiosInstance";
import { useMutation } from "@tanstack/react-query";
import { ContactFormInputs } from "@/utils/types";
const contact = async (contactData: ContactFormInputs) => {
  try {
    const response = await axiosInstance.post(userContact, contactData);

    if (response.status === 201) {
      return response.data;
    } else {
      throw new Error(response.data.message);
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("An unknown error occurred");
    }
  }
};

export const UseContact = () => {
  return useMutation({
    mutationKey: ["contact"],
    mutationFn: contact,
  });
};
