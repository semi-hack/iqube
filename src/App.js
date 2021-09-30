import { useState } from 'react';
import './App.css';
import Billing from './components/Billing';
import ConfirmPayment from './components/ConfirmPayment';
import PersonalInfo from './components/PersonalInfo';
import Success from './components/Success';


function App() {
  const [step, setStep] = useState(1)
  const [personal, setPersonal] = useState({})

  const nextStep = () => {
    setStep(step + 1)
  }
  function goBack() {
    setStep(1)
  }

  return (
    <div className="App-header">
      <div className={ step > 3 ? 'hide' : null}>
      <header className="App-headr">
        <h1 className="cyn-color">Complete your purchase</h1>
      </header>
      <div className="row">
        <p className={step === 1 ? 'p-color-slider' : 'p-color'}>Personal Info</p>
        <p className={step === 2 ? 'p-color-slider' : 'p-color'}>Billing Info</p>
        <p className={step === 3 ? 'p-color-slider' : 'p-color'}>Confirm Payment</p>
      </div>
      <div style={{
        position: 'relative'
      }}>
        <span className={ step === 1 ? "slider" : step === 2 ? "slider2" : "slider3"}></span>
        <hr />
      </div>
      </div>{console.log(personal)}
      <div className="form">
        {step === 1 ?
          <PersonalInfo nextStep={nextStep} Personal={setPersonal}/>
          : step === 2 ?
            <Billing nextStep={nextStep} Personal={setPersonal} goBack={goBack} personal={personal}/>
            : step === 3 ?
              <ConfirmPayment nextStep={nextStep} goBack={goBack}/>
              : <Success goBack={goBack} />}
      </div>
    </div>
  );
}

export default App;
