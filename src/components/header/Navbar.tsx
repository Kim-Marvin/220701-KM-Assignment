import Login from './login'

const Navbar = () => {
    let login = true
    login = false
    return (
        <>
            <div>
                This is Navbar Component. Menu and Search part could be placed
                here.
                {login ? (
                    <p>You are Logined!</p>
                ) : (
                    <p>
                        Log In Please! <Login />
                    </p>
                )}
            </div>
        </>
    )
}
export default Navbar
