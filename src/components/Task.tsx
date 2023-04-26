import { useCallback, useState } from 'react';
import Clock from './Clock';
import SemiCircle from './SemiCircle';
import '../styles/task.css'
const Task = (): JSX.Element => {
    const [topic, setTopic] = useState<String>('clock');
    const onSelectTopic = useCallback((value: String) => {
        setTopic(value);
    }, []);
    return (
        <>
            <Topics topic={topic} selectTopic={onSelectTopic} />
            {
                topic === 'clock' ? <Clock /> : <SemiCircle />
            }
        </>
    )
}

export default Task

interface topicProps {
    topic: String,
    selectTopic: (value: String) => void
}

const Topics: React.FC<topicProps> = props => {
    const onSelectTopic = (topic: String) => {props.selectTopic(topic)}
    return (
        <div className='topicPanel'>
            <button
                className="topic"
                style={{backgroundColor: `${props.topic === 'clock' ? 'cornflowerblue' : 'white'}`, color: `${props.topic === 'clock' ? 'white' : 'grey'}`}}
                onClick={() => onSelectTopic('clock')}
            >
                Clock with Arrows
            </button>
            <button
                className="topic"
                style={{backgroundColor: `${props.topic === 'semicircle' ? 'cornflowerblue' : 'white'}`, color: `${props.topic === 'semicircle' ? 'white' : 'grey'}`}}
                onClick={() => onSelectTopic('semicircle')}
            >
                SemiCircle
            </button>
        </div>
    )
}