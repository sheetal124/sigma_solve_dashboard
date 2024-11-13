import { Link } from "react-router-dom"
import { FileRoutes } from "../utilities/Core.const"
import { useState } from "react";

function Navigation() {
    const [activeLink, setActiveLink] = useState("");

    const handleSetActive = (route: string) => {
        setActiveLink(route);
    };
    return (
        <ul>
            <li className="mb-6">
                <Link to={FileRoutes.Dashboard}
                    onClick={() => handleSetActive(FileRoutes.Dashboard)}
                    className={`flex items-center ml-8 hover:text-black cursor-pointer ${activeLink === FileRoutes.Dashboard ? "text-black" : "text-gray-400"} `}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
                        className="icon icon-tabler icons-tabler-filled icon-tabler-layout-dashboard">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 3a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2zm0 12a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-2a2 2 0 0 1 2 -2zm10 -4a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2zm0 -8a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-2a2 2 0 0 1 2 -2z" /></svg>
                    <span className="ml-2">Dashboard</span>
                </Link>
            </li>
            <li className="mb-6">
                <Link to={FileRoutes.Agencies}
                    onClick={() => handleSetActive(FileRoutes.Agencies)}
                    className={`flex items-center ml-8 hover:text-black cursor-pointer ${activeLink === FileRoutes.Agencies ? "text-black" : "text-gray-400"} `}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-buildings"><path stroke="none"
                            d="M0 0h24v24H0z" fill="none" /><path d="M4 21v-15c0 -1 1 -2 2 -2h5c1 0 2 1 2 2v15" /><path d="M16 8h2c1 0 2 1 2 2v11" />
                        <path d="M3 21h18" /><path d="M10 12v0" /><path d="M10 16v0" /><path d="M10 8v0" /><path d="M7 12v0" /><path d="M7 16v0" /><path d="M7 8v0" /><path d="M17 12v0" /><path d="M17 16v0" /></svg>
                    <span className="ml-2">Agencies</span>
                </Link>
            </li>
            <li className="mb-6">
                <a className="flex items-center ml-8 text-gray-400 hover:text-black cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-chart-pie">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 3.2a9 9 0 1 0 10.8 10.8a1 1 0 0 0 -1 -1h-6.8a2 2 0 0 1 -2 -2v-7a.9 .9 0 0 0 -1 -.8" />
                        <path d="M15 3.5a9 9 0 0 1 5.5 5.5h-4.5a1 1 0 0 1 -1 -1v-4.5" /></svg>
                    <span className="ml-2">Division</span>
                </a>
            </li>
            <li className="mb-6">
                <a className="flex items-center ml-8 text-gray-400 hover:text-black cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-map-pin"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" /></svg>
                    <span className="ml-2">Location</span>
                </a>
            </li>
            <li className="mb-6">
                <a className="flex items-center ml-8 text-gray-400 hover:text-black cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-users-group">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                        <path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1" /><path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M17 10h2a2 2 0 0 1 2 2v1" /><path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M3 13v-1a2 2 0 0 1 2 -2h2" /></svg>
                    <span className="ml-2">Users</span>
                </a>
            </li>
        </ul>
    )
}

export default Navigation