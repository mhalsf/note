import React, { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import db from "../firebase";

const VocabList = () => {
    const [vocab, setVocab] = useState([]);

    useEffect( () => { 
        async function fetchData() {
            try {
                await getDocs(collection(db, "note"))
                .then((querySnapshot)=>{               
                    const vocabData = querySnapshot.docs
                        .map((doc) => ({...doc.data(), id:doc.id }));
                    setVocab(vocabData);                
                })
            } catch (err) {
                console.log(err);
            }
            
        }
        fetchData();
    }, []);

        return (
            <>
                {
                    vocab?.map((data, i) => (
                        <tr key={data.id}>
                            <td className={"border-b p-4" + ( i % 2 ? "" : " bg-slate-200")} >{ data.vocab }</td>
                            <td className={"border-b p-4" + ( i % 2 ? "" : " bg-slate-200")}>{ data.mean }</td>
                        </tr>
                    ))
                    
                }
            </>
        );

}
export default VocabList;