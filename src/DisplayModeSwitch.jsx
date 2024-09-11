import React, { useState } from 'react';

function DisplayModeSwitch() {
    const [isDarkMode, setIsDarkMode] = useState(true);
    
    return (
        <div className='lightDark'>
            <button onClick={() => setIsDarkMode(!isDarkMode)}>
                {isDarkMode ? 'Dark' : 'Light'} Mode
            </button>
        </div>
    );
    }

export default DisplayModeSwitch;