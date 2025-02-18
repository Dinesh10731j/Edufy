import axiosInstance from "@/axiosinstance/axiosInstance";
import { useQuery } from "@tanstack/react-query";
import { Endpoints } from "@/api/endpoints";
const {joinLive} = Endpoints;
const joinlive = async ()=>{
    try{

        const response = await axiosInstance.get(joinLive);
        return response.data;

    }catch(error:unknown){
        if(error instanceof Error){
            throw new Error(error.message)
        }else{
            throw new Error("An unexpected error occured");
        }
    }
}


export const UseJoinLive = ()=>{
    return useQuery({
        queryKey:['joinLive'],
        queryFn:joinlive,
        refetchInterval:1000,
        refetchOnMount:'always',
        refetchOnReconnect:'always',
        staleTime:1000
    })
}