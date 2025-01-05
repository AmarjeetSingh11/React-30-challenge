import React,{useState,useEffect} from "react";
const StopWatch = () => {
    const [count,setCount] = useState(0);
    const [isRunning,setRunning] = useState(true);
    let interval;
    useEffect(()=> {
        if(isRunning){
             interval = setInterval(
                () => {
                    setCount((preCount) => preCount + 1);
                },1000
            );
        }else{
            clearInterval(interval);
        }
        
        return function(){
            clearInterval(interval);
        }
    },[isRunning]);
    const handleReset = () => {
        setCount(0);  
        setRunning(true); 
      };
      const handleStop = () => {
        setRunning(false);
      };
    return (
        <>

        <div className="stp-container">
        <p className="stp-count">{count}</p>
        <p>{isRunning ? "Stopwatch is Running" : "Stopwatch is Paused"}</p>
        <div className="btn-container">
        <button className="btn-reset" onClick= {handleReset}>Reset</button>
        <button className="btn-stop" onClick={handleStop}>Pause</button>
        </div>

        </div>

        </>
    )
}
export default StopWatch;