
interface IProps {
    logo: any;
    graph: any;
    title: string;
    count: string;
    percentageChange: any;
}

function SingleCard({ logo, graph, title, count, percentageChange }: IProps) {
    return (
        <div className="bg-white rounded-lg p-5">
            <div className='flex items-center justify-between'>
                <img src={logo} className="w-10 h-auto rounded-md" alt="Logo" />
                <img src={graph} className="w-20 h-12" alt="Graph" />
            </div>
            <h4 className="text-lg mt-2">{title}</h4>
            <h3 className="text-2xl font-bold mb-8">{count}</h3>
            {/* <h6>{percentageChange}</h6> */}
        </div>
    )
}

export default SingleCard