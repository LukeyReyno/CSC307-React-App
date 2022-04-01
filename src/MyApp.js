import React from 'react'
import Table from './Table'

const characters = [
    {
      name: 'Charlie',
      job: 'Janitor',
    },
    {
      name: 'Mac',
      job: 'Bouncer',
    },
    {
      name: 'Dee',
      job: 'Aspring actress',
    },
    {
      name: 'Jeff',
      job: 'Undercover Cop',
    },
];

function MyApp() { 
    return ( 
    <div className="container">
        <Table characterData={characters} />
    </div>
    );  
}   

export default MyApp;
