import React from 'react';

const Answers = () => {
    return (
        <div>
            <div>
                <h1>How does react works?</h1>
                <p>React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”. We'll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen.</p>
            </div>
            <div>
                <h1>What is the difference between props and state?</h1>
                <p>What is the difference between props and state in react component?
                    While both hold information that influences the output of render, they are different in one important way: props get passed to the component (similar to function parameters) whereas state is managed within the component (similar to variables declared within a function).</p>
            </div>
            <div>
                <h1>Use of useEffect</h1>
                <p>Validating an input while it's receiving characters is another great application for useEffect . Whilst the input is being stored in a state using useState , the validation takes place every time the input changes, giving immediate feedback to the user.</p>
            </div>
        </div>
    );
};

export default Answers;