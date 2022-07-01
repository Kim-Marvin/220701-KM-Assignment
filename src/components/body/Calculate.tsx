const Calculate = () => {
    return (
        <>
            <h3>사칙연산 계산기</h3>
            <div>
                <input type='number' placeholder='0' />
                <button>+</button>
                <button>-</button>
                <button>*</button>
                <button>/</button>
                <input type='number' placeholder='0' />
                <span>=</span>
                <span id='print'></span>
            </div>
        </>
    )
}
export default Calculate
