export interface Faculty {
  id: number;
  name: string;
  email: string;
  role: "teacher" | "student";
  details: string;
  profileUrl?: string;
}