const userPage=(props)=>{

    console.log("props : ",props);
    

    return (
        <div>
            <h2>Page Using SSR(static side rendering) : </h2>
            {
                props.data.users.map((item)=>(
                    <li key={item.id}>{item.firstName} {item.lastName}</li>
                ))
            }
        </div>
    )

}

export const getStaticProps=async()=>{

    const data= await(await fetch('https://dummyjson.com/users')).json();

    return{
        props:{
            data,
        }
    }

};

export default userPage;