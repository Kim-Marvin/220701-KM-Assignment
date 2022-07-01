import Signup from './Signup'

const Login = () => {
    const signUp = false
    return (
        <>
            <div>
                <span>
                    ID : <input type='text' placeholder='ID' />
                </span>
                <span>
                    PASSWORD : <input type='text' placeholder='PASSWORD' />
                </span>
            </div>
            {signUp ? (
                <p>
                    You are already Signed Up! Write your ID and PASSWORD to log
                    in.
                </p>
            ) : (
                <Signup />
            )}
        </>
    )
}
export default Login
