import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@/axiosinstance/axiosInstance";
import { Endpoints } from "@/api/endpoints";

const { startLive } = Endpoints;

const startLiveStream = async () => {
  try {
    const response = await axiosInstance.post(startLive, {
      title: "React js Optimization Technique", 
      streamKey: "Tailwind Css "
    });
    return response.data;
  } catch (error: unknown) {
   if(error instanceof Error){
    throw new Error(error.message)
   }

   throw new Error("An unknown error occured");
  }
};

export const UseStartLive = () => {
  return useMutation({
    mutationKey: ["startLive"],
    mutationFn:startLiveStream
  });
};