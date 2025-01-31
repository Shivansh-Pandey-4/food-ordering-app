import { useEffect, useState } from "react";
import UserClass from "./UserClass";

const About=()=>{
    // let num=0;
    const [num,setNum]=useState(0);
    const [jokes,setJokes]=useState("");

    useEffect(()=>{
      fetchJokes();
    },[])
     
    const fetchJokes= async ()=>{
      const data= await fetch("https://official-joke-api.appspot.com/random_joke");
      const response= await data.json();
      console.log(response);
      setJokes(response);
   }
    

    return (
       <div className="aboutContainer">
          <h2>About Section of the Company's TeamMember.</h2>
          <h3> 1- Shivansh Pandey</h3>
          
          <img src="https://th.bing.com/th/id/OIP.UVNyAP37IiRnVo6aixvJzgHaLH?rs=1&pid=ImgDetMain" alt="personalImg"></img>
          <p>Hello there! I am Shivansh Pandey a passionate Software Engineer and World's best coder. This is a about me section and here is a rating button so if you like my profile so please upvote me.Thank You for reading and <b>have a nice day.</b></p>
          <h3>Joke Section</h3>
          <ul >
            <li>Joke Type--{jokes.type}</li>
            <li>Setup--{jokes.setup}</li>
            <li>Punchline-- {jokes.punchline}</li>
          </ul>
           <UserClass name="Shivansh Pandey"  location="New Delhi" />
          <h1>MyRanking-{num}</h1>
          <button onClick={()=>{
              let value=num+1;
              setNum(value);
          }}>UpVote</button>

          <button onClick={()=>{
             let value=num-1;
             setNum(value);
          }}>DownVote</button>

          <button onClick={fetchJokes}>Next Joke</button>
       </div>
    )
};

export default About;