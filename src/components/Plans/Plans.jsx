import React from 'react'
import './Plans.css'
import basic from'../../assets/basic.png'
import premium from'../../assets/premium.png'
import oatmeal from'../../assets/oatmeal.png'
import next_icon from'../../assets/next-icon.png'
import back_icon from'../../assets/back-icon.png'

const Plans = () => {




    
  return (
    <div className='Plans'>
       
         <div className='slider'>
            <ul>
               
                    <div className="slide">
                        <div className="user-info">
                            <div className='Plan'>
        <img src={basic} alt="" style={{width: '450px',height:'250px'}}/> 
       
    </div>
    <div className='merge'>
    <div className='hello'>
        <h2>BASIC PLAN</h2>
        <h3>Consists of 6-items</h3>
        <span>2-Fruits,2-Veggies,Dates,1 Boiled cereals</span>
    </div>
    <div classname='content'>
    <h4>Fruits:</h4>
    <p>Guava,Pomegranate,Apple,Orange,Mosambi,Pineapple,Banana,</p>
       <p>p Papaya,Watermelon,Muskmelon,Pears,Grapes,Amla</p>
    <h4>Veggies:</h4>
    <p>Carrot,Cucumber,Corn,Tomato,Cabbage,Sweet Potato,Brocolli,</p>
       <p>Beetroot,Onion.</p>
    <h4>Boiled Cereals:</h4>
    <p>Chickpeas,Black Channa,Green Gram</p>
    </div>
    </div>
                        </div>
                    </div>
                

                
                    <div className="slide">
                        <div className="user-info">
                            <div className='Plan'>
        <img src={premium} alt=""style={{width: '450px',height:'250px'}}/> 
        
    </div>
    <div className='merge'>
    < div className='hello'>
    <div>
        <h2>PREMIUM PLAN</h2>
        <h3>Consists of 9-items</h3>
        <span>4-Fruits,2-Veggies,Whole Egg,1 Boiled cereals,Dry fruits&
            nuts</span>
            </div>
    </div>
    <div div classname='content'>
    <h4>Fruits:</h4>
    <p>Strawberry,Dragonfruit,Blueberry,Fig,Apricot,Kiwi,Guava,
        Pomegranate,Apple,Orange,Mosambi,Pineapple,Banana,Papaya,
        Watermelon,Muskmelon,Pears,Grapes,Amla</p>
    <h4>Veggies:</h4>
    <p>Carrot,Cucumber,Corn,Tomato,Cabbage,Sweet Potato,Brocolli,Beetroot,Onion</p>
    <h4>Boiled Cereals:</h4>
    <p>Chickpeas,Black Channa,Green Gram</p>
    <h4>Dry Fruits and Nuts</h4>
    <p>Dates,Badam,Cashew,Pista,Raisins,Walnut</p>
    </div>
    </div>
                        </div>
                    </div>
                
    
                    <div className="slide">
                        <div className="user-info">
                            <div className='Plan'>
        <img src={oatmeal} alt=""style={{width: '450px',height:'250px'}}/> 
         
    </div>
    <div className='merge'>
    < div className='hello'>
    <div>
        <h2>OATMEAL PLAN</h2>
        <h3>Consists of 6-8 items</h3>
    </div>
    </div>
    <div div classname='content'>
    <h4>Products Used:</h4>
    <p>Milk,Oats,Banana,Fruits,Honey,Dry fruits and Nuts,Chia-seeds,Mixed seeds.</p>
    <h4>Preparation:</h4>
    <p>Stored Overnight and served in the Morning</p>
    </div>
    </div>
                        </div>
                    </div>
                

            </ul>



            

         </div>
    </div>
    


  )
}

export default Plans
