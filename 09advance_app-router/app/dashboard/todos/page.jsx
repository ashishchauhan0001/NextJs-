const { defaultHead } = require("next/head")


async function getData(){
    const response= await fetch('https://jsonplaceholder.typicode.com/todos');
    return await response.json();
};

const ToDos= async()=>{
    const todos= await getData();
    console.log(todos,'adf');
    
return(
<div>
    <h2 className="text-4xl font-bold">ToDos: </h2>
    <div className="grid grid-cols-3 gap-5 text-red-300">
    {todos && Array.isArray(todos) &&
      todos.map(item=>(
        <div key={item.id} className="border p-5 shadow-lg text-red-700">
            <h4>{item.title}</h4>
        </div>
        
      ))
    }
    </div>
</div>
)

}

export default ToDos;