import { hours } from '../data/data'

export default function ReportTable() {

    return (
        <>
            <table className="w-2/3 py-2 mx-auto my-8 bg-green-200">
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