import { useState } from "react";
import { useCreateResume } from "../hooks/useResumes";

export const ResumeForm = () => {
	const [title, setTitle] = useState("");
	const [summary, setSummary] = useState("");

	const { mutate: createResume, isPending } = useCreateResume();

	function handleSubmitForm(event: React.FormEvent) {
		event.preventDefault();
		createResume({ user_id: "mock-user-123", title, summary });
	}

	return (
		<div className="max-w-md mx-auto mt-10">
			<section className="mb-2">
				<h3 className="text-xl font-semibold text-gray-800">
					Create New Resume
				</h3>
				<p className="text-md text-gray-500">
					Fill in the details below to get started.
				</p>
			</section>

			<section>
				<form onSubmit={handleSubmitForm} className="flex flex-col gap-4">
					<div className="flex flex-col gap-1">
						<label
							htmlFor="title"
							className="text-sm font-medium text-gray-700"
						>
							Title
						</label>
						<input
							id="title"
							name="title"
							placeholder="e.g. Software Engineer Resume"
							onChange={(e) => setTitle(e.target.value)}
							className="border border-gray-200 rounded-md py-2 px-4 text-sm text-gray-800 placeholder-gray-400 "
						/>
					</div>

					<div className="flex flex-col gap-1">
						<label
							htmlFor="summary"
							className="text-sm font-medium text-gray-700"
						>
							Summary
						</label>
						<textarea
							id="summary"
							name="summary"
							placeholder="Brief summary about yourself..."
							onChange={(e) => setSummary(e.target.value)}
							rows={4}
							className="border border-gray-200 rounded-md py-2 px-4 text-sm text-gray-800 placeholder-gray-400 "
						/>
					</div>

					<button disabled={isPending} type="submit">
						{isPending ? "Creating..." : "Create Resume"}
					</button>
				</form>
			</section>
		</div>
	);
};
