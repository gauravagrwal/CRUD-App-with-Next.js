import { React, useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import ToDoItem from "./todoItem";
import createData from "../pages/api/createData";

export default function ToDo() {
    const [newtodo, setnewtodo] = useState("");
    const [data, setData] = useState([]);
    const [inputData, setInputData] = useState({});

    const handleinput = (e) => {
        setnewtodo(e.target.value);
        setInputData({
            ...inputData,
            newtodo: e.target.value,
        });
    };

    async function addToDoItem() {
        await fetch("../api/createData", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ data: inputData }),
        })
            .then(() => createData())
            .catch((e) => console.log(e));
    }

    const HandleSubmit = (e) => {
        console.log(newtodo);
        addToDoItem();
        setnewtodo("");
    };

    async function fetchData() {
        const res = await fetch("../api/getData");
        const newData = await res.json();
        setData(newData);
    }

    useEffect(() => {
        fetchData();
    }, [newtodo]);

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
                {
                    data && data.map((todo) => (
                        <ToDoItem key={todo.ref["@ref"].id} todo={todo} />
                    ))
                }
            </div>
        </div >
    );
}
