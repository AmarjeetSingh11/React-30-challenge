import React,{useEffect,useState} from "react";
import { getPost } from "./api/index.js";
import CardComponent from "./components/CardCompoent.jsx";
function App() {
  const [data,setData] = useState(null);
  useEffect(() => {
    
    getPost().then((posts) =>{setData(posts.products)})
    console.log(getPost());
  },[])
  return (
    <>

      {
        data ? 
        <div>
{
  data.map((e) => <CardComponent title = {e.title} body ={e.description} img = {e.thumbnail}/>)
}
        </div>
        
        : <p>No Data Found</p>
      }

    </>
  )
}

export default App
