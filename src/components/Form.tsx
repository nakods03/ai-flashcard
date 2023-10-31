import React, { useState } from 'react';
import tw from 'tailwind-styled-components';
import { Button, Container } from '../style/style';

const Input = tw.input`
    w-full max-w-sm self-center px-4 py-2 outline-none rounded-full border-2 border-solid border-gray-200 focus:border-orange-500 text-lg
`;

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
        <Container>
            <Input onChange={handleOnChange} value={topic} placeholder="Enter a topic to begin generating flashcards" />
            <Button disabled={isLoading} onClick={handleOnClick}>
                {isLoading ? 'Generating...' : 'Generate Flashcards'}
            </Button>
        </Container>
    );
};

export default Form;
