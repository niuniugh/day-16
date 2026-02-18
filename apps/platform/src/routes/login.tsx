import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { api } from "../utils//api";

export const Route = createFileRoute("/login")({ component: App });

function App() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	async function handleLogin(e: React.SubmitEvent<HTMLFormElement>) {
		e.preventDefault();

		try {
			const res = await api.auth.login.$post({
				json: { email, password },
			});
			await res.json();
		} catch (error) {
			console.error("Login failed:", error);
		}
	}

	return (
		<div className="flex min-h-screen items-center justify-center bg-zinc-100">
			<Card className="w-full max-w-md shadow-2xl">
				<CardHeader>
					<CardTitle>Login to your account</CardTitle>
					<CardDescription>
						Enter your email below to login to your account
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleLogin}>
						<div className="flex flex-col gap-6">
							<div className="grid gap-2">
								<Label htmlFor="email">Email</Label>
								<Input
									id="email"
									type="email"
									placeholder="example@example.com"
									required
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
							<div className="grid gap-2">
								<div className="flex items-center">
									<Label htmlFor="password">Password</Label>
								</div>
								<Input
									id="password"
									type="password"
									required
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
							</div>
							<Button
								type="submit"
								className="cursor-pointer w-full bg-indigo-700 hover:bg-indigo-800 hover:font-bold"
							>
								Login
							</Button>
							<p>
								Don't have an account?{" "}
								<a
									href="/register"
									className="text-md font-bold text-indigo-700 hover:text-indigo-800"
								>
									Sign up
								</a>
							</p>
						</div>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
