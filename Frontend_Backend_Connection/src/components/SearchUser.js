import React, {useState,useEffect} from 'react'
import axios from 'axios';

const people = [
  "Siri",
  "Alexa",
  "Google",
  "Facebook",
  "Twitter",
  "Linkedin",
  "Sinkedin"
];

function SearchUser() {
    const [searchTerm, setsearchTerm] = useState('')
    const [searchResult, setsearchResult] = useState([])// This is array not string. not ''
    
    // const api=axios.create({
    //   baseURL: 'http://localhost:3000/users/searching?userName='
    //  })

    const handleSearchTerm=(e)=>
    {
        setsearchTerm(e.target.value)

        axios.get('http://localhost:3000/users/searching?userName='+e.target.value)
        .then(res => console.log("Axios",res.data))

        console.log("IN handleSearch")
    }
   
      useEffect(() => 
      {

        
        const results = people.filter(person =>
            person.toLowerCase().includes(searchTerm)
          );

          console.log("updating SearchTerm:-",searchTerm,"-:Results:-",results)

          setsearchResult(results)

      },[searchTerm] )

      //  axios.get('http://localhost:3000/users/searching?userName='+e.target.value)
      //   .then(res => console.log("Axios",res.data))

      
    return (
        <div>
            <h3>Search User here</h3>
            Username<input
                value={searchTerm}
                onChange={handleSearchTerm} 
            />

           <h2> Search Term:-{searchTerm}</h2>
           
            <ul >
                 {searchResult.map(i =>
                 (
                    <li>{i}</li> 
                   )
                   )}
            </ul> 

            {console.log("searchResult:-",searchResult)}
            {/* Similar to result in useEffect */}
        </ div>
    )
}

export default SearchUser