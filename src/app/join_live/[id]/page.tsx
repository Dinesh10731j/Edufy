"use client";
import { useParams } from "next/navigation";
const JoinLive = ()=>{
    const params = useParams();
    return(
        <>

        <h1>{`Hello world ${params.id}`}</h1>
        </>
    )
}


export default JoinLive;