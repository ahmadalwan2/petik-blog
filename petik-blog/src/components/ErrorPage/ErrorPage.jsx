import { NavLink, useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h3>404 Halaman tidak ditemukan Rebit!</h3>
      <p>
        Oopps... Halaman yang kamu cari tidak ada
        Rebittttttttttttttttttttttttttttttttttttttttttttttttt
      </p>
      <NavLink to={"/"}>Home</NavLink>
      <button onClick={() => navigate(-1)}>Kembali</button>
    </div>
  );
};

export default ErrorPage;
