import React, {useState,useEffect} from 'react'

function SearchUser() {
    const [searchTerm, setsearchTerm] = useState('')
    const [searchResult, setsearchResult] = useState('')

    const handleSearchTerm=(e)=>
    {
        setsearchTerm(e.target.value)
    }
   

      useEffect(() => {

        const people = [
            "Siri",
            "Alexa",
            "Google",
            "Facebook",
            "Twitter",
            "Linkedin",
            "Sinkedin"
          ];
        const results = people.filter(person =>
            person.toLowerCase().includes(searchTerm)
          );
          console.log("updating",searchTerm,results)
          setsearchResult(results)
      },[searchTerm] )
      
    return (
        <div>
            <input
                value={searchTerm}
                onChange={handleSearchTerm} 
            />

            <h2>{searchTerm}</h2>
            {/* <h3>{searchResult.map((i) => (i))}</h3> */}
        </ div>
    )
}

export default SearchUser
