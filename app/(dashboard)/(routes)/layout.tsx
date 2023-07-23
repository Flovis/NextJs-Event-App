import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-full relative bg-slate-200">
            <div className="hidden h-full md:flex md:flex-col md:fixed md:inset-y-0  md:w-96 bg-gray-900">
                <Sidebar/>
            </div>
            <main className="md:pl-96">
            <Navbar/>

                Content
                {children}
            </main>
        </div>
        
    );
};

export default DashboardLayout;
