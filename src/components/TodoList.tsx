import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getTodos } from "../apis/queryFns";
import { Todo } from "./Todo";

interface TodoListProps {
  isActive: boolean;
}
export const TodoList: React.FC<TodoListProps> = ({ isActive }) => {
  const { data: todos, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });
  if (isLoading) {
    return <div>loading...</div>;
  }
  const filteredTodos =
    todos?.filter((todo) => todo.isDone === !isActive) || [];
  return (
    <div>
      <h2 className="text-2xl font-bold mt-3">
        {isActive ? "Working🔥!" : "Done🎊!"}
      </h2>
      <div className="flex flex-row flex-wrap p-3">
        {filteredTodos.map((todo) => {
          return <Todo key={todo.id} todo={todo}></Todo>;
        })}
      </div>
    </div>
  );
};
