import { hours } from '../data/data'

export default function ReportTable() {

    return (
        <>
            <table className="">
            <thead>
                <tr>
                    <th className="border border-black">Location</th>
                    {hours.map(item => <th className="border border-black">{item}</th>)}
                </tr>
            </thead>
            <tbody>
                
            </tbody>
        </table>
        </>
    )

}