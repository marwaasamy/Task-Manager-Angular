export interface Task{
  id:string;
  title: string;
  desc: string;
  priority: string;
  date: string;
  category: string;
  state:string;
}


export type error = {
  message: string;
  state: boolean;
};
