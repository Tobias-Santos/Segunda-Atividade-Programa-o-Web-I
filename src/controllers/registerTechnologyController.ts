import { PrismaClient } from "@prisma/client";
import {v4 as uuid} from 'uuid'
import { Request,Response } from "express";


const prisma=new PrismaClient();

const registerTechnology=async(req: Request,res:Response)=>{
    const {title,deadline}=req.body
    try {
        const technology=await prisma.technology.create({
            data:{
                id:uuid(),
                title,
                deadline:new Date(deadline),
                userId:req.userIndex,
                createdAt:new Date(Date.now()),
                studied: false
            }
        })
        return res.status(201).json(technology)
    } catch (error) {
        console.log(error);
    }
}

export default registerTechnology;