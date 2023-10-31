import React, { useState } from 'react';
import tw from 'tailwind-styled-components';
import { MIN_CHAR } from '../config/openai';
import { Button, ContainerCenter } from '../style/style';

const Input = tw.input`
    w-full max-w-sm self-center px-4 py-2 outline-none rounded-full border-2 border-solid border-gray-200 focus:border-orange-500 text-lg
`;

const ErrorMsg = tw.div`
    text-red-500
`;

interface FormProps {
    isLoading: boolean;
    errorMsg: string;
    setErrorMsg: (errorMsg: string) => void;
    onGenerate: (topic: string) => void;
}

const Form = ({ isLoading, errorMsg, setErrorMsg, onGenerate }: FormProps) => {
    const [topic, setTopic] = useState<string>('');

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTopic(e.currentTarget.value);
        setErrorMsg('');
    };

    const handleOnClick = () => {
        if (topic.length < MIN_CHAR) {
            setErrorMsg('Please enter at least 10 characters.');
            return;
        }
        onGenerate(topic);
    };

    return (
        <ContainerCenter>
            <Input onChange={handleOnChange} value={topic} placeholder="Enter a topic to begin generating flashcards" />
            {errorMsg.length > 0 && <ErrorMsg>&#9888; {errorMsg}</ErrorMsg>}
            <Button disabled={isLoading} onClick={handleOnClick}>
                {isLoading ? 'Generating...' : 'Generate Flashcards'}
            </Button>
        </ContainerCenter>
    );
};

export default Form;
