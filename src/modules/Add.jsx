import React from 'react';
import db from "../firebase";
import { collection, addDoc } from "firebase/firestore"; 
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function Add() {
    const navigate = useNavigate();
    const [vocabValue, Setvocab] = useState("");
    const [meanValue, Setmean] = useState("");

    const addData = async (e) => {
        try {
            const docRef = await addDoc(collection(db, "note"), {
                vocab:  vocabValue,
                mean: meanValue
        });
            navigate(`/`, { replace: true }); 
        } catch (e) {
            alert("Error adding document: "+ e);
        }
    }

    return (
        <form className="w-2/4 mx-auto mt-10">
            <input name="vocab" 
                    className="w-full my-5 h-12 rounded-lg px-4 border" 
                    type="text" 
                    placeholder="Vocab"
                    onChange={(e) => { Setvocab(e.target.value) }} />

            <input name="mean" 
                    className="w-full my-5 h-12 rounded-lg px-4 border" 
                    type="text" 
                    placeholder="Meaning"
                    onChange={(e) => { Setmean(e.target.value) }}/>

            <button className="cursor-pointer w-full my-5 h-12 rounded-lg bg-[#BFCFE7] text-black uppercase" 
                    type="button"
                    onClick={(event) => { addData(event) }}
                    >Submit</button>
        </form>
    )
}
