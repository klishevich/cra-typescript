import React, { useState } from "react";
import { TodoList } from "./components/TodoList";
import { NewTodo } from "./components/NewTodo";
import { TTodo } from "./todo.model";

const App: React.FC = () => {
    const [todos, setTodos] = useState<TTodo[]>([]);

    const handleAddTodo = (text: string) => {
        setTodos(prevTodos => [...prevTodos, { id: Math.random().toString(), text }]);
    };

    const handleDeleteTodo = (todoId: string) => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoId));
    };

    return (
        <div className="App">
            <NewTodo onAddTodo={handleAddTodo} />
            <TodoList items={todos} onDeleteTodo={handleDeleteTodo} />
        </div>
    );
};

export default App;
