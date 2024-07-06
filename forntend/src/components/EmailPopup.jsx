// components/EmailPopup.js
import React, { useState } from 'react';
import { useCookies } from 'react-cookie';

function EmailPopup({ onClose }) {
    const [email, setEmail] = useState('');
    const [cookies, setCookie] = useCookies(['userEmail']);

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Store email in cookie
        setCookie('userEmail', email, { path: '/' });
        onClose(); // Close the popup
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center dark:bg-slate-900 dark:text-white ">
            <div className="bg-white p-8 rounded-lg shadow-lg dark:bg-slate-900 dark:text-white ">
                <h2 className="text-xl mb-4 pl-10 font-bold ">Enter Your Email</h2>
                <form onSubmit={handleSubmit} className="flex flex-col">
                    <label className="input input-bordered flex items-center gap-2">
                      
                        <input type="email" className="grow" value={email} onChange={handleChange} placeholder="Enter your email" required />
                    </label>
                    <button type="submit" className="btn  mt-10">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default EmailPopup;
