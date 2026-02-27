import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";
import { prisma } from "../../utils/prisma";
import { ResumeSchema } from "./schema";

export const resumeRouter = new Hono()
	.post("/resumes", zValidator("json", ResumeSchema), async (c) => {
		const body = await c.req.valid("json");
		const checkUser = await prisma.user.findUnique({
			where: {
				id: body.user_id,
			},
		});

		if (!checkUser) {
			throw new HTTPException(400, { message: "User doesn't exist" });
		}

		const newResume = await prisma.resume.create({
			data: {
				user_id: body.user_id,
				title: body.title,
				summary: body.summary ?? null,
			},
		});

		return c.json({ resume: newResume });
	})
	.get("/resumes", async (c) => {
		const resumes = await prisma.resume.findMany();
		await new Promise((resolve) => setTimeout(resolve, 2000));
		return c.json({ resumes });
	});
