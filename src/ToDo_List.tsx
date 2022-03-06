import React from "react";
import { useState, ChangeEvent, MouseEvent } from "react";

// const blabla = () => {
//   const array = [1, 2, 3, 4, 5];
//   return (
//     <>
//       {array.map((name, index) => {
//         return <h1 key={index}>{name}</h1>;
//       })}
//     </>
//   );
// };

type TodoType = {
  id: number;
  todo: string;
};

const Todo_List = () => {
  const [todoList, setTodoList] = useState<TodoType[]>([]);
  const [todoText, setTodoText] = useState<string>("");
  const [todoId, setTodoId] = useState<number>(1);

  const updateTodoText = (event: ChangeEvent<HTMLInputElement>) => {
    setTodoText(event.currentTarget.value);
  };

  const inputTodoText = (event: ChangeEvent<HTMLInputElement>) => {
    setTodoText(event.currentTarget.value);
  };

  const addTodoItem = (event: MouseEvent<HTMLButtonElement>) => {
    const todoItem: TodoType = {
      todo: todoText,
      id: todoId,
    };
    //아래 같이 하면 오류 발생가능서 있음
    // todoList.push(todoItem);
    // setTodoList(todoList);
    todoList.push(todoItem); // ...배열 => [1,2,3,4]가 1,2,3,4로 안에 있는 요소만 남겨짐
    setTodoList([...todoList]);
    setTodoId(todoId + 1);
  };

  const registerTodo = () => {
    const todoItem: TodoType = {
      id: todoId,
      todo: todoText,
    };

    todoList.push(todoItem);
    setTodoList([...todoList]);
    setTodoId(todoId + 1);
    setTodoText("");
  };

  const deleteTodoItem = (todoId: number) => {
    //.filter()는 조건에 맞는것만 걸러줌
    setTodoList(todoList.filter((todo) => todo.id !== todoId));
  };
  return (
    <section>
      <section>
        <input type="text" value={todoText} onChange={inputTodoText} />
        <button onClick={registerTodo}>등록</button>
      </section>
      <section>
        {todoList.map((todo) => {
          return (
            <section key={todo.id}>
              {todo.todo}
              <button onClick={() => deleteTodoItem(todo.id)}>삭제</button>
            </section>
          );
        })}
      </section>
    </section>
  );
};

export default Todo_List;
