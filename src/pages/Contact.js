import React from 'react'
import '../styles/Contact.css'
const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact_background">

        </div>
        <div className="form_container">
            <form className="form">
                <label>
                    <span>Nome</span>
                    <input type="text" placeholder='Seu nome' name='nome' required />
                </label>
                <label>
                    <span>Email</span>
                    <input type="email" placeholder='Seu email' name='elamil' required />
                </label>
                <label className='comment'>
                    <span>Mensagem</span>
                    <textarea name="mensagem" placeholder='Deixe sua mensagem'></textarea>
                </label>

                <button className='btn'>Enviar</button>
            </form>
        </div>
    </div>
  )
}

export default Contact