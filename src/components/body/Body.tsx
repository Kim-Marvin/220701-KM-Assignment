import Calculate from './Calculate'
import Discount from './Discount'
import VAT from './VAT'

const Body = () => {
    const customer = true
    return (
        <>
            <p>This is Body Components.</p>
            <Calculate />
            {customer ? <Discount /> : <VAT />}
        </>
    )
}
export default Body
