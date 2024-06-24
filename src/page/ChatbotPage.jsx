// import React from 'react'

// const ChatbotPage = () => {
//     return (
//         <div className='chat'>
//             <div className='chatbot'>
//                 <h1>SIlahkan Masukkan Saran dan Kritik Anda</h1>
//                 <div className='form-chatbot'>
//                     <label for="user-input">Masukan teks</label>
//                     <textarea id="user-input" rows="4" cols="50"></textarea>
//                     <button onclick="analyzeSentiment()">Submit</button>
//                 </div>
//                 <div id='response-container' className='response-container'></div>
//             </div>
//         </div>
//     )
// }

// export default ChatbotPage

import React, { useState } from 'react';

const ChatbotPage = () => {
    const [userInput, setUserInput] = useState('');
    const [response, setResponse] = useState('');

    const analyzeSentiment = () => {
        if (userInput.trim() === '') {
            alert('Masukkan teks untuk dianalisis.');
            return;
        }

        fetch('http://localhost:5000/analyze', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text: userInput })
        })
        .then(response => response.json())
        .then(data => {
            setResponse(data.sentiment_response);
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Gagal menghubungi server. Coba lagi nanti.');
        });
    };

    return (
        <div className='chat'>
            <div className='chatbot'>
                <h1>Silahkan Masukkan Saran dan Kritik Anda</h1>
                <div className='form-chatbot'>
                    <label htmlFor="user-input">Masukan teks</label>
                    <textarea
                        id="user-input"
                        rows="4"
                        cols="50"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                    ></textarea>
                    <button onClick={analyzeSentiment}>Submit</button>
                </div>
                <div id='response-container' className='response-container'>
                    {response && (
                        <>
                            <p><strong>Response:</strong></p>
                            <p>{response}</p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ChatbotPage;