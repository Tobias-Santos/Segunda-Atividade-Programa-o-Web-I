import {Request,Response} from "express";
import { PrismaClient } from "@prisma/client";
import {v4 as uuid} from "uuid"

const prisma=new PrismaClient();

 const registerUser=async(req:Request,res:Response)=>{
    const {name,username}=req.body as BodyType;
    try {
        const user=await prisma.user.create({
            data:{
                id:uuid(),
                name,
                username
            }
        });
        return res.status(201).json(user);
    }
     catch (error) {
        console.log(error)
    }
}

export default registerUser;