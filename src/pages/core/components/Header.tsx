import userImage from '../../../assets/images/user_pic.jpg'

export default function Header() {
    return (
        <header className='flex justify-between px-8 py-4'>
            <div>
                <h3 className='text-xl font-medium'>Dashboard</h3>
                <small className='text-gray-400'>4.45 pm 19 Jan 2022</small>
            </div>
            <div className='flex items-center'>
                <form className="flex items-center mr-2">
                    <label htmlFor="simple-search" className="sr-only">Search</label>
                    <div className="relative">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                        </div>
                        <input type="text" id="simple-search" className="text-gray-900 text-sm rounded-lg block w-96 pl-10 p-2.5" placeholder="Search" required />
                    </div>
                </form>
                <button className="inline-block relative bg-white rounded-lg p-2.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                    <span className="animate-ping absolute top-1 right-0.5 block h-1 w-1 rounded-full ring-2 ring-green-400 bg-green-600"></span>
                </button>
                <h6 className='text-sm font-bold mx-4'>Admin</h6>
                <figure>
                    <img src={userImage} className='w-10 h-11 object-cover rounded-lg' alt="User Profile" />
                </figure>
            </div>
        </header>
    )
}
