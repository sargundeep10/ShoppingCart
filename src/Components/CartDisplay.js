import {  useDispatch, useSelector } from 'react-redux';
import React from 'react';

import { decrement , reset} from './counterSlice';



const CartDisplay = () => {

    const { coffee , apple , lays , juice , silk} = useSelector((state ) => state.counter);

    const count = coffee + apple + lays + juice + silk ;

    const sum = 120*coffee + 40 *apple + 20*lays + 100*juice + 150*silk;

    const bill = sum - sum/10;

    const dispatch = useDispatch();

    const handleDecrement = (itemName) => {
        dispatch(decrement(itemName));
    }

    return(
        <div className="table">
            <div>
                <thead>
                    <tr>
                        <th>ITEM</th>
                        <th>COUNT</th>
                        <th>PRICE</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Coffee</td>
                        <td>{coffee}</td>
                        <td>{120*coffee}</td>
                        <td><button onClick={() => handleDecrement('coffee')}>REMOVE</button></td>
                    </tr>
                    <tr>
                        <td>Apple</td>
                        <td>{apple}</td>
                        <td>{40*apple}</td>
                        <td><button onClick={() => handleDecrement('apple')}>REMOVE</button></td>
                    </tr>
                    <tr>
                        <td>Lays</td>
                        <td>{lays}</td>
                        <td>{20*lays}</td>
                        <td><button onClick={() => handleDecrement('lays')}>REMOVE</button></td>
                    </tr>
                    <tr>
                        <td>Juice</td>
                        <td>{juice}</td>
                        <td>{100*juice}</td>
                        <td><button onClick={() => handleDecrement('juice')}>REMOVE</button></td>
                    </tr>
                    <tr>
                        <td>Silk</td>
                        <td>{silk}</td>
                        <td>{150*silk}</td>
                        <td><button onClick={() => handleDecrement('silk')}>REMOVE</button></td>
                    </tr>
                    <tr style={{color: "red"}}>
                        <td >Total</td>
                        <td>{count}</td>
                        <td>{sum}</td>
                        <td><button style = {{color: "blue"}} onClick={() => dispatch(reset())}>EMPTY CART</button></td>
                    </tr>
                </tbody>
                <div className='dis'> 
                    <h4>DISCOUNT OF 10%</h4>
                    <span style={{color : "red" , fontSize : "20px" , backgroundColor : "bisque"}}>BILL = {bill}</span>
                </div>
                <div>
                <button>Proceed To Pay</button>

                </div>
                    
            </div>
            
            </div>
    )
}

export default CartDisplay;

