import { serverInstance } from "../axios/instances";

export interface Todo {
  id: string;
  title: string;
  body: string;
  isDone: boolean;
}
//Todo[] :
export const getTodos = async (): Promise<Todo[]> => {
  const { data } = await serverInstance.get("/todos");
  return data;
};
