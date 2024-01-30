export interface Dream {
  title: string;
  description: string;
  created_at: string;
  dream_key: string;
  category?: string | null;
  location?: string | null;
}
