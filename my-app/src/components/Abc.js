import { useEffect, useState } from "react";

function Abc(){

    const [details, getDetails] = useState([])

useEffect(()=>{
    async function fetchPosts(){
        const response= await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        getDetails(data)
    }
    fetchPosts()
}
,[])


    return(
        <div>
            Posts
        </div>
    )
}

export default Abc;