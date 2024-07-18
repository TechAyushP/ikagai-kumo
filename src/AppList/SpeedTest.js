import React, { useState, useEffect } from 'react';
// import FastSpeedtest from 'fast-speedtest-api';

const SpeedTest = () => {
    const [speed, setSpeed] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const token = "your-app-token"; // Replace with your actual token

    useEffect(() => {
        const runSpeedTest = async () => {
            setLoading(true);
            setError(null);
            setSpeed(null);
            
            // let speedtest = new FastSpeedtest({
            //     token: token,
            //     verbose: false,
            //     timeout: 10000,
            //     https: true,
            //     urlCount: 5,
            //     bufferSize: 8,
            //     unit: FastSpeedtest.UNITS.Mbps
            // });

            // try {
            //     const speed = await speedtest.getSpeed();
            //     setSpeed(speed);
            // } catch (e) {
            //     setError(e.message);
            // } finally {
            //     setLoading(false);
            // }
        };

        runSpeedTest();
    }, []);

    return (
        <div className="speed-test">
            <h1>Network Speed Test</h1>
            {loading && <p>Testing speed...</p>}
            {error && <p>Error: {error}</p>}
            {speed && <p>Speed: {speed.toFixed(2)} Mbps</p>}
        </div>
    );
};

export default SpeedTest;
