import '../styles/globals.css'
import '../src/components/App/Navbar/NavbarStyles.css';
import '../src/components/App/Footer/FooterStyles.css';
import '../src/components/Login/LoginStyles.css';
import '../src/components/Registrar/RegistrarStyles.css';
import '../src/components/App/HomeStyles.css';
import '../src/components/App/gridSistemasStyles.css';
import { AuthProvider } from "../src/context/AuthContext";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />  
    </AuthProvider>    
  );
}

export default MyApp
