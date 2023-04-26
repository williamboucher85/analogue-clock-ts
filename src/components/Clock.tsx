import React, {useEffect, useState} from 'react'
import '../styles/clock.css'

interface handRotateProps {
    hour: number,
    min: number,
    sec: number
}

const getAngle = (): handRotateProps => {
    const time = new Date();
    return {
        hour: time.getHours() * 30,
        min: time.getMinutes() * 6,
        sec: time.getSeconds() * 6
    }
}


const Clock = (): JSX.Element => {
    const [handAngle, setHandAngle] = useState(getAngle());
    useEffect(() => {
        const timerId = setInterval(async () => {
            await setHandAngle(getAngle());
        }, 1000);
        return () => {
            clearInterval(timerId)
        }
    }, [])
    return (
        <div className='clockPanel'>
            <Hand {...handAngle} />
            <Notches />
        </div>
    )
}

export default Clock

const Hand = ({hour, min, sec}: handRotateProps) => {
    return (
        <>
            <div
                className="hand_hour"
                style={{
                    transform: `rotateZ(${hour}deg)`
                }}
            />
            <div
                className="hand_min"
                style={{
                    transform: `rotateZ(${min}deg)`
                }}
            />
            <div
                className="hand_sec"
                style={{
                    transform: `rotateZ(${sec}deg)`
                }}
            />
        </>
    )
}

const Notches = (): JSX.Element => {
    return (
        <>
            <span className="twelve">12</span>
            <span className="eleven">11</span>
            <span className="ten">10</span>
            <span className="nine">9</span>
            <span className="eight">8</span>
            <span className="seven">7</span>
            <span className="six">6</span>
            <span className="five">5</span>
            <span className="four">4</span>
            <span className="three">3</span>
            <span className="two">2</span>
            <span className="one">1</span>
        </>
    )
}