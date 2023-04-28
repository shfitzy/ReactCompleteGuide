import React, { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';

import useFetch from './hooks/useFetch';

function App() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const applyData = (data) => {
            const loadedTasks = [];
    
            for (const taskKey in data) {
                loadedTasks.push({ id: taskKey, text: data[taskKey].text });
            }
    
            setTasks(loadedTasks);
        };

        fetchTasks({
            url: 'https://react-http-d23f9-default-rtdb.firebaseio.com/tasks.json',
        }, applyData);
    }, []);

    const {isLoading, error, sendRequest: fetchTasks} = useFetch();

    const taskAddHandler = (task) => {
        setTasks((prevTasks) => prevTasks.concat(task));
    };

    return (
        <React.Fragment>
        <NewTask onAddTask={taskAddHandler} />
        <Tasks
            items={tasks}
            loading={isLoading}
            error={error}
            onFetch={fetchTasks}
        />
        </React.Fragment>
    );
}

export default App;
