import { useState } from 'react';

const useInputNew = (validateInput) => {

    const [value, setValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const isValidInput = validateInput(value);
    const showError = !isValidInput && isTouched;

    const onChangeHandler = (event) => setValue(event.target.value);

    const onBlurHandler = () => setIsTouched(true);

    const resetInput = () => {
        setValue('');
        setIsTouched(false);
    };

    return {
        value,
        isValidInput,
        showError,
        onChangeHandler,
        onBlurHandler,
        resetInput,
    };
};

export default useInputNew;