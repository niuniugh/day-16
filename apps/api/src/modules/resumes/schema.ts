import z from "zod";
export const ResumeSchema = z.object({
	user_id: z.string(),
	title: z.string().min(3, "Title must be at least 3 characters long"),
	summary: z.string().optional(),
});
