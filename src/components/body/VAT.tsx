const VAT = () => {
    return (
        <>
            <h3>부가세(VAT) 계산기</h3>
            <div>
                부가세는 물건을 판매하거나 서비스를 제공할때 생기는
                마진(부가가치)에 부과되는 세금으로, 현재 우리나라의 부가세율은
                10%입니다. 부가세는 도서 등 면세상품을 제외하고 물건구입가격에
                포함되어 있습니다. <br />
                공급가액은 일반과세자에게 적용되는 것으로, 부가세가 포함되지
                않은 물품가격을 말하며 기업의 순수한 매출액과 같은 의미를 지니고
                있습니다.
            </div>
            <div>
                합계금액으로 계산하기 <br />
                <input
                    id='vatTotalNum'
                    type='number'
                    value='0'
                    placeholder='0'
                />
                <button>부가세액은?</button>
                <p>
                    공급가액은 <span id='printSupply'></span> 원 이고,
                    부가세액은 <span id='printTax1'></span> 원 입니다.
                </p>
            </div>
            <div>
                공급가액으로 계산하기 <br />
                <input
                    id='vatSupplyNum'
                    type='number'
                    value='0'
                    placeholder='0'
                />
                <button>부가세액은?</button>
                <p>
                    합계금액은 <span id='printTotal'></span> 원 이고, 부가세액은
                    <span id='printTax2'></span> 원 입니다.
                </p>
            </div>
        </>
    )
}
export default VAT
