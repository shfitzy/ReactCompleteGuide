import Section from '../UI/Section';
import TaskForm from './TaskForm';

import useFetch from '../../hooks/useFetch'

const NewTask = (props) => {

    const applyData = (taskText, taskData) => {
        const generatedId = taskData.name;
        const createdTask = { id: generatedId, text: taskText };
  
        props.onAddTask(createdTask);
    }

    const {isLoading, error, sendRequest} = useFetch();

    const enterTaskHandler = async (taskText) => {
        await sendRequest({
            url: 'https://react-http-d23f9-default-rtdb.firebaseio.com/tasks.json',
            method: 'POST',
            body: {text: taskText}
        }, applyData.bind(null, taskText));
    };

    return (
        <Section>
        <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
        {error && <p>{error}</p>}
        </Section>
    );
};

export default NewTask;
