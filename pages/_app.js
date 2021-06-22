import '../styles/globals.css'
import '../src/components/App/Navbar/NavbarStyles.css';
import '../src/components/App/Footer/FooterStyles.css';
import '../src/components/Login/LoginStyles.css';
import '../src/components/Registrar/RegistrarStyles.css';
import '../src/components/App/HomeStyles.css';
import '../src/components/App/gridSistemasStyles.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
