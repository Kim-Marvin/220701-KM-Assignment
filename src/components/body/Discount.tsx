const Discount = () => {
    const priceNum = Number(document.getElementById('priceNum'))
    const discountPer = Number(document.getElementById('discountPer'))
    const discountPrice = priceNum * (discountPer / 100)
    return (
        <>
            <h3>할인율 계산기</h3>
            <span>원가 : </span>
            <input id='priceNum' type='number' value='0' placeholder='0' /> 원
            <br />
            <span>할인율 : </span>
            <input id='discountPer' type='number' value='0' placeholder='0' /> %
            <br />
            <button>할인하면?</button>
            <p>
                어머! 이건 <span id='printPrice'>{priceNum}</span> 원 인데,{' '}
                <br />
                <span id='printDiscountPrice'>{discountPrice}</span> 원 만큼이나
                할인해줘서
                <br />
                <span id='printFinalPrice'>{priceNum - discountPrice}</span> 원
                이잖아! <br />
            </p>
        </>
    )
}
export default Discount
