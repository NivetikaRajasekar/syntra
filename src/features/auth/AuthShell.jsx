import './AuthShell.css'
function AuthShell({children}){
    return(
        <div className='container'>
            <div className='left-container'>
                <div className='header-content'>
                    <span className='dot'/>
                    Syntra
                </div>
                <div className='content'>
                   <h2>Every project's knowledge, in one place the AI actually understands.</h2>
                   <p>Tasks, documents, and notes — searchable, askable, grounded in your own content.</p>
                </div>
                <div className='version'>SYNTRA V1</div>
            </div>
            <div className='right-container'>{children}</div>
        </div>
    )
}

export default AuthShell;