import { useResumes } from "../hooks/useResumes";

export const Resumes = () => {
	const { data, isLoading } = useResumes();

	if (isLoading) {
		return (
			<div className="flex flex-col gap-4 p-4">
				{/* biome-ignore-start lint/suspicious/noArrayIndexKey: static skeleton */}
				{Array.from({ length: 5 }).map((_, i) => (
					<div
						key={i}
						className="flex flex-col border border-gray-200 rounded-md p-4 gap-2"
					>
						<div className="h-3 bg-gray-300 animate-pulse rounded-md w-1/4"></div>
						<div className="h-3 bg-gray-300 animate-pulse rounded-md w-1/3"></div>
					</div>
				))}
				{/* biome-ignore-end lint/suspicious/noArrayIndexKey: static skeleton */}
			</div>
		);
	}

	if (!data) {
		return (
			<div className="flex flex-col items-center justify-center py-20 text-gray-400">
				<p className="text-sm">No resumes yet.</p>
				<p className="text-xs mt-1">Create one to get started.</p>
			</div>
		);
	}

	return (
		<div className="flex flex-col gap-4 p-4">
			{data.map((resume) => (
				<div
					key={resume.id}
					className="border border-gray-200 rounded-md px-5 py-2 hover:border-gray-300 transition cursor-pointer"
				>
					<h4 className="text-md font-medium text-gray-800">{resume.title}</h4>
					<p className="text-xs text-gray-400 line-clamp-3">
						{resume.summary ?? "No summary provided."}
					</p>
				</div>
			))}
		</div>
	);
};
