import React from 'react'
import './Price.css'

const Price = () => {
  return (
    <div class='container'>
      <div className='row'>
        <div className='col-md-3'>
            <div className="single-price">
                <div class="price-head">
                   <h2>MONTHLY PLANS</h2>
                     </div>
                    <div className='price content'>
                    <ul>
                        <li>Basic Box[300-350g]
                        <p>Monthly except Sunday Rs.2929</p>
                        </li>
                        <li>Premium Box[400-450g]
                        <p>Monthly except Sunday Rs.4504</p></li>
                        <li>Overnight Oatmeal[300-350g]
                        <p>Monthly except Sunday Rs.4086</p></li>
                        
                    </ul>

                    </div>
                </div>
            </div>

       <div className='col-md-3'>
            <div className="single-price">
                <div class="price-head">
                   <h2>WEEKLY PLANS</h2>
                     </div>
                    <div className='price content'>
                    <ul>
                        <li>Basic Box[300-350g]
                        <p>Monthly except Sunday Rs.729</p>
                        </li>
                        <li>Premium Box[400-450g]
                        <p>Monthly except Sunday Rs.1044</p></li>
                        <li>Overnight Oatmeal[300-350g]
                        <p>Monthly except Sunday Rs.946</p></li>
                        
                    </ul>


                    </div>
                    


                </div>
            </div>
       


        </div>
    </div>
  )
}

export default Price
