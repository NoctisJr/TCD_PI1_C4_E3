import LoginForm from "../../components/LoginForm/LoginForm";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Login = () => {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <LoginForm />
      </main>
      <Footer />
    </>
  );
};

export default Login;
