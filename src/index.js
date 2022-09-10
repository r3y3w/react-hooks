import React from "react";
import ReactDOM from "react-dom/client";
import { useFetch } from "./useFetch";


function App({ login }) {
  const { loading, data, error } = useFetch(
      `https://api.github.com/users?/${login}`
    )

    console.log(data)

  if(loading) return <h1>loading...</h1>
  if(error) 
    return (
      <pre>{JSON.stringify(error, null, 2)}</pre>
    )
    
    return (
      <>
      <div>
      <ul>
        {data.map((eachData) => {
          return(
            <div>
                <h1>{eachData.login}</h1>
                <li>{eachData.type}</li>
                <li>{eachData.url}</li>
                <p>                  
                <img src={eachData.avatar_url} alt="" height='160' width='200'/>
                </p>
            </div>
        )})}
      </ul>
    </div>
    </>
  
  )


}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <App />
);
