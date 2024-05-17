const SandiPage = () => {
  return (
    <div className="wrapper-1">
            <form action="">
                <h1>Lupa Kata Sandi ?</h1>
                <h5>Masukan alamat email anda untuk mengatur ulang kata sandi!</h5>
                <div className="input-box">
                    <input type="email" placeholder="Masukan alamat email" required />
                </div>
                <button type="submit"><a href="/login">Atur ulang kata sandi</a></button>
            </form>
        </div>
  )
}

export default SandiPage