import { Hono } from "hono";
import { prisma } from "../../utils/prisma";
import { HTTPException } from "hono/http-exception";
import { hashPassword } from "./utils";
import { zValidator } from "@hono/zod-validator";
import { RegisterSchema } from "./schema";


export const authRouter = new Hono().post("/register", zValidator("json", RegisterSchema),async (c) => {
    // check collision
    const body = await c.req.json();
    const existingUser = await prisma.user.findUnique({
        where: {
            email: body.email,
        },
    });

    if (existingUser) {
        throw new HTTPException(409, { message: "Email already in use" });
    }

    // create new using hashed password
    const userPassword = await hashPassword(body.password); 
    await prisma.user.create({
        data: {
            full_name: '',
            email: body.email,
            password: userPassword,
        },
    });

    return c.json({ message: "User registered successfully" });
});
