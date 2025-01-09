## `useRouter`
- This is used for getting values from the URL 
  ``` javascript
  import { useRouter } from "next/router";
   const name =()=>{
   const {query}=useRouter();
   console.log({query});
   # console the values for other useful data.
   }

## `push method in next/router`
- This is used to push the values in the URL in the current page, so that we can reach to the pre built pages dynamically.(originally it pushes the values in the browser history which leads to auto. refresh the page )

 ``` c++
onClick={e=> val.push(`/user/${val.query.username}/settings`) }
```
- other methos for the same and the effective one:
``` javascript
         {e=> val.push(
            {
               pathname:`/user/${val.query.username}/settings`,
               query:{username:val.query.username}
            }
         )}
```