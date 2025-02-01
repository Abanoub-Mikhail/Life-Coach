import React from 'react'

const SideFreshCart = ({openFreshCart,setOpenFreshCart}) => {
  return (
    <div className={`fresh-cart position-fixed ${openFreshCart&&'visibility-bg'}`} onClick={()=>{setOpenFreshCart(false)}}>
        <div className={`fresh-slider ${openFreshCart&&'slide-rtl'}`}>
            <div className="header d-flex align-items-center justify-content-between border-bottom pb-3 mb-3">
                <h2 className=' fw-bolder text-capitalize'>your shopping cart</h2>
                <span className=' fw-bolder text-uppercase p-2 fs-5' onClick={()=>{setOpenFreshCart(false)}}>X</span>
            </div>
            <div className="body border-bottom mb-3">
                <p className='text-capitalize fs-5'>your cart is empty!</p>
            </div>
            <div className="footer fw-bold pb-2 text-capitalize d-flex align-items-center justify-content-between border-bottom mb-4">
                <h4 className=' fw-bold p-0 m-0 '>subtotal:</h4>
                <span >$0</span>
            </div>
            <button className='py-2 btn w-100 fw-bold text-capitalize text-white'>checkout</button>
        </div>
    </div>
  )
}

export default SideFreshCart