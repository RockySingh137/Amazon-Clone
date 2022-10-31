import React from 'react'

const Cart = () => {
  return (
    <div className="cart_section">
    {inddata && Object.keys(inddata).length &&
        <div className="cart_container">
            <div className="left_cart">
                <img src={inddata.detailUrl} alt="cart" />
                <div className="cart_btn">
                    <button className="cart_btn1" onClick={() => addtocart(inddata.id)}>Add to Cart</button>
                    <button className="cart_btn2">Buy Now</button>
                </div>

            </div>
            <div className="right_cart">
                <h3>{inddata.title.shortTitle}</h3>
                <h4>{inddata.title.longTitle}</h4>
                <Divider />
                <p className="mrp">M.R.P. : <del>₹{inddata.price.mrp}</del></p>
                <p>Deal of the Day : <span style={{ color: "#B12704" }}>₹{inddata.price.cost}.00</span></p>
                <p>You save : <span style={{ color: "#B12704" }}> ₹{inddata.price.mrp - inddata.price.cost} ({inddata.price.discount}) </span></p>

                <div className="discount_box">
                    <h5 >Discount : <span style={{ color: "#111" }}>{inddata.discount}</span> </h5>
                    <h4>FREE Delivery : <span style={{ color: "#111", fontWeight: "600" }}>Oct 8 - 21</span> Details</h4>
  )
}

export default Cart