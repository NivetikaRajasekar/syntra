import AuthShell from './AuthShell';
import AuthCard from './AuthCard';

function SignupPage(){
    return(
        <AuthShell>
            <AuthCard initialMode='signup'></AuthCard>
        </AuthShell>
    )
}

export default SignupPage;