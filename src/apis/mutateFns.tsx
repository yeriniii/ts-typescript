import { serverInstance } from "../axios/instances";

interface NewTodo {
  title: string;
  body: string;
  isDone: boolean;
}
interface ToggleTodoPayload {
  id: string; // id의 타입은 여기에 맞게 수정해주세요
  isDone: boolean;
}
export const addTodo = async (payload: NewTodo): Promise<void> => {
  await serverInstance.post("/todos", payload);
};
export const deleteTodo = async (payload: string): Promise<void> => {
  await serverInstance.delete(`/todos/${payload}`);
};
export const toggleTodo = async (payload: ToggleTodoPayload): Promise<void> => {
  await serverInstance.patch(`/todos/${payload.id}`, {
    isDone: !payload.isDone,
  });
};
