import React from 'react'

export function TodoList({ todos }) {
    return (
        <>
            {todos.map(todo => {
                <div>{todo}</div>
            }
)}
        </>
    )
}
