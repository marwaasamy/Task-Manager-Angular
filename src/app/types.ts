export interface Task{
  id:string;
  title: string;
  desc: string;
  priority: string;
  date: string;
  category: string;
  state:string;
}

export interface User{
  id:string,
  username:string,
  email:string,
  password:string
}


export type error = {
  message: string;
  state: boolean;
};

export interface notification{
  message:string,
  type:'success'|'error',
  duration:number
}

export const baseURL: string = 'http://localhost:3000';