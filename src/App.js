import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './App.css';

const HighlightedTab = ({ children }) => {
    const [highlight, setHighlight] = useState({ left: 0, opacity: 0 });

    const moveCursor = e => {
        setHighlight({
            left: e.nativeEvent.layerX - 70,
            opacity: 0.7,
        });
    };

    const leaveCursor = e => {
        setHighlight({
            opacity: 0,
        });
    };

    return (
        <div
            onMouseLeave={leaveCursor}
            onMouseMove={moveCursor}
            className="tab"
        >
            <div style={highlight} className="highlight" />
            {children}
        </div>
    );
};

function App() {
    let { pathname } = useLocation();
    pathname = pathname.slice(1, 2).toUpperCase() + pathname.slice(2);
    return (
        <div className="app">
            <div className="browser">
                <div className="tabs">
                    <HighlightedTab>
                        <Link to="/home">Home</Link>
                    </HighlightedTab>
                    <HighlightedTab>
                        <Link to="/about">About</Link>
                    </HighlightedTab>
                    <HighlightedTab>
                        <Link to="/contact">Contact</Link>
                    </HighlightedTab>
                </div>
                <div className="viewport">I Am The {pathname} Page.</div>
            </div>
        </div>
    );
}

export default App;
