import React from 'react'

export default function ConfirmPayment({nextStep, goBack}) {
    return (
        <>
            <div className="b-g p-bottom">
                <div className="specs-flex blue-type d-pad">

                    <p className="w-2">Items Name</p>
                    <p className="w-5">₦ Price</p>
                </div>
                <div className="d-pad">
                    <div className="specs-flex gray">
                        <h5 className="w-2">Data Science and usability</h5>
                        <p className="w-5 ">50,000.00</p></div>
                    <div className="specs-flex gray"><h5 className="w-2">Shipping</h5>
                        <p className="w-5"> 0.00</p>
                    </div>
                    <hr />
                    <div className="specs-flex gray bord"><h5 className="w-2">Total</h5>
                        <p className="w-5">50,000.00</p>
                    </div>
                </div>
            </div>

            <div style={{
                display: 'flex',
                gap: '40px',
                marginTop: '2rem'
            }}>
                <button type="submit" className="btn" onClick={() => nextStep()}>
                    Pay
                </button>
                <button type="submit" className="btn-cancel" onClick={() => goBack()}>
                    Cancel Payment
                </button>

            </div>
        </>
    )
}