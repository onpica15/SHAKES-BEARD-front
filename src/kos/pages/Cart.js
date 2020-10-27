import React, { useState, useEffect } from 'react'
import CartCss from '../styles/CartCss.scss'
import Delete from '../icon/delete.svg'
import cuf1 from '../img/1-3.jpg'

function Cart() { 
        return (
            <>
                <div className="cartArea">
                    <h2 className="d-flex justify-content-center">購物車</h2>
                    <div className="cartStep d-flex justify-content-center">
                    <div className="d-flex align-items-start flex-column">
                        <div className="cartStepCircle thisStep">1</div>
                        <div className="cartStepFont">購物車</div>
                    </div>
                    <div className="cartStepLine"></div>
                    <div>
                        <div className="cartStepCircle otherStep">2</div>
                        <div className="cartStepFont">付款方式</div>   
                    </div>
                    <div className="cartStepLine"></div>
                    <div>
                        <div className="cartStepCircle otherStep">3</div>
                        <div className="cartStepFont">完成訂單</div>
                    </div>   
                    </div>
                </div>
                <div>
                    <div className="cartItem d-flex">
                        <img className="itemImg" src={cuf1}></img>
                        <div className="itemName my-auto">Ritmo di vita 陀飛輪袖扣</div>
                        <select className="selectHigh">
                            <option value="1">經典黑</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                        <select className="selectHigh">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                        <span className="unitPrice">NT$1,441</span>
                        <span className="subtotal ">NT$2,882</span>
                        <img src={Delete} className="deleteIcon"></img>
                    </div>

                    <div className="cartItem d-flex">
                        <img className="itemImg" src={cuf1}></img>
                        <div className="itemName my-auto">Ritmo di vita 陀飛輪袖扣</div>
                        <select className="selectHigh">
                            <option value="1">經典黑</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                        <select className="selectHigh">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                        <span className="unitPrice">NT$1,441</span>
                        <span className="subtotal">NT$2,882</span>
                        <img src={Delete} className="deleteIcon"></img>
                    </div>
                    <div className="cartItem d-flex">
                        <img className="itemImg" src={cuf1}></img>
                        <div className="itemName my-auto">Ritmo di vita 陀飛輪袖扣</div>
                        <select className="selectHigh">
                            <option value="1">經典黑</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                        <select className="selectHigh">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                        <span className="unitPrice">NT$1,441</span>
                        <span className="subtotal">NT$2,882</span>
                        <img src={Delete} className="deleteIcon"></img>
                    </div>
                    <div className="priceArea ml-auto d-flex">
                        <div className="priceArea font">
                            <div>優惠代碼：</div>
                            <div>折扣：</div>
                            <div>運費：</div>
                            <div>總價：</div>
                        </div>

                        <div className="priceArea font">
                            <div><input></input></div>
                            <div>NT$ -150</div>
                            <div>NT$ 150</div>
                            <div>NT$ 8,796</div>
                        </div>
                        
                    </div>
                    <div className="sumitBtn ml-auto">
                        <button>送出訂單</button>
                    </div>
                    
                </div>
                
            </>
        )   
}

export default Cart