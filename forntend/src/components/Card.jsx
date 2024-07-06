import React, { useState, useEffect } from 'react';
import { app } from '../../firebase.config'; 
import { getDatabase, ref, onValue } from "firebase/database";

function Card() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const db = getDatabase(app);
                const booksRef = ref(db, 'books');

                onValue(booksRef, (snapshot) => {
                    const data = snapshot.val();
                    if (data) {
                        const booksArray = Object.keys(data).map(key => ({
                            id: key,
                            ...data[key]
                        }));
                        setBooks(booksArray);
                    } else {
                        setBooks([]);
                    }
                });
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []); 

    return (
        <>
            {books.map((book) => (
                <div key={book.id} className='mt-4 my-4'>
                    <div className="card bg-base-100 w-80 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white">
                        <figure>
                            <img src={book.imageUrl} alt="book" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {book.bookName}
                            </h2>
                            <p className="text-base">{book.authName}</p>
                            <div className="card-actions justify-between">
                                <button className='bg-blue-500 text-white px-4 py-3 rounded-md hover:bg-blue-700 duration-300 mt-6'>View</button>
                                <button className='bg-green-500 text-white px-4 py-3 rounded-md hover:bg-green-700 duration-300 mt-6'>Edit</button>
                                <button className='bg-red-500 text-white px-4 py-3 rounded-md hover:bg-red-700 duration-300 mt-6'>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default Card;
