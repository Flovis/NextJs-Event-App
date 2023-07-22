import Navbar from "@/components/Navbar";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-full relative">
            <div className="hidden h-full md:flex md:flex-col md:fixed md:inset-y-0  md:w-72 bg-gray-900">
                <div>sideBar</div>
            </div>
            <main className="md:pl-72">
            <Navbar/>

                Content
                {children}
            </main>
        </div>
        
    );
};

export default DashboardLayout;
