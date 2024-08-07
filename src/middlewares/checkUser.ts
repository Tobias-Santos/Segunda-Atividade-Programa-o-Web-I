import { PrismaClient } from "@prisma/client";
import {Request,Response,NextFunction} from 'express'

const prisma=new PrismaClient();

export const checkExistsUserAccount=async(req:Request,res:Response,next:NextFunction)=>{
    let { username } = req.headers;

    if (Array.isArray(username)) {
        username = username[0];
      }

    try {

        if (typeof username !== 'string' || !username.trim()) {
            return res.status(400).send("Invalid username");
        }
        const user=await prisma.user.findUnique({
            where:{
                username
            },
        });

    if (user) {
        req.userIndex=user.id;
        next();
      } else {
        res.status(404).send("user not exists")
      }
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
}