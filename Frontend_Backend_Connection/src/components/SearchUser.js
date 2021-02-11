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
          
          console.log("updating SearchTerm:-",searchTerm,"-:Results:-",results)
          setsearchResult(results)
        //   console.log("searchResult:-",searchResult)..lag by 1 itteration if printed hhere
      },[searchTerm] )

    return (
        <div>
            <h3>Search User here</h3>
            Username<input
                value={searchTerm}
                onChange={handleSearchTerm} 
            />

            <h2>{searchTerm}</h2>
            <h2>{searchResult}</h2>
           
            {/* <ul >
            {setsearchResult.filter(i =>
              <li>i</li> 
              )}

            </ul>  */}

            {console.log("searchResult:-",searchResult)}
            {/* Similar to result in useEffect */}


        </ div>
    )
}

export default SearchUser
