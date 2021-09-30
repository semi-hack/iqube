import React from 'react'

export default function Success() {
    return (
        <div className="succ">
            <div className="b-g pb-g">
                <label className="_label">
                    <span className="label__text">
                        <span className="label__check">
                            <i className="fa fa-check icon"></i>
                        </span>
                    </span>
                </label>
                <h1 className="-m cyn-color">Purchase Completed</h1>

                <div>
                    Please check your email details concerning this transaction
                </div>
                <div
                    style={{
                        marginTop: '1.5rem',
                        paddingBottom: '2rem'
                        
                    }}>

                    <a className="return"
                        href="/">Return Home</a>
                </div>
            </div>

        </div>
    )
}