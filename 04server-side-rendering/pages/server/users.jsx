// props will come from the backend in real time bcz it is SSR
const userPage=(props)=>{
    console.log("Props : ",props);
    
    return(
        <div>
            <h2>Users(SSR)</h2>
            {
                props.data.users.map((item)=> <li key={item.id}> {item.firstName} {item.lastName} </li>)
            }
        </div>
    )
}

// getServerSideProps is a Next.js function that can be used to fetch data and render the contents of a page at request time.

export const getServerSideProps=async()=>{
  const data = await (await fetch('https://dummyjson.com/users')).json();
    return{
        props:{
           data,
        }
    }
}


export default userPage;