import React, { useRef } from "react";
import './MyForm.scss'
import { sendForm } from "@emailjs/browser";

const MyForm = () => {

    // const [name, setName] = useState('');
    // const [mail, setMail] = useState('');
    // const [message, setMessage] = useState('');

    // const inputName = (e) => {
    //     setName(e.target.value)
    // }

    // const inputMail = (e) => {
    //     setMail(e.target.value)
    // }

    // const inputMessage = (e) => {
    //     setMessage(e.target.value)
    // }

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        sendForm('gmail', 'music_and_life', form.current, 'WLOwrXTxbuLY3xrxH')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset();
    }

    return (
        <form ref={form} className="contact__form" encType="text/plain" onSubmit={sendEmail}>
            <label htmlFor="name">Name:</label>
            <input type='text' name="name" required />    
            <label htmlFor="email">Email:</label>
            <input type='email' name='email' required/>    
            <label>Your message:</label>
            <textarea rows='1' required name="message"></textarea>
            <div className="btn-container">
                <button className="btn" type="submit">Send me</button>
            </div>                    
        </form>
    )
}

export default MyForm;