const DaftarPage = () => {
    return (
    <div className="wrapper">
            <form action="">
                <h1>Halaman Daftar</h1>
                <div className="input-box">
                    <input type="text" placeholder="Nama" required />
                </div>
                <div className="input-box">
                    <input type="email" placeholder="Masukan email anda" required />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Masukan kata sandi anda" required />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Masukan ulang kata sandi" required />
                </div>
                <button type="submit"><a href="/login">Daftar</a></button>
                <div className="bergabung-link">
                    <p>Sudah punya akun? <a href="/login">Bergabung</a></p>
                </div>
            </form>
        </div>
    )
}

export default DaftarPage