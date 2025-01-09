import { useRouter } from "next/router";

// rename this file as [name] but before this rename the folder which is named as [username] ultimately don't use `[]` twice.
// it will do the same work for the dynamic routing

const name =()=>{

    const {query}=useRouter();
    console.log({query});
    

    return (
        <div>
            
                <h3>Hi Dear, My name is {query.name}!</h3>
            
        </div>
    )

}

export default name;