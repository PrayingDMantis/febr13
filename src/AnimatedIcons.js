import React, { useState, useEffect } from 'react';

const icons = [
    '🔊', '🎵', '🎧', '🎤', '🎶',
    '🌟', '💎', '🔥', '🎮', '⚡'
];

const AnimatedIcons = () => {
    const [positions, setPositions] = useState([]);

    // Function to generate random starting positions (top values)
    const generateRandomPositions = () => {
        return icons.map(() => {
            return Math.random() * 20 + '%'; // Random top position between 0% and 20%
        });
    };

    // Update random positions when component is mounted
    useEffect(() => {
        setPositions(generateRandomPositions());
    }, []);

    return (
        <div style={styles.container}>
            {icons.map((icon, index) => (
                <div
                    key={index}
                    style={{
                        ...styles.icon,
                        top: positions[index] || '0%',  // Apply random starting top value
                        animation: `moveDown 4s ease-in-out infinite`, // Apply animation
                        animationDelay: `${Math.random() * 2}s`, // Randomize animation delay
                    }}
                >
                    {icon}
                </div>
            ))}
        </div>
    );
};

// CSS Styles
const styles = {
    container: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        // position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
    },
    icon: {
        fontSize: '3rem',
        position: 'absolute',
        margin: '20px',
        transition: 'top 1s ease',
    },
};

// Keyframes for moveDown animation
const stylesKeyframes = {
    '@keyframes moveDown': {
        '0%': {
            top: '0%',
        },
        '100%': {
            top: '100%',
        }
    }
};

export default AnimatedIcons;
