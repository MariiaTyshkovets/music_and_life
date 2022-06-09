import React, { useState } from "react";
import './MyForm.scss'

const MyForm = () => {

    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [message, setMessage] = useState('');

    const inputName = (e) => {
        setName(e.target.value)
    }

    const inputMail = (e) => {
        setMail(e.target.value)
    }

    const inputMessage = (e) => {
        setMessage(e.target.value)
    }

    return (
        <>
        <form className="contact__form" encType="text/plain">
            <label htmlFor="name">Name:</label>
            <input value={name} type='text' name="name" required onChange={inputName}/>    
            <label htmlFor="email">Email:</label>
            <input value={mail} type='email' name='email' required onChange={inputMail}/>    
            <label>Your message:</label>
            <textarea value={message} rows='1' required onChange={inputMessage}></textarea>
            <div className="btn-container">
                <button className="btn" type="submit"><a href={`mailto:maria15021996@gmail.com?subject=message_from_music_site&body=${message}`}>Send me</a></button>
            </div>                    
        </form>
        </>
    )
}

export default MyForm;