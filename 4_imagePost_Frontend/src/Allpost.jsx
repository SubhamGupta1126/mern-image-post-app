import { useEffect, useState } from "react"

function Allpost(){
    const [db,setdb] = useState([]);
    async function myfun(){
        let response = await fetch("http://localhost:3000/post");
        response = await response.json();
        setdb(response.posts)
    }
    useEffect(()=>{
        myfun();
    },[])
    return(
        <div className="feed-page">
            <h2>All Posts</h2>

            <div className="feed">
                {db.map((post) => (
                    <div className="post-card" key={post._id}>
                        <img src={post.imageURL} alt="post" />
                        <p>{post.caption}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Allpost