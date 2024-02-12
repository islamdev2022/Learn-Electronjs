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
            if (event.data instanceof Blob) {
                const reader = new FileReader();
                reader.onload = () => {
                    const textData = reader.result;
                    console.log(`WebSocket server talking: ${textData}`);
                };
                reader.readAsText(event.data);
            } else {
                const receivedData = event.data.toString();
                console.log(`WebSocket server talking: ${receivedData}`);
               
            }
            
        };

        ws.onclose = () => {
            console.log('WebSocket connection closed');
        };

        return () => {
            ws.close();
        };
    }, []);

    return (<>
    <div>go to console and terminals</div>
    </>
        );
};

export default ExampleComponent;
