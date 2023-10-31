import React, { useState } from 'react';

interface FormProps {
    isLoading: boolean;
    onGenerate: (topic: string) => void;
}

const Form = ({ isLoading, onGenerate }: FormProps) => {
    const [topic, setTopic] = useState<string>('');

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTopic(e.currentTarget.value);
    };

    const handleOnClick = () => {
        onGenerate(topic);
    };

    return (
        <div>
            <input onChange={handleOnChange} value={topic} placeholder="Enter a topic to begin generating flashcards" />
            <button disabled={isLoading} onClick={handleOnClick}>
                {isLoading ? 'Generating...' : 'Generate Flashcards'}
            </button>
        </div>
    );
};

export default Form;
