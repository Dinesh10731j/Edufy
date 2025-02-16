import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@/axiosinstance/axiosInstance";
import { Endpoints } from "@/api/endpoints";
const { startLive } = Endpoints;

const startlive = async () => {
  try {
    const hostId: string = "DMt8tyaBnGTG250gAAAD";

    const response = await axiosInstance.post(startLive, {host:hostId});
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }

    throw new Error("An unknown error occured");
  }
};

export const UseStartLive = () => {
  return useMutation({
    mutationKey: ["startLive"],
    mutationFn: startlive,
  });
};
