import React, {useState,useEffect} from 'react'
import axios from 'axios';
import './SearchUser.css'
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
        <div className="search"> 
            <h3>Search User here</h3>
            Username<input
                value={searchTerm}
                onChange={(e=>setsearchTerm(e.target.value))} 
            />
            {/* <h2>Name list</h2> */}
            <div className="search searchTerm">
              {
                // searchTerm?console.log("true"):console.log("false")
                searchTerm?
                        filteredCountries.map((country,idx) => (          
                        <CountryDetail key={idx} {...country} />
          
                        )):""
                      
              }

              {
                filteredCountries.length==0 ?<h2>No data</h2>:null
              }
            </div>

            {console.log("Sr1=",filteredCountries.length)}
           
        </ div>
    )
  }
  
  const CountryDetail = (props) => {
    const { userName} = props;
    
    console.log("Country",userName);
    // if()
    return (
      <div>
      {/* <h2>COuntry</h2> */}
      <small>{userName}</small>
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