import { hours } from '../data/data'

export default function ReportTable(props) {

    return (
        <>
            <table className="w-2/3 py-2 mx-auto my-8 bg-green-200">
                <thead>
                    <tr>
                        <th className="border border-black">Location</th>
                        {hours.map(hour => <th className="border border-black" key={hour}>{hour}</th>)}
                    </tr>
                </thead>
                <tbody>
                {props.stand.map((stand) => (
                    <tr className="pl-2 pr-2 bg-green-200 border border-black" key={stand.location}>
                        <td>{stand.location}</td>
                        {stand.hourly_sales.map(sales => <td key={sales} className="pl-2 pr-2 bg-green-200 border border-black">{sales}</td>)}
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )

}