import React from 'react'
import './Contact.css'
import wp from '../../assets/whatsapp.png'
import ig from '../../assets/insta.png'
import { Element } from 'react-scroll'


const Contact = () => {

   

  return (
    
    <div className='contact' >
       
        <div className='row'>
            <div className='col'>
                <form className="contact-form"
                action="https://formsubmit.co/sivapre04@gmail.com"
                method="POST"
                >
                    <div className="form-group ">
                                <img src={wp} alt=" "className='wp'/>
                                <img src={ig} alt=" "className='ig'/>
                        
                    <label htmlFor="emailFrom">Your Email:</label>
                        <input type="email" name="email" className="form-control" placeholder="e-mail"/>
                        <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea name="message"className="form-control" row ="4"placeholder="Message"></textarea>
                        </div>      
                </div>
                <button type="submit" class="btn btn-primary">SEND</button>
                </form>
            </div>
            
        </div>
      <div className='contact-info'></div>
            <div class="follow">
            
                
            </div>
    </div>
    

  )
}

export default Contact
