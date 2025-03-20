import axiosInstance from "@/axiosinstance/axiosInstance";
import { Endpoints } from "@/api/endpoints";
const {uploadImages} = Endpoints
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { addToast } from "@/redux/slices/toastSlice";

const uploadImage = async (file:FormData)=>{
    try{

        const response = await axiosInstance.post(uploadImages,file,{
            headers:{
                "Content-Type":"multipart/form-data"
            }
        });
        return response.data;
    }catch(error:unknown){
        if(error instanceof Error){
            throw new Error(error.message);
        }
    }
}



export const UseUploadImage =()=>{
    const dispatch = useDispatch();
    return useMutation({mutationKey:['uploadImage'],mutationFn:uploadImage,onSuccess:()=>{
        dispatch(addToast({message:"Image uploaded successfully",type:"success"}))
    },
    
    
    onError:()=>{
        dispatch(addToast({message:"Image upload failed",type:"error"}))
    }});
   
}
