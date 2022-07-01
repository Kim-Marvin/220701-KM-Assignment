import Info from './Info'

const Footer = () => {
    const konosuba = ['Aqua', 'Kazuma', 'Meguming', 'Darkness']
    return (
        <>
            <div>
                This is Footer Component. <br />
                3rd Floor, 35, Baeckjegobun-Ro 11st Avenue, Songpa-Gu, Seoul,
                Korea <br />
                kgmng920@gmail.com <br />
                Special Thanks :{' '}
                {konosuba.map((item, index) => (
                    <span key={index}>{item}, </span>
                ))}
                etc.
            </div>
            <Info />
        </>
    )
}
export default Footer
