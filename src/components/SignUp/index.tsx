import React, { useState } from 'react'

function Index() {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password1, setPassword1] = useState<string>('');
    const [password2, setPassword2] = useState<string>('');
    interface user {
        name : string,
        email: string,
        password: string
    }
    type inputType = "name" | "email" | "password1" | "password2"
    function inputChangeHandler(e: any, type: inputType) {
        switch(type) {
            case 'name': {
                setName(e.target.value);
                return
            }
            case 'email': {
                setEmail(e.target.value);
                return
            }
            case 'password1': {
                setPassword1(e.target.value);
                return
            }
            case 'password2': {
                setPassword2(e.target.value);
            }
        }
    }

    function signUpBtnHandler() {
        if(matchPasswords()) {
            let user = {
                name,
                email,
                password: password1
            }
            createUser(user);
        }
    }

    function matchPasswords() {
        if(password1 === password2) {
            return true;
        } else {
            return false;
        }
    }

    function createUser(user: user) {
        console.log("The User : ", user);
    }

  return (
    <div>
        <div>
            <label>Full Name</label>
            <input onChange={(e) => inputChangeHandler(e, 'name')} />
        </div>
        <div>
            <label>Email</label>
            <input onChange={(e) => inputChangeHandler(e, 'email')}  />
        </div>
        <div>
            <label>Password</label>
            <input onChange={(e) => inputChangeHandler(e, 'password1')}  />
        </div>
        <div>
            <label>Confirm Password</label>
            <input onChange={(e) => inputChangeHandler(e, 'password2')}  />
        </div>
        <div>
            <button onClick={signUpBtnHandler}>Sign Up!</button>
        </div>
    </div>
  )
}

export default Index