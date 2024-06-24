from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import random

app = Flask(__name__)
CORS(app)  # Untuk mengaktifkan CORS (Cross-Origin Resource Sharing) untuk semua rute

# URL dan header untuk mengakses Hugging Face API
API_URL = "https://api-inference.huggingface.co/models/mdhugol/indonesia-bert-sentiment-classification"
headers = {"Authorization": "Bearer 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"}

# Fungsi untuk melakukan query ke Hugging Face API
def query(payload):
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.json()

# Daftar respons berdasarkan sentimen
def get_random_response(sentiment):
    positive_responses = [
        "Terima kasih atas umpan balik positif Anda, ini sangat berarti bagi kami!",
        "Kami sangat senang mendengar tentang pengalaman positif Anda, terima kasih telah membagikannya!",
        "Umpan balik Anda telah membuat hari kami menyenangkan, kami berterima kasih atas kata-kata baik Anda!",
        "Terima kasih telah meluangkan waktu untuk membagikan umpan balik positif Anda kepada kami, kami sangat menghargainya!",
        "Kami sangat senang mengetahui bahwa Anda puas dengan layanan kami, terima kasih atas dukungan Anda!",
        "Umpan balik positif Anda memotivasi kami untuk terus memberikan layanan yang sangat baik, terima kasih telah memotivasi kami!",
        "Mendengar tentang pengalaman positif Anda memberi kami kegembiraan yang luar biasa, terima kasih telah membuat hari kami lebih cerah!",
        "Kami berterima kasih atas umpan balik positif Anda, ini meyakinkan kami bahwa kami berada di jalur yang benar!"
    ]

    neutral_responses = [
        "Terima kasih telah berbagi sudut pandang Anda. Ini memberi kami wawasan yang berharga dalam memahami situasi ini.",
        "Saya menghargai masukan Anda mengenai masalah ini. Setiap kontribusi Anda sangat berharga bagi kami dalam mengambil keputusan yang tepat.",
        "Saya memahami apa yang Anda katakan. Komunikasi terbuka dan jujur seperti ini sangat membantu dalam mencapai pemahaman yang lebih baik.",
        "Itu sudut pandang yang menarik. Memperoleh wawasan dari perspektif yang berbeda adalah kunci untuk mengembangkan pemahaman yang komprehensif.",
        "Terima kasih telah memberi tahu saya pemikiran Anda."
    ]

    negative_responses = [
        "Kami menyesal mendengar bahwa Anda merasa tidak nyaman. Kami akan berupaya untuk meningkatkan kualitas layanan kami.",
        "Kami meminta maaf atas segala ketidaknyamanan. Kami berjanji untuk meningkatkan kualitas layanan kami.",
        "Maaf jika Anda merasa seperti ini. Kami akan bekerja keras untuk meningkatkan kualitas layanan kami.",
        "Kami menyesal mendengar bahwa Anda tidak nyaman. Kami akan melakukan yang terbaik untuk memperbaiki situasi.",
        "Kami meminta maaf atas situasi ini. Kami bertekad untuk meningkatkan kualitas layanan kami."
    ]

    if sentiment == 'positive':
        return random.choice(positive_responses)
    elif sentiment == 'neutral':
        return random.choice(neutral_responses)
    elif sentiment == 'negative':
        return random.choice(negative_responses)
    else:
        return "Sentimen tidak dikenal. Terima kasih atas umpan balik Anda."

# Mapping label dari model ke kategori sentimen
label_index = {'LABEL_0': 'positive', 'LABEL_1': 'neutral', 'LABEL_2': 'negative'}

# Endpoint untuk menerima POST request dan memberikan respon sentimen
@app.route('/analyze', methods=['POST'])
def analyze():
    data = request.json
    text = data.get('text', '')
    
    # Query model untuk mendapatkan hasil sentimen
    result = query({"inputs": text})
    
    # Memproses hasil dari model
    if isinstance(result, list) and len(result) > 0 and isinstance(result[0], list) and len(result[0]) > 0:
        highest_score_label = max(result[0], key=lambda x: x['score'])['label']
        sentiment = label_index.get(highest_score_label, 'unknown')
        response = get_random_response(sentiment)
    else:
        response = "Gagal mendapatkan hasil sentimen dari model."
    
    # Mengembalikan respon dalam bentuk JSON
    return jsonify({"sentiment_response": response})

# Menjalankan aplikasi Flask
if __name__ == '__main__':
    app.run(debug=True)
