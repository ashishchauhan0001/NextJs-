
const waitFor=(sec)=> new Promise((res,rej)=>setTimeout(rej,sec*1000))

const UserPage= async()=>{
  await waitFor(6);
    return (
        <div>
            <h2>User Page : </h2>
        </div>
    )

}
export default UserPage;