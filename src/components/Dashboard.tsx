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

    function handleTaskDelete(index: number): void {
        const updatedTodos = [...todos];
        updatedTodos.splice(index, 1);
        setTodos(updatedTodos);
    }

    return (
        <div className=" flex flex-col justify-center items-center w-screen h-screen" >
            <h1 className=" text-[40px] font-bold">To do List in TypeScript</h1>
            <form onSubmit={handleAddTaskFrom} className=" flex flex-col justify-center items-center w-[300px]">
                <input type="text" placeholder="Add a task" value={taskInput} onChange={handleTaskInput} className=" bg-gray-500 rounded-lg p-2 mb-5"/>
                <button type="submit"  className=" bg-green-700 w-[150px] rounded-lg  p-2 mb-5">Add</button>
            </form>

            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        <span className=" bg-slate-200 p-2 shadow-2xl rounded-md border-2 border-black">{todo}</span>
                        <button onClick={() => handleTaskEdit(index)}  className=" bg-yellow-700 w-[100px] rounded-lg ml-3 p-2">Edit</button>
                        <button onClick={() => handleTaskDelete(index)}  className=" bg-red-700 w-[100px] rounded-lg ml-3 p-2">Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Dashboard;
