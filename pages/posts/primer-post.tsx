import {NextPage} from "next";
import Link from 'next/link'
import Head from 'next/head'
import Layout from "../../components/Layout";

const PrimerPost: NextPage = () => {
    return <Layout home={false}>
        <Head>
            <title>Primer Post</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1>Primer Post</h1>
        <h2>
            <Link href="/">
                <a>Volver al home</a>
            </Link>
        </h2>
    </Layout>;
};

export default PrimerPost;
