interface IProps {
    locationID: string;
    locationName: string;
    totalLeads: string;
    social: string
}
function TableData({ locationID, locationName, totalLeads, social }: IProps) {
    return (
        <tr>
            <td className="py-2.5 text-center"><input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 border border-gray-300 bg-transparent rounded-xl" /></td>
            <td className="py-2.5 text-center">{locationID}</td>
            <td className="py-2.5 text-center">{locationName}</td>
            <td className="py-2.5 text-center">{totalLeads}</td>
            <td className="py-2.5 text-center">{social}</td>
        </tr>
    )
}

export default TableData