import { React, useState } from "react";
import styles from "../styles/Home.module.css";
import ToDoItem from "./todoItem";

export default function ToDo() {
    const [newtodo, setnewtodo] = useState("");
    const handleinput = (e) => {
        setnewtodo(e.target.value);
    };
    const HandleSubmit = (e) => {
        console.log(newtodo);
    };

    return (
        <div className={styles.maincont}>
            <h1>Todo App</h1>
            <div className={styles.newtodo}>
                <h3>add new todo</h3>
                <div className={styles.semi}>
                    <input type="text" value={newtodo} onChange={(e) => handleinput(e)} />
                    <button onClick={() => HandleSubmit()}>Add</button>
                </div>
            </div>
            <div>
                <ToDoItem />
            </div>
        </div >
    );
}
