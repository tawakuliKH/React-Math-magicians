import { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [result, setResult] = useState({ total: null, operation: null, next: null });
  const onClickHandler = (e) => {
    setResult(calculate(result, e.target.innerHTML));
  };

  return (
    <div className="conatainer-fluid">
      <div>
        <h2>Let&apos;s do some Calculations!</h2>
      </div>
      <div className="container">
        <div className="result">
          {result.next || result.total || 0}
        </div>
        <div className="numPad">
          <div className="row">
            <button type="button" className="btn" onClick={onClickHandler}>AC</button>
            <button type="button" className="btn" onClick={onClickHandler}>+/-</button>
            <button type="button" className="btn" onClick={onClickHandler}>%</button>
            <button type="button" className="btn btn-orange" onClick={onClickHandler}>÷</button>
          </div>
          <div className="row">
            <button type="button" className="btn" onClick={onClickHandler}>7</button>
            <button type="button" className="btn" onClick={onClickHandler}>8</button>
            <button type="button" className="btn" onClick={onClickHandler}>9</button>
            <button type="button" className="btn btn-orange" onClick={onClickHandler}>x</button>
          </div>
          <div className="row">
            <button type="button" className="btn" onClick={onClickHandler}>4</button>
            <button type="button" className="btn" onClick={onClickHandler}>5</button>
            <button type="button" className="btn" onClick={onClickHandler}>6</button>
            <button type="button" className="btn btn-orange" onClick={onClickHandler}>-</button>
          </div>
          <div className="row">
            <button type="button" className="btn" onClick={onClickHandler}>1</button>
            <button type="button" className="btn" onClick={onClickHandler}>2</button>
            <button type="button" className="btn" onClick={onClickHandler}>3</button>
            <button type="button" className="btn btn-orange" onClick={onClickHandler}>+</button>
          </div>
          <div className="row">
            <button type="button" className="btn btn-zero" onClick={onClickHandler}>0</button>
            <button type="button" className="btn" onClick={onClickHandler}>.</button>
            <button type="button" className="btn btn-orange" onClick={onClickHandler}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
