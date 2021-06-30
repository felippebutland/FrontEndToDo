import '../styles/globals.css'
import '../src/components/App/Navbar/NavbarStyles.css';
import '../src/components/App/Footer/FooterStyles.css';
import '../src/components/Login/LoginStyles.css';
import '../src/components/Registrar/RegistrarStyles.css';
import '../src/components/App/HomeStyles.css';
import '../src/components/ButtonStyles.css';
import Head from 'next/head'
import { AuthProvider } from "../src/context/AuthContext";
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import NProgress from 'nprogress'


function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleStart = (url) => {
      NProgress.start()
    }
    const handleStop = () => {
      NProgress.done()
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])

  return (
    
    <AuthProvider>
      <Head>
        <link rel="stylesheet" type="text/css" href="/progress-bar.css" />
      </Head>
      <Component {...pageProps} />  
    </AuthProvider>    
  );
}

export default MyApp
