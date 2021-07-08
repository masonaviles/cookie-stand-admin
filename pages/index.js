import Head from 'next/head'
import Header from '../components/header'
import CreateForm from '../components/create-form'
import ReportTable from '../components/report-table'
import Footer from '../components/footer'
import { useState } from 'react'

export default function CookieStandAdmin() {

    const [stand, setStand] = useState([]);

    function submitHandler(event) {
        event.preventDefault();
        const standInfo = {};
        standInfo.location = event.target.location.value;
        standInfo.minCustomers = parseInt(event.target.minCustomers.value);
        standInfo.maxCustomers = parseInt(event.target.maxCustomers.value);
        standInfo.avgCookies = parseFloat(event.target.avgCookies.value);

        setStand([...stand, standInfo]);
    }

    return (
            <div>
                <Head>
                    <title>Cookie Stand Admin</title>
                </Head>
                <Header/>
                <main>
                    <CreateForm submitHandler={submitHandler}/>
                    <ReportTable stand={stand}/>
                </main>
                <Footer/>
            </div>
    )
}
