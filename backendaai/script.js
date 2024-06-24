function analyzeSentiment() {
    // Ambil teks input dari textarea
    var userInput = document.getElementById('user-input').value.trim();

    if (userInput === '') {
        alert('Masukkan teks untuk dianalisis.');
        return;
    }

    // Kirim permintaan POST ke server Flask
    fetch('http://localhost:5000/analyze', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: userInput })
    })
    .then(response => response.json())
    .then(data => {
        // Tampilkan respons dari chatbot di response-container
        var responseContainer = document.getElementById('response-container');
        responseContainer.innerHTML = '<p><strong>Response:</strong></p>';
        responseContainer.innerHTML += `<p>${data.sentiment_response}</p>`;
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Gagal menghubungi server. Coba lagi nanti.');
    });
}
