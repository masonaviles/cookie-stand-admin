import { hours } from '../data/data'

export default function ReportTable(props) {

    return (
        <>
            <table className="w-2/3 py-2 mx-auto my-8 bg-green-200">
                <thead>
                    <tr>
                        <th className="border border-black">Location</th>
                        {hours.map(item => <th className="border border-black" key={item}>{item}</th>)}
                    </tr>
                </thead>
                <tbody>
                {props.stand.map((stand) => (
                    <tr className="pl-2 pr-2 bg-green-500 border border-green" key={stand.location}>
                        <td>{stand.location}</td>
                        {stand.hours.map((hour) => <td className="pl-2 pr-2 bg-green-500 border border-green">{hour}</td>)}
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )

}