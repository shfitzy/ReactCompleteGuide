import React, { useState, useCallback, useMemo } from 'react';
import Button from './components/UI/Button/Button'

import './App.css';
import DemoOutput from './components/DemoOutput';
import DemoList from './components/Demo/DemoList'

function App() {

    const [showParagraph, setShowParagraph] = useState(false);
    const [allowToggle, setAllowToggle] = useState(false);
    const [listTitle, setListTitle] = useState('My List');

    console.log('App running...');

    const toggleParagraphHandler = useCallback(() => {
        if(allowToggle) {
            setShowParagraph(prevShowParagraph => !prevShowParagraph);
        }
    }, [allowToggle]);

    const allowToggleHandlers = () => {
        setAllowToggle(prev => {
            console.log(prev + ' => true');
            return true;
        });
    };

    const changeTitleHandler = useCallback(() => {
        setListTitle('New Title');
    }, []);
    
    const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

    return (
        <div className="app">
            <DemoList title={listTitle} items={listItems} />
            <Button onClick={changeTitleHandler}>Change List Title</Button>
            <DemoOutput show={showParagraph} />
            <Button onClick={allowToggleHandlers}>Allow Toggling</Button>
            <Button onClick={toggleParagraphHandler}>Show Paragraph!</Button>
        </div>
    );
}

export default App;
