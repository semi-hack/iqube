import React, { useState } from 'react';

import Cleave from 'cleave.js/react';

export default function Billing({ nextStep, goBack, Personal, personal }) {
    const [cardName, setCardName] = useState(""),
        [cardNo, setCardNo] = useState(""),
        [cardEx, setCardEx] = useState(""),
        [cvvNo, setCvvNo] = useState(""),
        [selectCard, setSelectCard] = useState("")

    const nextForm = (e) => {
        e.preventDefault()
        let data = {
            cardName,
            cardNo,
            cvvNo,
            cardEx
        }
        nextStep()
        Personal({
            ...personal,
            ...data
        })

    }

    return (
        <form onSubmit={nextForm}>
            <label className="required">Name on Card</label><br />
            <input type="text" className="input" value={cardName} onChange={(e) => setCardName(e.target.value)} required />

            <label className="required">Card Type</label><br />

            <select className="input cursor" value={selectCard} onChange={(e) => setSelectCard(e.target.value)} required>
                <option value="visa">VISA</option>
                <option value="masterCard">MASTER CARD</option>
                <option value="verve">VERVE</option>
            </select>

            <div className="flex w-100">
                <div className="mw-2">
                <label className="required">Card Details</label><br />
                <Cleave placeholder="Enter your credit card number"
                className="input"
                options={{creditCard: true}}
                value={cardNo}
                onChange={ (e) => setCardNo(e.target.value)}
                />
                    </div>

                    <div className="w-1">
                <label className="required">Expiry date</label><br />
                <Cleave placeholder="MM/YY"
                options={{date: true, datePattern: ["m", "d"] }}
                className="input"
                value={cardEx}
                onChange={(e) => setCardEx(e.target.value)}
                required
                />
               
                    </div>

                <div className="w-1">
                    <label className="required">CVV</label><br />
                    <input type="number" className="input" value={cvvNo} placeholder="CVV" onChange={(e) => {
                        if(e.target.value.length < 4)
                        setCvvNo(e.target.value)
                        
                        }} required />
                </div>
            </div>

            <div style={{
                display: 'flex',
                gap: '40px'
            }}>
                <button type="submit" className="btn">
                    Next
                </button>
                <button type="submit" className="btn-cancel" onClick={() => goBack()}>
                    Cancel Payment
                </button>
            </div>
 
        </form>

    )
}