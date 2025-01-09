import { useRouter } from "next/router";

const setting=()=>{
    const val=useRouter();
    console.log("Data : ", val);
    
    return(
        <div>
            <h1>here you can configure settings acc. to your need.</h1>
            <h3>Settings for the you {val.query.username}</h3>
        </div>
    )

}

export default setting;