import React, { useState } from 'react'
import { State } from './data'

export default function PersonalInfo({nextStep, Personal}) {
    const [ name, setName ] = useState(""),
          [ emailAddress, setEmailAddress ] = useState(""),
          [address, setAddress ] = useState(""),
          [secondAddress, setSecondAddress2] = useState(""),
          [localGov, setLocalGov] = useState(""),
          [state, setState] = useState("Abia"),
          [error, setError] = useState(""),
          [valid, setValid] = useState(),
          [isValid, setIsValid] = useState(false)
          
    const nextForm = (e) => {
        e.preventDefault()
        if(emailAddress.length === 0 || !isValid ){
            setError('Email is required')      
        }
        else{
            let data = {
                name,
                emailAddress,
                address,
                secondAddress,
                state,
                localGov  

            }
            Personal(data)
            setError('')
            nextStep()
        }
        console.log('next')
        
    }
   
    return (
        <form onSubmit={nextForm}>
            <label>Name</label><br />
            <input type="text" className="input" value={name} onChange={(e) => setName(e.target.value)}/>

            <label className="required">Email Address</label><br />
            <input type="text" className="input" value={emailAddress} 
            onChange={(e) => {
                /* eslint-disable-next-line */
                let test =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                setEmailAddress(e.target.value)
                if(e.target.value.match(test)){
                setValid('')
                setError('')
                setIsValid(true)
                }
                else{
                    setIsValid(true)
                    setValid('The email you entered is not valid, enter a valid email')
                }}}/>
        {valid ? <p className="err-msg -m">{valid}</p> : null}
            <label>Address 1</label><br />
            <input type="text" className="input" value={address} onChange={(e) => setAddress(e.target.value)}/>
            <label>Address 2</label><br />
            <input type="text" className="input" value={secondAddress} onChange={(e) => setSecondAddress2(e.target.value)}/>
            <div className="flex w-100">
                <div className="lga">
                    <label>Local Government</label><br />
                    <input type="text" className="input" value={localGov} onChange={(e) => setLocalGov(e.target.value)}/>
                </div>
                <div className="select">
                    <label>State</label><br />

                    <select className="input" value={state} onChange={ (e) => setState(e.target.value)}>
                        {State.map((state, i) => <option value={state} key={i}>{state}</option> )}
                        
                    </select>
                </div>
            </div>
            <div style={{
                display: 'flex',
                gap: '40px'
            }}>
                <button type="submit" className="btn">
                    Next
                </button>
                <button type="submit" className="btn-cancel">
                    Cancel Payment
                </button>
            </div>
            {error ? <div className="err-msg">{error}</div> : null}
        
        </form>

    )
}