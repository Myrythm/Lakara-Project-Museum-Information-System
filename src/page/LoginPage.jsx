import { FcGoogle } from "react-icons/fc";
const LoginPage = () => {
  return (
    <div className="wrapper">
            <form action="">
                <h1>Selamat Datang!</h1>
                <div className="input-box">
                    <input type="text" placeholder="Email Anda" required />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Masukan Sandi" required />
                </div>

                <div className="remember-forgot">
                    <a href="/sandi" className="signup-link">Lupa Sandi?</a>
                    <a href="/daftar" className="signup-link">Daftar</a>
                </div>
                <button type="submit"><a href="">Masuk</a></button>
                <div class="line">
                    <span className="text-wrapper">atau</span>
                </div>
                <div className="overlap">
                    <FcGoogle className="icon" />
                    <div className="text-wrapper-2">Masuk dengan google</div>
                </div>
            </form>
        </div>
  )
}

export default LoginPage