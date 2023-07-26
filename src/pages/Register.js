import React, { useState } from "react";
import Add from "../img/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

function Register() {

    const [err, setErr] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];

        try {
            //Create user
            const res = await createUserWithEmailAndPassword(auth, email, password);

            //create a unique name
            const date= new Date().getTime();
            const storageRef = ref(storage, `${displayName + date}`);
            // const storageRef = ref(storage, displayName);

            await uploadBytesResumable(storageRef, file);
            const downloadURL= await getDownloadURL(storageRef);

            try{
                //Update Profile
                await updateProfile(res.user, {
                    displayName,
                    photoURL: downloadURL,
                });

                //Create the user on firestore
                await setDoc(doc(db, "users", res.user.uid), {
                    uid: res.user.uid,
                    displayName,
                    email,
                    photoURL: downloadURL,
                });

            }catch(err){
                console.log(err);
                setErr(true);
            };

            

            
            // uploadTask.on(
            //     (error) => {
            //         setErr(true);
            //         console.log(error);
            //     },
            //     () => {
                    
            //         getDownloadURL(uploadTask.snapshot.ref).then( async(downloadURL) => {
            //             await updateProfile(res.user,{
            //                 displayName,
            //                 photoURL: downloadURL,
            //             });

            //             await setDoc(doc(db, "users", res.user.uid), {
            //                 uid: res.user.uid,
            //                 displayName,
            //                 email,
            //                 photoURL: downloadURL,
            //             });
            //         });
            //     }
            // );

        } catch (err) {
            console.log(err);
            setErr(true);
        }

    }

    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Web Chat</span>
                <span className="title">Register</span>

                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="display name" />
                    <input type="email" placeholder="email" />
                    <input type="password" placeholder="password" />
                    <input style={{ display: "none" }} type="file" id="file" />
                    <label htmlFor="file">
                        <img src={Add} />
                        <span>Add an avatar</span>
                    </label>
                    <button>Sign Up</button>

                    {err && <span>Something went wrong</span>}

                </form>

                <p>Already have an account? Login</p>
            </div>
        </div>
    );
}

export default Register;