import { useMutation } from "@tanstack/react-query";
import { LoginFormInputs } from "@/utils/types";
import { Endpoints } from "@/api/endpoints";
import axiosInstance from "@/axiosinstance/axiosInstance";
import { useDispatch} from "react-redux";
import { addToast } from "@/redux/slices/toastSlice";
const {userlogin} = Endpoints;
const login = async (loginData:LoginFormInputs):Promise<LoginFormInputs | undefined> => {
    try{
const response = await axiosInstance.post(userlogin,loginData);
return response.data as LoginFormInputs;
    }catch(error:unknown){
        if(error instanceof Error){
            console.error(error.message)
        }else{
            throw new Error("An unknown error occurred. Please try again later.");
        }
    }
}



export const UseLogin = ()=>{
const dispatch = useDispatch();
    return useMutation({
        mutationKey:['login'],
        mutationFn:login,
        onSuccess:()=>{
            dispatch(addToast({message:"Login Successful",type:'success'}));

        },
        onError:()=>{
dispatch(addToast({message:'Login Failed!',type:'error'}));
        }
    });
}