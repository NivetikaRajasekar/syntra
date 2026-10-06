import './AuthCard.css'
import {useState} from 'react'
function AuthCard({initialMode = 'login'}){

    const [mode, setMode] = useState(initialMode); //initialization
    const [form, setForm] = useState({name: '', email: '', password: '', termsaccepted:false});

    const isSignUp = mode == 'signup';

    return(
        <div className='card'>
            <div className='modeTabs'>
                <button className='signin'>
                    Sign in
                </button>
                <button className='create-button'>
                    Create Account
                </button>
            </div>
            <h1 className='title'>{isSignUp? "Create your account" : "Welcome Back!"}</h1>
            <p className='subtitle'>{isSignUp? "Setup your workspace in a minute" : "Sign in to continue where you left off"}</p>

            {/* Form begins */}

            <form>
              {/*Name (signup only) */}

              <input>
              </input>

            </form>
        </div>
    )
}


export default AuthCard;