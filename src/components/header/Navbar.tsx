const Navbar = () => {
    let login = true
    login = false
    return (
        <>
            <div>
                This is Navbar Component. Menu and Search part could be placed
                here.
                {login ? <p>You are Logined!</p> : <p>Log In Please!</p>}
            </div>
        </>
    )
}
export default Navbar
