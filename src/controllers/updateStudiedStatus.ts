import { PrismaClient } from "@prisma/client";
import { Request,Response } from "express";


const prisma=new PrismaClient();

const updateStudiedStatus=async(req:Request,res:Response)=>{
    const {id}=req.params 
    try {
        const technology=await prisma.technology.update({
            where:{
                id
            },
            data:{
                studied:true
            }
        })
        res.status(201).json(technology);
    } catch (error) {
        console.log(error);
    }
}

export default updateStudiedStatus;