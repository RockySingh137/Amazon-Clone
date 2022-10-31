import React from 'react'

const Buynow = () => {
  return (
    <>
            {cartdata.length ?
                <div className="buynow_section">
                    <div className="buynow_container">
                        <div className="left_buy">
                            <h1>Shopping Cart</h1>
                            <p>Select all items</p>
                            <span className="leftbuyprice">Price</span>
                            <Divider />

                            {
                                cartdata.map((e, ind) => {
                                    return (
                                        <>
                                            <div className="item_containert" key={ind}>
                                                <img src={e.detailUrl} alt="imgitem" />
                                                <div className="item_details">
                                                    <h3>{e.title.longTitle}</h3>
                                                    <h3>{e.title.shortTitle}</h3>
                                                    <h3 className="diffrentprice">₹{e.price.cost}.00</h3>
                                                    <p className="unusuall">Usually dispatched in 8 days.</p>
                                                    <p>Eligible for FREE Shipping</p>
                                                    <img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png" alt="logo" />
                                                    <Option deletedata={e.id} get={getdatabuy} />
                                                </div>
                                                <h3 className="item_price">₹{e.price.cost}.00</h3>
                                            </div>
                                            <Divider />
                                        </>
                                    )
                                })
                            }
                         
                            
                        </div>
                       
                    </div>
                </div>
            }
        </>
    
  )
}

export default Buynow
