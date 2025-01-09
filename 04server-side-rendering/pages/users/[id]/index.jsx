import { useEffect,useState } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";

// we can use other method for CSR using SWR (stale while revalidating) it helps to cache the data for next request means more optimised.


const userInfoPage=()=>{
    const [users,setUsers]=useState([]);
    const router=useRouter();

    useEffect(()=>{
        async function fetchUser(){
            const id=router.query.id;
            const data =await fetch(`https://dummyjson.com/users/${id}`);
            setUsers(await data.json());
        }
        fetchUser();
    },[router.query.id]);


    return (
        <div>
            <h2>UserName: {users?.firstName} {users?.lastName} </h2>
            <h2>Email: {users?.email} </h2>
            <h2>Age: {users?.age} </h2>
            <h2>Gender: {users?.gender}</h2>
        </div>
    )
}

export default  userInfoPage;