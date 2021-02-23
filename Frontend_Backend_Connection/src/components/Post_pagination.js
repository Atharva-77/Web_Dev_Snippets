// import React from 'react';

// const Posts = ({ posts, loading }) => {
//   if (loading) {
//     return <h2>Loading...</h2>;
//   }

//   return (
//     <ul >
//       {posts.map(i => (
//         <li key={i.id} >
//           {i.title}
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default Posts;




import React from 'react'

const Post_pagination = ({posts,loading}) => {

    if (loading) {
        return <h2>Loading...</h2>
    }
    return (
        <div>
            {/* <p>{post}</p> */}
            <ul>
             {posts.map(i => (
                    <li key={i.id}>
                        {i.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Post_pagination
