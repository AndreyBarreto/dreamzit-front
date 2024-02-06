export interface Dream {
  id: number;
  title: string;
  description: string;
  created_at: string;
  dream_key: string;
  category?: string | null;
  location?: string | null;
}
