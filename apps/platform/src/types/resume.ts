export interface Resume {
	id: string;
	user_id: string;
	title: string;
	summary?: string | null;
	created_at: string;
	updated_at: string;
}

export interface ResumeSchema {
	title: string;
	summary: string;
	user_id: string;
}
