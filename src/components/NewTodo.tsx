import React, { useRef } from "react";
import "./NewTodo.css";

type NewTodoProps = {
    onAddTodo: (text: string) => void;
};

export const NewTodo: React.FC<NewTodoProps> = props => {
    const textInputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = textInputRef.current!.value;
        props.onAddTodo(enteredText);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-control">
                <label htmlFor="todo-list">Todo Text</label>
                <input type="text" id="todo-text" ref={textInputRef} />
            </div>
            <button type={"submit"}>ADD TODO</button>
        </form>
    );
};
