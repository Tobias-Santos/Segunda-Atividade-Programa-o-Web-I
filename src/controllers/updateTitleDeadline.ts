import { PrismaClient } from "@prisma/client";
import {Request,Response} from "express"


const prisma=new PrismaClient();

const updateTitleDeadline=async(req:Request,res:Response)=>{
    const {id}=req.params 
    const {title,deadline}=req.body
    try{
        const technology=await prisma.technology.update({
            where:{
                id
            },
            data:{
                title,
                deadline:new Date(deadline)
            }
        });
        res.status(201).json(technology);
    } catch(error){
        console.log(error);
    }
}

export default updateTitleDeadline;