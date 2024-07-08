// src/components/Welcome.tsx
import React from 'react';

interface WelcomeProps {
    name: string;
}

const Welcome: React.FC<WelcomeProps> = ({ name }) => {
    return <h1>Bem-vindo, {name}!</h1>;
};

export default Welcome;
