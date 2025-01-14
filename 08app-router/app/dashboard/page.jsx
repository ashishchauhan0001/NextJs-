
// 'use client'  // this can be use to use this page in client mode only means it will function normal way without any server component

const dashboard=()=>{
    
    console.log("Ashish Ji new thing padho"); // this will render in server side so here itself we can use database operations

    async function sayHello(params){
    "use server" // for this you need to configure the next.config file
     console.log(params);  // to enable this you can use 'use client' or implemented approach.
    }

    return(
        <div>
            <h2>Admin Dashboard: 

            </h2>
            <form action={sayHello}>
                <input type="email" name="email" />
                <button> Submit</button>
            </form>
        </div>
    )

};

export default dashboard;