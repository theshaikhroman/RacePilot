import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRacer, deleteRacer } from "../redux/slices/racerSlice";

const AdminPanel = () => {
    const dispatch = useDispatch();
    const racers = useSelector((state) => state.racers.racers);
    const [racerName, setRacerName] = useState("");

    const handleAddRacer = () => {
        const newRacer = {
            id: Date.now(),
            name: racerName,
        };
        dispatch(addRacer(newRacer));
        setRacerName("");
    };

    const handleDeleteRacer = (id) => {
        dispatch(deleteRacer(id));
    };

    return (
        <div>
            <h1>Admin Panel</h1>
            <input
                type="text"
                placeholder="Enter Racer Name"
                value={racerName}
                onChange={(e) => setRacerName(e.target.value)}
            />
            <button onClick={handleAddRacer}>Add Racer</button>

            <h2>Racers List</h2>
            <ul>
                {racers.map((racer) => (
                    <li key={racer.id}>
                        {racer.name}{" "}
                        <button onClick={() => handleDeleteRacer(racer.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminPanel;
