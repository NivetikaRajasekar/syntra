import './AuthCard.css'
import {useState} from 'react'
function AuthCard({initialMode = 'login'}){

    const [mode, setMode] = useState(initialMode); //initialization
    const [form, setForm] = useState({name: '', email: '', password: '', termsaccepted:false});

    const isSignUp = mode == 'signup';

    return(
        <div className='card'>
            <div className='modeTabs'>
                <button>
                    Sign in
                </button>
                <button>
                    Create Account
                </button>
            </div>
        </div>
    )
}


export default AuthCard;