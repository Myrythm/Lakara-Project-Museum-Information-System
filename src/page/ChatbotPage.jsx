import React from 'react'

const ChatbotPage = () => {
    return (
        <div className='chat'>
            <div className='chatbot'>
                <h1>SIlahkan Masukkan Saran dan Kritik Anda</h1>
                <div className='form-chatbot'>
                    <label for="user-input">Masukan teks</label>
                    <textarea id="user-input" rows="4" cols="50"></textarea>
                    <button onclick="analyzeSentiment()">Submit</button>
                </div>
                <div id='response-container' className='response-container'></div>
            </div>
        </div>
    )
}

export default ChatbotPage