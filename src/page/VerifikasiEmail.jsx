import { Link } from "react-router-dom"


const VerifikasiEmail = () => {
    return (
      <div className="login-page">
        <div className="wrapper-1">
              <form action="">
                  <h1>Email terkirim!</h1>
                  <h5>Kami  sudah mengirim surel yang berisi tautan untuk mereset kata sandi Anda!</h5>
                  <Link to="/verifikasiemail"><button type="submit">Kirim ulang</button></Link>
                  <Link to="/login" className="text-decoration-none d-flex justify-content-center " style={{ color: "#EEC19F" }}><h5 className="mt-3">Kembali Ke Halaman Login</h5></Link>
              </form>
          </div>
      </div>
    )
  }
  
  export default VerifikasiEmail