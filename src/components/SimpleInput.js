import useInput from '../hooks/useInput'

const SimpleInput = (props) => {

    const {
        value: nameValue,
        isValid: nameIsValid,
        hasError: nameError,
        inputBlurHandler: nameBlurHandler,
        inputValueChangeHandler: nameChangeHandler,
        reset: resetNameInput
    } = useInput(value => !!value.trim());

    const {
        value: emailValue,
        isValid: emailIsValid,
        hasError: emailError,
        inputBlurHandler: emailBlurHandler,
        inputValueChangeHandler: emailChangeHandler,
        reset: resetEmailInput
    } = useInput(value => value.toUpperCase().match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/g));

    const formIsValid = nameIsValid && emailIsValid;

    const formSubmissionHandler = (event) => {
        event.preventDefault();

        if(formIsValid) {
            resetNameInput();
            resetEmailInput();
        }
    };


    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={`form-control ${nameError ? 'invalid' : ''}`}>
                <label htmlFor='name'>Your Name</label>
                <input
                    type='text'
                    id='name'
                    onBlur={nameBlurHandler}
                    onChange={nameChangeHandler}
                    value={nameValue}
                    />
                {nameError && <p className='error-text'>Name must not be empty</p>}
            </div>
            <div className={`form-control ${emailError ? 'invalid' : ''}`}>
                <label htmlFor='name'>Your Email</label>
                <input
                    type='email'
                    id='email'
                    onBlur={emailBlurHandler}
                    onChange={emailChangeHandler}
                    value={emailValue}
                    />
                {emailError && <p className='error-text'>Must be a valid email</p>}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
