import { useRouter } from "next/router";
import { useEffect } from "react";

// index file is the file which runs by default in that root folder where the user is redirected to.

// custom hook
const useUser=()=>({user:{name:'Ashish',age:16},loading:false});


const general=()=>{
    
    // this useEffect prevent the user to navitage a page without login into the website.

    const router =useRouter();
    const user=useUser();
    console.log(router);
    
    useEffect(()=>{
        if(user.user.name==null){
            router.replace("/");
        }
    },[router,user.user]);

// const val=useRouter(); // kuch bhe name likh do.
    return(
        <div>
            <h2>This is from the index file</h2>
            {/* <button onClick={e=> val.push(`/user/${val.query.username}/settings`)}>Go to settings </button> */}
            {/* other method for doing the same */}
            <button onClick={e=> router.push(
                {
                    pathname:`/user/${router.query.username}/settings`,
                    query:{username:router.query.username} // we can add multiple parameters in this object.
                }
            )}>Go to settings </button>
            {/* <button onClick={e=> val.push(`/`)}>Go to Home</button> 
            // there is other method for the same using `replace` method instead of push method which prevents the saving data into the web browser it directly sends it into the desired page and the user cannot came back to the previous page */}
            <button onClick={e=> router.replace(`/`)}>Go to Home</button> 
            <button onClick={e=> router.reload()}>Reload Page</button>

        </div>
    )

}

export default general;