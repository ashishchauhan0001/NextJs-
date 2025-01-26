import React from "react";
import Link from 'next/link';
import Increment from "@/component/counter";
//  this will run everytime and wrap with the current folder's page.jsx file so that both the files will see together.
import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";

const DashboardLayout = (props) => {

    return (
        <div>
            <nav className="bg-black text-white py-4 px-5 flex justify-between items-center">
                <h3 className="text-xl">Logo</h3>
                <ul className="flex items-center gap-10"> 
                    <li className="hover:bg-white hover:rounded-lg hover:text-black hover:p-1 hover:shadow-lg transition duration-300 ease-in-out"> Home</li>
                    <li className="hover:bg-white hover:rounded-lg hover:text-black hover:p-1 hover:shadow-lg transition duration-300 ease-in-out">AboutUs</li>
                    <li className="hover:bg-white hover:rounded-lg hover:text-black hover:p-1 hover:shadow-lg transition duration-300 ease-in-out">ContactUs</li>
                    <li className="hover:bg-white hover:rounded-lg hover:text-black hover:p-1 hover:shadow-lg transition duration-300 ease-in-out"><LogoutLink>Log out</LogoutLink></li>
                </ul>
            </nav>
            <div className="flex">
                <div className="text-white h-screen bg-black w-[15vw] py-16 static">
                    <ul className="flex flex-col gap-6 text-xl px-2">
                        <li className="hover:bg-white hover:rounded-lg hover:text-black hover:p-1 hover:shadow-lg transition duration-300 ease-in-out"><Link href="/dashboard">Dashboard</Link></li>
                        <li className="hover:bg-white hover:rounded-lg hover:text-black hover:p-1 hover:shadow-lg transition duration-300 ease-in-out"><Link href="/dashboard/todos">To Dos</Link></li>
                        <li className="hover:bg-white hover:rounded-lg hover:text-black hover:p-1 hover:shadow-lg transition duration-300 ease-in-out"><Link href="/dashboard/profile">View Profile</Link></li>
                        <li className="hover:bg-white hover:rounded-lg hover:text-black hover:p-1 hover:shadow-lg transition duration-300 ease-in-out"><Link href="/dashboard/progress">Progress</Link></li>
                        <li className="hover:bg-white hover:rounded-lg hover:text-black hover:p-1 hover:shadow-lg transition duration-300 ease-in-out"><Link href="/dashboard/payments">Payments</Link></li>
                    </ul>
                </div>
                <Increment/> 
                <div className="py-4 px-4 max-h-screen overflow-auto">{props.children}</div>
            </div>
        </div>
    );
};

export default DashboardLayout;
