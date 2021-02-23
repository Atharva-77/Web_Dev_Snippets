import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Postpage from './Post_pagination'
import Pagination2 from './Pagination2'

function Pagination1() {
    const [post, setpost] = useState([])
    const [loading, setloading] = useState(false)
    const [currentPage, setcurrentPage] = useState(1)
    const [postPerPage, setpostPerPage] = useState(5)
     
    useEffect(() => {
        const fetchPosts= async ()=>
        {
            setloading(true)
            const postData = await axios.get("https://jsonplaceholder.typicode.com/posts")

            setpost(postData.data)
            setloading(false)
        }

        fetchPosts()
    }, [])

    // console.log(post);

    const indexOfLastPost = currentPage * postPerPage;

    const indexOfFirstPost = indexOfLastPost - postPerPage;

    const currentPosts = post.slice(indexOfFirstPost,indexOfLastPost);

    const paginate_fun = (pageno)=>{setcurrentPage(pageno)}
console.log("here");
    return (
        <div>
            <h2>My blogs</h2>
            <Postpage posts={currentPosts} loading={loading} />
            <Pagination2 postPerPage={postPerPage} totalPost={post.length} paginate={paginate_fun}/>
        </div>
    )
}

export default Pagination1
