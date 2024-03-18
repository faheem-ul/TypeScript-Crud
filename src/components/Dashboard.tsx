import React, { useState } from "react";

function Dashboard() {
    const [taskInput, setTaskInput] = useState("");
    const [todos, setTodos] = useState<string[]>([]);
    const [editId, setEditId] = useState<number | null>(null);

    function handleTaskInput(e: React.ChangeEvent<HTMLInputElement>): void {
        setTaskInput(e.target.value);
    }

    function handleAddTaskFrom(e: React.FormEvent<HTMLFormElement>): void {
        e.preventDefault();
        if (taskInput.trim() !== "") {
            if (editId !== null) {
                const updatedTodos = [...todos];
                updatedTodos[editId] = taskInput;
                setTodos(updatedTodos);
                setTaskInput("");
                setEditId(null);
            } else {
                setTodos(prevTodos => [...prevTodos, taskInput]);
                setTaskInput("");
            }
        }
    }

    function handleTaskEdit(index: number): void {
        const editTask = todos[index];
        setTaskInput(editTask);
        setEditId(index);
    }

    return (
        <div>
            <h1>To do List in TypeScript</h1>
            <form onSubmit={handleAddTaskFrom}>
                <input type="text" placeholder="Add a task" value={taskInput} onChange={handleTaskInput} />
                <button type="submit">Add</button>
            </form>

            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        <span>{todo}</span>
                        <button onClick={() => handleTaskEdit(index)}>Edit</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Dashboard;
