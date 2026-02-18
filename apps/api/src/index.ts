import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { exportRoute } from "./export/route";

const app = new Hono()
	.use(
		cors({
			origin: "http://localhost:3000",
		}),
	)
	.get("/", (c) => {
		return c.text("Hello Hono!");
	})
	.route("/export", exportRoute);

serve(
	{
		fetch: app.fetch,
		port: 8000,
	},
	(info) => {
		console.log(`Server is running on http://localhost:${info.port}`);
	},
);
