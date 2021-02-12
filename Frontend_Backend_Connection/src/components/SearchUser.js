import React, {useState,useEffect} from 'react'
import axios from 'axios';

function SearchUser() {
    const [searchTerm, setsearchTerm] = useState('')
    const [searchResult, setsearchResult] = useState([])// This is array not string. not ''
    const [nameList, setnameList] = useState([])
    const [filteredCountries, setFilteredCountries] = useState([]);

      useEffect(() => 
      {
        axios.get('http://localhost:3000/users/searching?userName=')
          .then((res)=>
          {
            setnameList(res.data)
          })
        
      }, [])


      useEffect(() => {
        setFilteredCountries(
          nameList.filter((country) =>
            country.userName.toLowerCase().includes(searchTerm.toLowerCase())
          )
        );
      }, [searchTerm, nameList]);


     
      
    return (
        <div>
            <h3>Search User here</h3>
            Username<input
                value={searchTerm}
                onChange={(e=>setsearchTerm(e.target.value))} 
            />
            <h2>Name list</h2>
            {filteredCountries.map((country,idx) => (
              // <h2>{country}</h2>
              <CountryDetail key={idx} {...country} />


            ))}

            {console.log("Sr1=",nameList)}


           {/* <h2> Name list:-{name_list}</h2> */}
            
            {/* 
            <ul >
                 {searchResult.map(i =>
                 (
                    <li>{i}</li> 
                   )
                   )}
            </ul>  */}

           
        </ div>
    )
}

const CountryDetail = (props) => {
  const { userName } = props;

  return (
    <div>
      {/* <h2>COuntry</h2> */}
      <p>{userName}</p>
    </div>
  );
};
export default SearchUser


// 1.................................
 // const api=axios.create({
    //   baseURL: 'http://localhost:3000/users/searching?userName='
    //  })

    // const handleSearchTerm=(e)=>
    // {
    //     setsearchTerm(e.target.value)

    //        async function fetchData()
        // {
          // const request= await axios.get('http://localhost:3000/users/searching?userName='+searchTerm);
            //  .then(res => 
            //     {
            //       setname_list(res.data);
            //       // console.log("",name_list)
            //       return request;
            //     })

            // setname_list(request.data);
            // console.log(request.data)
            // return request;
            
         

    //     console.log("IN handleSearch",sr) //lag by 1
    // }




// --------------------------------------------------------------------------------------------------
// 2.....................
 // useEffect(() => 
      // {
      //   console.log("ANS:-",searchTerm);

      //   async function fetchData()
      //   {
      //     const request= await axios.get('http://localhost:3000/users/searching?userName='+searchTerm);
      //       //  .then(res => 
      //       //     {
      //       //       setname_list(res.data);
      //       //       // console.log("",name_list)
      //       //       return request;
      //       //     })

      //       setname_list(request.data);
      //       // console.log(request.data)
      //       // return request;
            
                
        
      //           console.log("Name_List",name_list)
      //   }
      //   fetchData()

      //   // // console.log("Sr=",sr) //lag by 1
      //   // const results = people.filter(person =>
      //   //     person.toLowerCase().includes(searchTerm)
      //   //   );

      //   //   console.log("updating SearchTerm:-",searchTerm,"-:Results:-",results)

      //   //   setsearchResult(results)

      // },[searchTerm] )







































// ------------------------------------------------------------------------------------------------
// import React, {useState,useEffect} from 'react'
// import axios from 'axios';

// const people = [
//   "Siri",
//   "Alexa",
//   "Google",
//   "Facebook",
//   "Twitter",
//   "Linkedin",
//   "Sinkedin"
// ];

// let sr='';

// function SearchUser() {
//     const [searchTerm, setsearchTerm] = useState('')
//     const [searchResult, setsearchResult] = useState([])// This is array not string. not ''
    
//     // const api=axios.create({
//     //   baseURL: 'http://localhost:3000/users/searching?userName='
//     //  })

//     const handleSearchTerm=(e)=>
//     {
//         setsearchTerm(e.target.value)

//         async function fetchData()
//         {
//           const request= await axios.get('http://localhost:3000/users/searching?userName='+e.target.value)
//           .then(res => {sr=res.data})
//           return request;
//         }
//         fetchData()
         

//         console.log("IN handleSearch",sr) //lag by 1
//     }
   
//       useEffect(() => 
//       {

//         // console.log("Sr=",sr) //lag by 1
//         const results = people.filter(person =>
//             person.toLowerCase().includes(searchTerm)
//           );

//           console.log("updating SearchTerm:-",searchTerm,"-:Results:-",results)

//           setsearchResult(results)

//       },[searchTerm] )
      
//     return (
//         <div>
//             <h3>Search User here</h3>
//             Username<input
//                 value={searchTerm}
//                 onChange={handleSearchTerm} 
//             />

//            <h2> Search Term:-{searchTerm}</h2>
            
//             {/* 
//             <ul >
//                  {searchResult.map(i =>
//                  (
//                     <li>{i}</li> 
//                    )
//                    )}
//             </ul>  */}

//             {/* {console.log("searchResult:-",searchResult)} */}
//             {/* {console.log("Sr1=",sr)} Lag by 1 */}

//         </ div>
//     )
// }

// export default SearchUser