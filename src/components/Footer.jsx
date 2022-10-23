import React from 'react'

const Footer = () => {
    return (
        <div className='footer' style={{background: 'black', color: 'white', padding: '10px', overflow: 'hidden', 'margin-bottom': '0px'}}>
         <div className="footer-container">
          <div className="letUs">
              <h5>Let Us help You</h5>
              <p>Help center</p>
              <p>How to shop on Apple Mart</p>
              <p>Delivery options and timelines</p>
              <p>How to return a product on Apple Mart</p>
              <p>Report a product</p>
              </div> 
          <div className="AboutAppleMart">
              <h5>About us</h5>
              <p>Apple Mart careers</p>
              <p>Apple Mart Express</p>
              <p>Terms and conditions</p>
              <p>Privacy and cookie notice</p>
              </div> 
          <div className="makeMoney">
              <h5>Sell on Apple Mart</h5>
              <p>Become a sales consultant</p>
              <p>Become a logistics service provider </p>
              </div> 
        </div>
        <div className="connect">
            <div className="joinUs-Socially">
            <h5>Join Us On</h5>
            <i class="fa fa-facebook" aria-hidden="true"></i>
            <i class="fa fa-twitter-square" aria-hidden="true"></i>
            <i class="fa fa-instagram" aria-hidden="true"></i>
            <i class="fa fa-google-plus-square" aria-hidden="true"></i>
            </div>
            <div className="payment-methods">
                <h5>Payment methods</h5>
                <i class="fa fa-cc-visa" aria-hidden="true"></i>
                <i class="fa fa-cc-mastercard" aria-hidden="true"></i>
                <i class="fa fa-cc-paypal" aria-hidden="true"></i>

            </div>
        </div>
        </div>
    )
}

export default Footer;
