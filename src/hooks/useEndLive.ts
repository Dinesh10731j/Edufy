import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@/axiosinstance/axiosInstance";
import { Endpoints } from "@/api/endpoints";
const { endLive } = Endpoints;
const endLiveStream = async () => {
  try {
    const response = await axiosInstance.post(endLive);

    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }

    throw new Error("An unexpected error occured");
  }
};

export const UseEndLiveStream = () => {
  return useMutation({
    mutationKey: ["endLive"],
    mutationFn: endLiveStream,
  });
};
