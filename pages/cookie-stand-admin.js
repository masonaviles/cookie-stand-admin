import Head from 'next/head'
import Header from '../components/header'
import CreateForm from '../components/create-form'
import ReportTable from '../components/report-table'
import Blank from '../components/blank'
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

        standInfo.hourly_sales = [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36];
        setStand([...stand, standInfo]);
    }

    let tableView;
    if (stand.length > 0) {
        tableView = <ReportTable stand={stand}/>;
    } else {
        tableView  = <Blank/>;
    }

    return (
            <div>
                <Head>
                    <title>Cookie Stand Admin</title>
                </Head>
                <Header/>
                <main>
                    <CreateForm submitHandler={submitHandler}/>
                    {tableView}
                </main>
                <Footer numOfLocations={stand.length}/>
            </div>
    )
}
