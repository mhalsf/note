import React from 'react';
import VocabList from "../components/VocabList";

const Index = () => {
    return (
        <div>
            <table className="table-auto text-left w-full">
                <thead>
                    <tr>
                        <th className="border-b p-6">Vocabulary</th>
                        <th className="border-b p-6">Meaning</th>
                    </tr>
                </thead>
                <tbody>
                    <VocabList />
                </tbody>
            </table>
        </div>
    )
}
export default Index;