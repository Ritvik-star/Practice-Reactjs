import React, { useEffect } from "react";
import { useState } from "react";

const MyFunctionalComponent=()=>{
    let [count, setCount] = useState(0);
    let [show, setShow] = useState(true);
    let [data, setData] = useState("");
    let [num, setNumber] = useState(0);
    const users = [
        { name: "John Doe", id: 1 },
        { name: "Jane Doe", id: 2 },
        { name: "Billy Doe", id: 3 }
      ];

    useEffect((count) =>{
        console.log(count)

        // return ()=>{
        //     console.log()
        // }
    }, [])

    const add = () =>{
        setCount(count++);
    }

    const showHide=()=>{
        setShow(!show)
    }

    return(
        <div>
            <button onClick={add}>add</button>
            {count}
            <button onClick={showHide}>show or hide</button>
            {show && users.map((e)=>{
                return <li>{e.name}</li>
            })}
            <input 
            value={data}
            onChange={(e)=>{setData(e.target.value)}}
            />
            <button disabled={data.length < 3}>submit</button>
            <h4>{data}</h4>

            <Parent/>
            <input 
            value={num}
            type='number'
            onChange={(e)=>setNumber(+e.target.value)}
            />

            <FetchAPI/>


        </div>
    )
}

export default MyFunctionalComponent;


const Parent = () => {
    let [msg, setMsg] = useState("Message from Parent");

    return(
        <div>
            {msg}
            <Child updateMsg={setMsg}/>
        </div>
    )
}

const Child = ({updateMsg}) => {
    let msg = "Message from child";

    return(
        <div>
            <button onClick={()=>updateMsg(msg)}>update</button>
        </div>
    )
}

const url = "https://jsonplaceholder.typicode.com/users/1";
const FetchAPI=()=>{
    let [res, setRes] = useState({});

    // const fetchRes =()=>{
    //     fetch(url)
    //     .then((res)=> res.json)
    //     .then((data) => setRes(data))
    //     .catch((err)=>console.log(err))
    // }

    const fetchRes = async () => {
        const r = await fetch(url);
        const d = await r.json();
        setRes(d);
    }

    // let u = (arr) => [...new Set(arr)]
    useEffect(()=>{
        fetchRes()
    },[])
    return(
        <div>
            {res.name}
        </div>
    )
}