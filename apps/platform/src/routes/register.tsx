import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/register")({ component: App });

function App() {
    return (
        <div>
            <header>This is the register page!</header>
        </div>
    );
}