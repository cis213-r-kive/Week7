import {useState} from 'react';
import './App.css';

function Form(){
   
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');

    const [emailValidCheck, setEmailValidCheck] = useState(true);
    const [passwordValidCheck, setPasswordValidCheck] = useState(true);

    function changeEmailHandler(event){
        setEnteredEmail(event.target.value)
    }

    function changePasswordHandler(event){
        setEnteredPassword(event.target.value)
    }

    function submitFormHandler(event){
        event.preventDefault();
        const emailValidCheck = enteredEmail.includes('@');
        const passwordValidCheck = enteredPassword.length >= 5;

        setEmailValidCheck(emailValidCheck);
        setPasswordValidCheck(passwordValidCheck);
        if (!emailValidCheck || !passwordValidCheck){
            return;
        }
    

    }

    return (
        <form onSubmit={submitFormHandler}>
            <div className="emailContainer">
                <label htmlFor="email" className={!emailValidCheck && 'invalid'}>Email: </label>
                <input type="email" id="email" onChange={changeEmailHandler} className={!emailValidCheck && 'invalid'}></input>
            </div>

            <div className="passContainer">
                <label htmlFor="password" className={!passwordValidCheck && 'invalid'}>Password: </label>
                <input type="text" id="pass" onChange={changePasswordHandler} className={!passwordValidCheck && 'invalid'}></input>
            </div>

            <div>
                <button>SUBMIT</button>
            </div>
        </form>
    );
}

export default Form;