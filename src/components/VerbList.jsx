import React, { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import db from "../firebase";

const VerbList = () => {
    const [verb, setVerb] = useState([]);

    useEffect( () => { 
        async function fetchData() {
            try {
                await getDocs(collection(db, "verb"))
                .then((querySnapshot)=>{               
                    const verbData = querySnapshot.docs
                        .map((doc) => ({...doc.data(), id:doc.id }));
                    setVerb(verbData);                
                })
            } catch (err) {
                console.log(err);
            }
            
        }
        fetchData();
    }, []);

        return (
            <div>
                <table className="table-auto text-left w-full">
                    <thead>
                        <tr>
                            <th className="border-b p-6">Verb 1</th>
                            <th className="border-b p-6">Verb 2</th>
                            <th className="border-b p-6">Verb 3</th>
                            <th className="border-b p-6">Meaning</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            verb?.map((data, i) => (
                                <tr key={data.id}>
                                    <td className={"border-b p-4" + ( i % 2 ? "" : " bg-slate-200")} >{ data.verb1 }</td>
                                    <td className={"border-b p-4" + ( i % 2 ? "" : " bg-slate-200")} >{ data.verb2 }</td>
                                    <td className={"border-b p-4" + ( i % 2 ? "" : " bg-slate-200")} >{ data.verb3 }</td>
                                    <td className={"border-b p-4" + ( i % 2 ? "" : " bg-slate-200")}>{ data.mean }</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        );

}
export default VerbList;