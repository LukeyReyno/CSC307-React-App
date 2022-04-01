import React, {useState} from 'react';
import Table from './Table';

function MyApp() {
    const [characters, setCharacters] = useState([
        {
            name: 'Charlie',
            job: 'Janitor',
        },
        {
            name: 'Bob',
            job: 'Dancer',
        },
        {
            name: 'Michael',
            job: 'Regional Manager',
        },
        {
            name: 'Ryan',
            job: 'Temp',
        },
    ]);  

    function removeOneCharacter (index) {
    const updated = characters.filter((character, i) => {
        return i !== index
        });
        setCharacters(updated);
    }

    return (
        <div className="container">
            <Table characterData={characters} removeCharacter={removeOneCharacter} />
        </div>
    );
}

export default MyApp;
