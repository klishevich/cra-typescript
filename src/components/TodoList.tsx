import React from "react";
import { TTodo } from "../todo.model";

import "./TodoList.css";

interface TodoListProps {
    items: TTodo[];
    onDeleteTodo: (id: string) => void;
}

export const TodoList: React.FC<TodoListProps> = props => {
    // handleDeleteTodo(todo.id)
    // const handleDeleteTodo = (id: string) => () => props.onDeleteTodo(id);
    return (
        <ul>
            {props.items.map(todo => (
                <li key={todo.id}>
                    <span>{todo.text}</span>
                    <button onClick={props.onDeleteTodo.bind(null, todo.id)}>Del</button>
                </li>
            ))}
        </ul>
    );
};
