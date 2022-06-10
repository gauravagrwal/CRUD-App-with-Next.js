import { React, useState } from "react";
import styles from "../styles/Home.module.css";

export default function ToDoItem() {
    const [isChecked, setIsChecked] = useState(false);
    const handlecheck = async () => { };
    const handleDelete = () => { };

    return (
        <div>
            <span className={styles.eachtodo}>
                <p className={styles.text}>Breakfast</p>
                <div>
                    <input
                        type="checkbox"
                        className={styles.toggle}
                        defaultChecked={false}
                        onChange={handlecheck}
                        onClick={() => setIsChecked(!isChecked)}
                    />
                    <button onClick={handleDelete}>Delete</button>
                </div>
            </span>
        </div>
    );
}
