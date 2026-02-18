import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";
import { prisma } from "../../utils/prisma";
import { LoginSchema, RegisterSchema } from "./schema";
import { hashPassword } from "./utils";
import { comparePassword } from "./utils";
import jwt from "jsonwebtoken";
import "dotenv/config";

export const authRouter = new Hono().post(
	"/register",
	zValidator("json", RegisterSchema),
	async (c) => {

		// check collision
		const body = await c.req.valid("json");
		const existingUser = await prisma.user.findUnique({
			where: {
				email: body.email,
			},
		});

		if (existingUser) {
			throw new HTTPException(409, { message: "Email already in use" });
		}

		// create new user using hashed password
		const userPassword = await hashPassword(body.password);
		await prisma.user.create({
			data: {
				full_name: "",
				email: body.email,
				password: userPassword,
			},
		});

		return c.json({ message: "User registered successfully" });
	},
).post("/login", zValidator("json", LoginSchema), async (c) => {

    // check collision
    const body = await c.req.valid('json');
    const existingUser = await prisma.user.findUnique({
        where: {
            email: body.email,
        },
    });

    if (!existingUser) {
        throw new HTTPException(401, { message: "Invalid email or password" });
    }

    // compare password
    const isPasswordValid = await comparePassword(body.password, existingUser.password);

    if (!isPasswordValid) {
        throw new HTTPException(401, { message: "Invalid email or password" });
    }

    // generate JWT token
    const token = jwt.sign({
        sub: existingUser.id,
        email: existingUser.email,
    }, process.env.JWT_SECRET!);

    return c.json({ message: "Login successful", token });
});
