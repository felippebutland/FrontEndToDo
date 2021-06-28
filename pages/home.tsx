import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import Home from "../src/components/App";

const AppPage = () => {
    return (
        <Home />
    );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const cookies = parseCookies(ctx);
    const token = cookies['next-token'];

    if(!token){
        return {
            redirect : {
                destination: '/',
                permanent: false
            }
        }
    }

    console.log(ctx.req.cookies)

    return {
        props: {}
    }
}

export default AppPage;