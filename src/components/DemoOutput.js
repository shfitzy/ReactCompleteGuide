import React from 'react';

const DemoOutput = (props) => {

    console.log('Demo output rendered...');

    return <p>{props.show ? 'This is new!' : ''}</p>;
};

export default React.memo(DemoOutput);