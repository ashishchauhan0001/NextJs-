import { useEffect , useState } from "react";
import Link from "next/link";
import useSWR from "swr";
// we can use other method for CSR using SWR (stale while revalidating) it helps to cache the data for next request means more optimised.


const fetcher=(...args)=>fetch(...args).then(res=>res.json());

const UserPage=()=>{

    // const [users, setUsers] = useState([]);

    // console.log("Users", users);

    // useEffect(()=>{
    //     async function fetchUser(){
    //         const data =await fetch('https://dummyjson.com/users');
    //         setUsers(await data.json());
    //     }
    //     fetchUser();
    // },[]);

    const {data,error}=useSWR('https://dummyjson.com/users',fetcher);
    console.log("Data : ",data);
    if(error) return <h1>Error in Fetching Data!</h1>
    if(!data) return <h1>Loading...</h1>
    
     return(
        <div>
            {/* <h2>Usernames : </h2>{
            (users && users.users)?users.users.map(user=> <Link href={`/users/${user.id}`} key={user.id} > 
            <h4> {user.firstName} {user.lastName} </h4></Link>) : <h2>Loading...</h2>
            } */}
            <h2>UserName : </h2>{
                data.users.map(user=> <Link href={`/users/${user.id}`} key={user.id} > 
            <h4> {user.firstName} {user.lastName} </h4></Link>)
            }
        </div>
     )
}

export default UserPage;