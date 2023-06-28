import React from 'react';
import TodoList from "@/app/todos/TodoList";

function Todos() {
    return (
        <div>
            <h1 className={"pt-20 text-5xl text-white"}>
                Todos Home
            </h1>
            <TodoList/>
        </div>
    );
}

export default Todos;