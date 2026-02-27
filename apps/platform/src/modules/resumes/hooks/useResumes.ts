import { useMutation, useQuery } from "@tanstack/react-query";
import type { Resume } from "@/types/resume";
import { api } from "@/utils/api";
import type { ResumeSchema } from "../../../types/resume";

export function useResumes() {
	return useQuery<Resume[]>({
		queryKey: ["resumes"],
		queryFn: async () => {
			const res = await api.resumes.resumes.$get();
			const data = await res.json();
			return data.resumes;
		},
	});
}

export const useCreateResume = () => {
	return useMutation({
		mutationKey: [],
		mutationFn: async ({ user_id, title, summary }: ResumeSchema) => {
			const res = await api.resumes.resumes.$post({
				json: {
					user_id,
					title,
					summary,
				},
			});

			const data = await res.json();
			if (!res.ok) {
				throw new Error("Failed to create resume");
			}
			return data;
		},
	});
};
