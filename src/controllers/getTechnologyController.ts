import { PrismaClient } from "@prisma/client";
import { Request,Response } from "express";

const prisma=new PrismaClient();

const getTechnology=async(req:Request,res:Response)=>{
    try {
        const technologies=await prisma.technology.findMany({
            where:{
               userId:req.userIndex
            }
        })
        res.status(200).json(technologies)
    } catch (error) {
        console.log(error);
    }
}

export default getTechnology;