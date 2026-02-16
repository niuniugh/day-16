import { Button } from "@day-16/ui";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
	return (
		<div>
			<Button label="Click me" />
		</div>
	);
}
