import RegisterForm from "../../components/RegisterForm/RegisterForm";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";


const Register = () => {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <RegisterForm />
      </main>
      <Footer />
    </>
  );
};

export default Register

