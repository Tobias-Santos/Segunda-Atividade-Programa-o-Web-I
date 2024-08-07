import { PrismaClient } from "@prisma/client";
import { Request,Response } from "express";


const prisma=new PrismaClient();

const deleteTechnology=async(req:Request,res:Response)=>{
    const {id}=req.params
    try {
        await prisma.technology.delete({
            where:{
                id
            }
        });

    } catch (error) {
        res.status(404).json({error:"Mensagem de erro"})
    }
}

export default deleteTechnology;