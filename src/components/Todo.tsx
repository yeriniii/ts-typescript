import React from "react";
import { Todo as TodoType } from "../apis/queryFns";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTodo, toggleTodo } from "../apis/mutateFns";

interface TodoCard {
  todo: TodoType;
}
export const Todo: React.FC<TodoCard> = ({ todo }) => {
  const queryClient = useQueryClient();
  const { title, body, id, isDone } = todo;
  const { mutate: mutateToDelete } = useMutation({
    mutationFn: deleteTodo,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
  const { mutate: mutateToToggle } = useMutation({
    mutationFn: toggleTodo,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
  return (
    <div className="w-80 h-48 border-4 border-teal-600 rounded-lg m-3 p-3">
      <div className="flex flex-row justify-between">
        <h3 className="font-bold text-xl ml-1">{title}</h3>
        <button
          type="button"
          className="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </div>
      <p className="ml-3 mt-5 text-lg">{body}</p>
      <div className="flex justify-center mt-7">
        <button
          className="w-40 h-10 rounded-full m-1 bg-pink-500 text-white font-medium hover:bg-pink-600 focus:outline-none focus:bg-pink-600"
          onClick={() => mutateToDelete(id)}
        >
          삭제
        </button>
        <button
          className="w-40 h-10 rounded-full m-1 bg-teal-600 text-white font-medium hover:bg-teal-700 focus:outline-none focus:bg-teal-700"
          onClick={() => mutateToToggle({ id, isDone })}
        >
          {isDone ? "취소" : "완료"}
        </button>
      </div>
    </div>
  );
};
