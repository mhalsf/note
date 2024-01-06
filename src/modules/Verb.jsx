import React from 'react';
import db from "../firebase";
import { collection, addDoc } from "firebase/firestore"; 
import { useState } from 'react';
import VerbList from "../components/VerbList";
import { useNavigate } from "react-router-dom";

export default function Verb() {
    const navigate = useNavigate();
    const [verb1Value, Setverb1] = useState("");
    const [verb2Value, Setverb2] = useState("");
    const [verb3Value, Setverb3] = useState("");
    const [meanValue, Setmean] = useState("");

    const addData = async (e) => {
        try {
            const docRef = await addDoc(collection(db, "verb"), {
                verb1: verb1Value,
                verb2: verb2Value,
                verb3: verb3Value,
                mean: meanValue
        });
            Setverb1("");
            Setverb2("");
            Setverb3("");
            Setmean("");
            window.location.reload();

            alert("Data "+ docRef.id +" added!"); 
        } catch (e) {
            alert("Error adding document: "+ e);
        }
    }
    return (
        <div>
            <form className="w-full mx-auto mt-10">
                <div className="flex gap-x-4">
                    <input name="verb1" 
                            className="w-full my-5 h-12 rounded-lg px-4 border" 
                            type="text" 
                            placeholder="Verb 1"
                            onChange={(e) => { Setverb1(e.target.value) }}
                            value={verb1Value}/>

                    <input name="verb2" 
                            className="w-full my-5 h-12 rounded-lg px-4 border" 
                            type="text" 
                            placeholder="Verb 2"
                            onChange={(e) => { Setverb2(e.target.value) }}
                            value={verb2Value}/>

                    <input name="verb3" 
                            className="w-full my-5 h-12 rounded-lg px-4 border" 
                            type="text" 
                            placeholder="Verb 3"
                            onChange={(e) => { Setverb3(e.target.value) }}
                            value={verb3Value}/>
                </div>
                <input name="mean"
                    className="w-full my-5 h-12 rounded-lg px-4 border" 
                    type="text" 
                    placeholder="Meaning"
                    onChange={(e) => { Setmean(e.target.value) }}
                    value={meanValue}/>

                <button 
                    className="cursor-pointer w-full my-5 h-12 rounded-lg bg-[#BFCFE7] text-black uppercase" 
                    type="button"
                    onClick={(event) => { addData(event) }}
                    >Submit</button>
            </form>

            <VerbList />
        </div>
    )
}
