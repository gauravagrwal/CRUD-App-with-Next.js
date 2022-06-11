import { React, useState } from "react";
import styles from "../styles/Home.module.css";
import deleteData from "../pages/api/deleteData";

export default function ToDoItem({ todo }) {
    const [isChecked, setIsChecked] = useState(false);
    const [done, isDone] = useState(true);
    const [itemDelete, isItemDeleted] = useState("");
    const [inputData, setInputData] = useState({});
    let itemId = "";

    const handlecheck = async () => {
        isDone(!todo.data.done);
        isItemDeleted(todo.ref["@ref"].id);
        itemId = todo.ref["@ref"].id;
        let g = {
            ...inputData,
            done: !todo.data.done,
        };
        await fetch("../api/updateData", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ data: g, id: itemId }),
        })
            .then(() => deleteData())
            .catch((e) => console.log(e));
    };

    const handleDelete = () => {
        itemId = todo.ref["@ref"].id;
        isItemDeleted(todo.ref["@ref"].id);
        deleteItem();
    };

    async function deleteItem() {
        await fetch("../api/deleteData", {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id: itemId }),
        })
            .then(() => deleteData())
            .catch((e) => console.log(e));
    }

    return (
        <div>
            <span className={styles.eachtodo}>
                <p className={styles.text}>{todo.data.task}</p>
                <div>
                    <input
                        type="checkbox"
                        className={styles.toggle}
                        defaultChecked={todo.data.done}
                        onChange={handlecheck}
                        onClick={() => setIsChecked(!isChecked)}
                    />
                    <button onClick={handleDelete}>Delete</button>
                </div>
            </span>
        </div>
    );
}
