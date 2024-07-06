// Edit.jsx
import React, { useState } from 'react';
import { app } from '../../firebase.config'; // Import Firebase app from firebase.config.js
    import { getDatabase, ref, set, push } from "firebase/database";


function Edit() {
    const [bookname, setBookname] = useState("");
    const [authname, setAuthname] = useState("");
    const [subtitle, setSubtitle] = useState("");

    const saveData = async () => {
        const db = getDatabase(app);
        const booksRef = ref(db, 'edit/books');
    
        const newBookRef = push(booksRef);
        set(newBookRef, {
            bookName: bookname,
            authName: authname,
            subTitle: subtitle
        }).then(() => {
            alert("Data saved successfully!");
        }).catch((error) => {
            alert("Error saving data: " + error.message);
        });
    };
    

    return (
        <div>
            <label className="form-control w-full max-w-xs bg-base-100 dark:bg-slate-900 dark:text-white">
                <div className="label">
                    <span className="label-text bg-base-600">Book Name</span>
                </div>
                <input type="text" value={bookname} onChange={(e) => setBookname(e.target.value)} placeholder="Book name" className="input input-bordered w-full max-w-xs bg-base-100 dark:bg-slate-900 dark:text-white" />
            </label>
            <label className="form-control w-full max-w-xs bg-base-100 dark:bg-slate-900 dark:text-white">
                <div className="label">
                    <span className="label-text bg-base-600">Author Name</span>
                </div>
                <input type="text" value={authname} onChange={(e) => setAuthname(e.target.value)} placeholder="Author name" className="input input-bordered w-full max-w-xs bg-base-100 dark:bg-slate-900 dark:text-white" />
            </label>
            <label className="form-control w-full max-w-xs bg-base-100 dark:bg-slate-900 dark:text-white">
                <div className="label">
                    <span className="label-text bg-base-600">Sub Title</span>
                </div>
                <input type="text" value={subtitle} onChange={(e) => setSubtitle(e.target.value)} placeholder="Sub title" className="input input-bordered w-full max-w-xs bg-base-100 dark:bg-slate-900 dark:text-white" />
            </label>
            <button className="btn btn-info ml- mt-6" onClick={saveData}>Submit</button>
        </div>
    );
}

export default Edit;
