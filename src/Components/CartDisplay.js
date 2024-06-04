import { useSelector } from 'react-redux';
import React from 'react';



const CartDisplay = () => {

    const { coffee , apple , lays , juice , silk} = useSelector((state ) => state.counter);

    const count = coffee + apple + lays + juice + silk ;

    const sum = 120*coffee + 40 *apple + 20*lays + 100*juice + 150*silk;

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
                    </tr>
                    <tr>
                        <td>Apple</td>
                        <td>{apple}</td>
                        <td>{40*apple}</td>
                    </tr>
                    <tr>
                        <td>Lays</td>
                        <td>{lays}</td>
                        <td>{20*lays}</td>
                    </tr>
                    <tr>
                        <td>Juice</td>
                        <td>{juice}</td>
                        <td>{100*juice}</td>
                    </tr>
                    <tr>
                        <td>Silk</td>
                        <td>{silk}</td>
                        <td>{150*silk}</td>
                    </tr>
                    <tr style={{color: "red"}}>
                        <td >Total</td>
                        <td>{count}</td>
                        <td>{sum}</td>
                    </tr>
                </tbody>
            </div>
            
            </div>
    )
}

export default CartDisplay;

