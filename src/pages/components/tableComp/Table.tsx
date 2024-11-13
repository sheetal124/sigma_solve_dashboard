import { record1, record2, record3 } from "../utilities/table.const"
import Dropdown from "./Dropdown"
import TableData from "./TableData"

function Table() {
    return (
        <section className="mx-8 bg-white p-3 rounded-lg mt-6">
            <header className='flex justify-between'>
                <div>
                    <h3 className='text-xl font-medium'>Location Leads List</h3>
                    <small className='text-gray-400'>lorem ipsum team dolor sit amet</small>
                </div>
                <form className="flex items-center mr-2">
                    <label htmlFor="simple-search" className="sr-only">Search</label>
                    <div className="relative">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                        </div>
                        <input type="text" id="simple-search" className="text-gray-900 border border-gray-300 text-sm rounded-lg block w-96 pl-10 p-2.5" placeholder="Search" required />
                    </div>
                </form>
            </header>
            <div className="flex items-center justify-between">
                <div className="mt-3">
                    <Dropdown title="Division" options={['Option 1', 'Option 2', 'Option 3']} />
                    <Dropdown title="Location" options={['Option 1', 'Option 2', 'Option 3']} />
                    <Dropdown title="Feb 23 - Mar 22, 2023" options={['Option 1', 'Option 2', 'Option 3']} />
                </div>
                <button className="flex items-center px-5 py-2 text-blue-700 bg-blue-50 border border-blue-600 rounded-lg focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-clipboard-text text-gray-800 mr-2"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" /><path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" /><path d="M9 12h6" /><path d="M9 16h6" /></svg>
                    <span className="text-gray-800">Export</span>
                </button>
            </div>
            <section className="my-5">
                <table className="bg-white p-2 rounded-lg border border-gray-400 w-full overflow-hidden">
                    <thead className="bg-gray-700 text-white rounded-lg">
                        <tr>
                            <th className="py-2.5 rounded-l-lg"> <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 border border-gray-300 bg-transparent rounded-xl" /></th>
                            <th className="py-2.5">Location Id</th>
                            <th className="py-2.5">Location Name</th>
                            <th className="py-2.5">Total leads</th>
                            <th className="py-2.5 rounded-r-lg">From Social</th>
                        </tr>
                    </thead>
                    <tbody>
                        <TableData
                            locationID={record1.locationID}
                            locationName={record1.locationName}
                            totalLeads={record1.totalLeads}
                            social={record1.social}
                        />
                        <TableData
                            locationID={record2.locationID}
                            locationName={record2.locationName}
                            totalLeads={record2.totalLeads}
                            social={record2.social}
                        />
                        <TableData
                            locationID={record3.locationID}
                            locationName={record3.locationName}
                            totalLeads={record3.totalLeads}
                            social={record3.social}
                        />
                    </tbody>
                </table>
            </section>
        </section>
    )
}

export default Table