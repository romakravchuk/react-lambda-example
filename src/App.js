import React from 'react';
import './App.css';
import { useAsync } from "react-async";
import SetContent from "./hooks/setContent";

function createConfigForAPI() {
    const headers = {
        "Content-Type": "application/json; charset=utf-8",
        Accept: 'application/json',
    };

    return { headers };
}

const loadChart = async () => {
    const config = createConfigForAPI();
    const res = await fetch(`https://dxejpmt59g.execute-api.us-east-1.amazonaws.com/dev/hello`, config)
    if (!res.ok) throw new Error(res.statusText)
    return res.json()
}

function App() {

    const { run, data, error, isPending } = useAsync({deferFn: loadChart});
    if (error) return `Something went wrong: ${error.message}`;

    return (
        <div className="container">
            <div className="buttonContainer">
                <button type='button' className="button" onClick={run}>Press To Load Chart</button>
            </div>

            {isPending && 'Loading...'}
            {data && <SetContent chartData={data} />}

        </div>
    );
}

export default App;
