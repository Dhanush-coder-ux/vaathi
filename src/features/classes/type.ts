export interface ClassProps {
  id: number;
  Banner?: string;
  className: string;
  status: 'Live' | 'Completed';
  subject: string;
  Teacher: string;
  capacity:number;
  details: string;
}