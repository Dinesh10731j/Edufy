import { CourseDetailsType } from "@/utils/types";
import { Endpoints } from "@/api/endpoints";
const { createCourse } = Endpoints;
import axiosInstance from "@/axiosinstance/axiosInstance";
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { addToast } from "@/redux/slices/toastSlice";
const createcourse = async (course: CourseDetailsType) => {
  try {
    const response = await axiosInstance.post(createCourse, course);

    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }

    throw new Error("An unexpected error occurred. Please try again later.");
  }
};

export const UseCreateCourse = () => {
  const dispatch = useDispatch();
  return useMutation({
    mutationKey: ["createCourse"],
    mutationFn: createcourse,
    onSuccess: (data) => {
      dispatch(
        addToast({
          type: "success",
          message: data.message,
        })
      );
      
    },

    onError:(error:Error) => {
      dispatch(
        addToast({
          type: "error",
          message:error.message,
        })
      );
    }
  });
};
