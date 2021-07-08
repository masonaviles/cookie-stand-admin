import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'

export default function Overview() {

    return (
            <div>
                <Head>
                    <title>Cookie Stand Admin</title>
                </Head>
                <Header/>
                <main>
                    <h1>Overview</h1>
                </main>
                <Footer/>
            </div>
    )
}
