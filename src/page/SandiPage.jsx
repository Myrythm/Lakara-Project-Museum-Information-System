import { Link } from "react-router-dom"

const SandiPage = () => {
  return (
    <div className="login-page">
      <div className="wrapper-1">
            <form action="">
                <h1>Lupa Kata Sandi ?</h1>
                <h5>Masukan alamat email anda untuk mengatur ulang kata sandi!</h5>
                <div className="input-box">
                    <input type="email" placeholder="Masukan alamat email" required />
                </div>
                <Link to="/verifikasiemail"><button type="submit"><a href="/login">Atur ulang kata sandi</a></button></Link>
            </form>
        </div>
    </div>
  )
}

export default SandiPage