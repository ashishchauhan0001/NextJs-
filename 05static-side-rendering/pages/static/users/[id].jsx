import styles from '../../../styles/id.module.css'

const userPageById=(props)=>{

    // console.log("Hi helloeeww : ",props);
    const variant = 'error';// 'no error';
     
    return(
        <div>
            <h2 className={styles.text}>userPageById: {props?.res.firstName} {props?.res.lastName} </h2>
            <h2 className={styles["text-abcs"]}> Email : {props.res.email}</h2> 
            {/* This is Modular CSS  means for each element we can use diff css which will apply while load and go back to normal while other apply on that element. */}
            <h2 className={variant === 'error' ? styles.error : styles.success}>This is a demo paragraph Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, debitis sequi nemo quis maiores aut ipsum aperiam quos repellat. Impedit repellat explicabo asperiores qui, nobis eos molestias maiores labore aliquam?</h2>
        </div>
    )

}

export const getStaticProps=async(context)=>{
    const id=context.params.id;
    const res= await(await fetch(`https://dummyjson.com/users/${id}`)).json();
    return {
        props:{
            res,
        }
    }
};

export const getStaticPaths=async()=>{

  const data=await(await fetch('https://dummyjson.com/users')).json();
  const ids=data.users.map((item)=>item.id);
 
  return{
    paths:ids.map((item)=>({
      params:{id:`${item}`},
    })),
    fallback:false
  }

}

export default userPageById;