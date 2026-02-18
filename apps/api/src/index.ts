import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { authRouter } from "./modules/auth/route";
import { cors } from "hono/cors";

const app = new Hono();

app.use(
  "*",
  cors({
    origin: "http://localhost:3000",
    allowMethods: ["GET", "POST", "PUT", "DELETE"],
    allowHeaders: ["Content-Type"],
  })
);

const appWithRoutes = app.route("/auth", authRouter);

export type AppType = typeof appWithRoutes;

serve(
	{
		fetch: appWithRoutes.fetch,
		port: 8000,
	},
	(info) => {
		console.log(`Server is running on http://localhost:${info.port}`);
	},
);
