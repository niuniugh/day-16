import { createFileRoute, Link } from "@tanstack/react-router";
import { Resumes } from "@/modules/resumes/components/resumeCard";

export const Route = createFileRoute("/resume/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div>
			<div className="flex items-center justify-between px-4 py-3">
				<h2 className="text-lg font-semibold text-gray-800">My Resumes</h2>
				<Link to="/resume/new">
					<button type="button" className="px-4 py-2">
						+ New Resume
					</button>
				</Link>
			</div>
			<Resumes />
		</div>
	);
}
