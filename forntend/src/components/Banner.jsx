import React, { useState } from 'react';
import { app } from '../../firebase.config'; 
import { getDatabase, ref, set, push } from "firebase/database";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from 'uuid';

function Banner() {
    const [bookname, setBookname] = useState("");
    const [authname, setAuthname] = useState("");
    const [img, setImg] = useState(null);

    const saveData = async () => {
        try {
            if (!img) {
                throw new Error("Please select an image.");
            }

            const storage = getStorage(app);
            const storageRef2 = storageRef(storage, `images/${uuidv4()}_${img.name}`);
            
            await uploadBytes(storageRef2, img);

            const imgURL = await getDownloadURL(storageRef2);

            const db = getDatabase(app);
            const booksRef = ref(db, 'books');

            const newBookRef = push(booksRef);

            await set(newBookRef, {
                bookName: bookname,
                authName: authname,
                imageUrl: imgURL 
            });
            setBookname("");
            setAuthname("");
            setImg(null);

            document.getElementById('my_modal_3').close();

            fetchDataFromFirebase();
        } catch (error) {
            alert("Error saving data: " + error.message);
        }
    };

    const fetchDataFromFirebase = async () => {
        try {
            const db = getDatabase(app);
            const booksRef = ref(db, 'books');

            const snapshot = await get(booksRef);
            if (snapshot.exists()) {
                const data = snapshot.val();
                const booksArray = Object.keys(data).map(key => ({
                    id: key,
                    ...data[key]
                }));
                setBooks(booksArray);
            } else {
                setBooks([]);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row p-20 '>
                <div className='w-full md:w-1/2 mt-32 md:mt-12 order-2 md:order-1'>
                    <div className='space-y-12'>
                        <h1 className='text-4xl font-bold mt-20'>
                            Hello, Welcome here to learn something <span className='text-pink-500'>new everyday !!!</span>
                        </h1>
                        <p className='text-xl'>
                            Discover and explore a world of literature with ReadMyBook, your gateway to captivating stories and authors from diverse genres. Join our community of book enthusiasts today !!!
                        </p>
                    </div>
                </div>
                <div className='w-full md:w-1/2 order-1 md:order-2'>
                    <img className='w-92 h-92' src="..\..\public\banner.png" alt="" />
                </div>
            </div>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4  '>
                <div className='p-20 items-center justify-center text-center '>
                    <h1 className='text-2xl  md:text-4xl'>Add Book <span className='text-pink-500'>Here! :)</span> </h1>
                        <button className="bg-pink-500 text-white px-4 py-3 rounded-md hover:bg-pink-700 duration-300 mt-6" onClick={() => document.getElementById('my_modal_3').showModal()}>Add Book</button>
                    <dialog id="my_modal_3" className="modal  dark:bg-slate-900 dark:text-white bg-base-600">
                        <div className="modal-box dark:bg-slate-900 dark:text-white bg-base-600 ">
                            <form method="dialog">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById('my_modal_3').close()}>✕</button>
                            </form>
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
                            <div className='mt-5'>
                                <input type="file" onChange={(e) => setImg(e.target.files[0])} className="file-input file-input-bordered file-input-info w-full max-w-xs form-control w-full max-w-xs bg-base-100 dark:bg-slate-900 dark:text-white" />
                                <button className="btn btn-info ml- mt-6" onClick={saveData} >Submit</button>
                            </div>
                        </div>  
                    </dialog>
                </div>
            </div>
        </>
    );
}

export default Banner;
