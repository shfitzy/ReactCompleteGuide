import useInputNew from '../hooks/useInputNew';

const BasicForm = (props) => {

    const {
        value: firstNameValue,
        isValidInput: firstNameIsValid,
        showError: showFirstNameError,
        onChangeHandler: firstNameChangeHandler,
        onBlurHandler: firstNameBlurHandler,
        resetInput: resetFirstNameInput,
    } = useInputNew(value => !!value.trim());

    const {
        value: lastNameValue,
        isValidInput: lastNameIsValid,
        showError: showLastNameError,
        onChangeHandler: lastNameChangeHandler,
        onBlurHandler: lastNameBlurHandler,
        resetInput: resetLastNameInput,
    } = useInputNew(value => !!value.trim());

    const {
        value: emailValue,
        isValidInput: emailIsValid,
        showError: showEmailError,
        onChangeHandler: emailChangeHandler,
        onBlurHandler: emailBlurHandler,
        resetInput: resetEmailInput,
    } = useInputNew(value => value.toUpperCase().match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/g));

    const formIsValid = firstNameIsValid && lastNameIsValid && emailIsValid;

    const submitForm = (e) => {
        e.preventDefault();

        if(formIsValid) {
            resetFirstNameInput();
            resetLastNameInput();
            resetEmailInput();
        }
    }

    return (
        <form onSubmit={submitForm}>
            <div className='control-group'>
                <div className={`form-control ${showFirstNameError ? 'invalid' : ''}`}>
                    <label htmlFor='name'>First Name</label>
                    <input
                        type='text'
                        id='first-name'
                        value={firstNameValue}
                        onChange={firstNameChangeHandler}
                        onBlur={firstNameBlurHandler}
                    />
                    {showFirstNameError && <p className='error-text'>First name must not be blank.</p>}
                </div>
                <div className={`form-control ${showLastNameError ? 'invalid' : ''}`}>
                    <label htmlFor='name'>Last Name</label>
                    <input
                        type='text'
                        id='last-name'
                        value={lastNameValue}
                        onChange={lastNameChangeHandler}
                        onBlur={lastNameBlurHandler}
                    />
                    {showLastNameError && <p className='error-text'>Last name must not be blank.</p>}
                </div>
            </div>
            <div className={`form-control ${showEmailError ? 'invalid' : ''}`}>
                <label htmlFor='name'>E-Mail Address</label>
                <input
                    type='text'
                    id='name'
                    value={emailValue}
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                />
                {showEmailError && <p className='error-text'>Must be a valid email.</p>}
            </div>
            <div className='form-actions'>
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;
