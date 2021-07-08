import Head from 'next/head'
import CreateForm from '../components/create-form'
import ReportTable from '../components/report-table'
import { useState } from 'react'

export default function CookieStandAdmin() {

    const [stand, setStand] = useState({ "status": "pending" });

    function submitHandler(event) {
        event.preventDefault();
        const standInfo = {};
        standInfo.location = event.target.location.value;
        standInfo.minCustomers = parseInt(event.target.minCustomers.value);
        standInfo.maxCustomers = parseInt(event.target.maxCustomers.value);
        standInfo.avgCookies = parseFloat(event.target.avgCookies.value);

        setStand(standInfo);
    }

    return (
            <div>
                <Head>
                    <title>Cookie Stand Admin</title>
                </Head>
                <header className="p-6 bg-green-500">
                    <h1 className="text-2xl font-semibold">Cookie Stand Admin</h1>
                    <nav>
                        <a href="">Overview</a>
                    </nav>
                </header>
                <main>
                    <CreateForm/>
                    <ReportTable/>
                </main>
                <footer className="py-6 pl-6 bg-green-500">
                    <p>&copy; 2021</p>
                </footer>
            </div>
    )
}
