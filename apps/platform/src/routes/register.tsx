import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/register")({ component: App });

function App() {
	return (
		<div className="flex min-h-screen items-center justify-center bg-zinc-100">
			<Card className="w-full max-w-md shadow-2xl">
				<CardHeader>
					<CardTitle>Create new account</CardTitle>
					<CardDescription>
						Enter your email below to register new account
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form>
						<div className="flex flex-col gap-6">
							<div className="grid gap-2">
								<Label htmlFor="email">Email</Label>
								<Input
									id="email"
									type="email"
									placeholder="example@example.com"
									required
								/>
							</div>
							<div className="grid gap-2">
								<div className="flex items-center">
									<Label htmlFor="password">Password</Label>
								</div>
								<Input id="password" type="password" required />
							</div>
						</div>
					</form>
				</CardContent>
				<CardFooter className="flex-col gap-2">
					<Button
						type="submit"
						className="cursor-pointer w-full bg-indigo-700 hover:bg-indigo-800 hover:font-bold"
					>
						Sign up
					</Button>
					<p>
						Already have an account?{" "}
						<a
							href="/login"
							className="text-md font-bold text-indigo-700 hover:text-indigo-800"
						>
							Login
						</a>
					</p>
				</CardFooter>
			</Card>
		</div>
	)
}

