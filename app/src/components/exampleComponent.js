// ExampleComponent.jsx
import React, { useEffect } from 'react';

const ExampleComponent = () => {
    useEffect(() => {
        const ws = new WebSocket('ws://localhost:8080');

        ws.onopen = () => {
            console.log('Connected to WebSocket server');
            ws.send('Hello from React!');
        };

        ws.onmessage = (event) => {
            console.log('Received from WebSocket server: ' + event.data);
        };

        ws.onclose = () => {
            console.log('WebSocket connection closed');
        };

        return () => {
            ws.close();
        };
    }, []);

    return <div>Check the console for WebSocket server communication.</div>;
};

export default ExampleComponent;
