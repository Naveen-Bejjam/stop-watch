import { useEffect, useState } from "react";
import "./StopWatch.css"
const StopWatch = () => {
    const [milliSec, setMilliSec] = useState(0);
    const [sec, setSec] = useState(0);
    const [mins, setMins] = useState(0);
    const [hrs, setHrs] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    useEffect(() => {
        let intervalId = setInterval(() => {
            if (isRunning) {
                setMilliSec((prev) => prev + 1);
                if (milliSec == 99) {
                    setMilliSec(0);
                    setSec((prev) => prev + 1);
                    if (sec === 59) {
                        setSec(0);
                        setMins((prev) => prev + 1);
                        if (mins === 59) {
                            setHrs((prev) => prev + 1)
                        }
                    }

                }
            }
        }, 10)
        return () => {
            clearInterval(intervalId)
        }
    })

    const handleStart = () => {
        setIsRunning(true);
    };
    const handleStop = () => {
        setIsRunning(false);
    };
    const handleReset = () => {
        setSec(0);
        setHrs(0);
        setMilliSec(0);
        setMins(0);
    }
    return (
        <div className="stopWatch-container">
            <h1>Stop Watch</h1>
            <div className="timer-container">
                <div style={{ display: 'inline-block', width: '20%' }}>{hrs}Hr</div>
                <div style={{ display: 'inline-block', width: '20%' }}> : {mins}Min</div>
                <div style={{ display: 'inline-block', width: '20%' }}> : {sec}Sec</div>
                <div style={{ display: 'inline-block', width: '20%' }}> : {milliSec}ms</div>
            </div>
            <div className="button-container">
                <button className="start" onClick={() => handleStart()}>Start</button>
                <button className="stop" onClick={() => handleStop()}>Stop</button>
                <button className="reset" onClick={() => handleReset()}>Reset</button>
            </div>
        </div>
    )
}
export default StopWatch;