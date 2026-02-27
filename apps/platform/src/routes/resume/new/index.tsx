import { createFileRoute } from "@tanstack/react-router";
import { ResumeForm } from "@/modules/resumes/components/resumeForm";

export const Route = createFileRoute("/resume/new/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div>
			<ResumeForm />
		</div>
	);
}
