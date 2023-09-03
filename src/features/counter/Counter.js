import React from 'react';
import { useSelector , useDispatch,} from 'react-redux';
import { increment,decrement, reset , incrementByAmounnt } from './counterSclice';
import { useState } from 'react';
import './Counter.css';

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();


    const [incrementAmount , setincrementAmount] = useState(0);
    const addValue = Number(incrementAmount) || 0;

    const resetAll = () => {
        setincrementAmount(0);
        dispatch(reset());
    }


  return (
    <>
    <h1 className='head'>Count MeIn REDUX TOOLKIT 🔥</h1>


    <section className='counter-container'>
        <h1>Increment / Decrement Counter</h1>
        <h4 className='subtitle'>using Redux ToolKit</h4>

        <div className="count-display">{count}</div>

        <div className="button-container">
                <button className="increment-button" onClick={() => dispatch(increment())}>
                    +
                </button>
                <button className="decrement-button" onClick={() => dispatch(decrement())}>
                    -
                </button>
        </div>

        <input
            className="input-field"
            type="text"
            value={incrementAmount}
            onChange={(e) => setincrementAmount(e.target.value)}
        />

        <div className="button-container">
            <button className="add-amount-button" onClick={() => dispatch(incrementByAmounnt(addValue))}>Add Amount</button>
            <button className="reset-button" onClick={resetAll}>Reset</button>
        </div>

    </section>


    <footer class="footer">
        <div class="copyright">
            <span class="copyright-symbol"></span> 2023 Created by Ankit Singh 😎
        </div>
        <a href="https://github.com/RIOLOG" target="_blank" class="github-link">
            GitHub Repository
        </a>
    </footer>
    </>
  )
}

export default Counter