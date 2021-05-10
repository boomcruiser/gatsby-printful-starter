import React from "react"
import { ToastProvider } from "react-toast-notifications"
import Header from "../components/header"
import HeaderAlert from "../components/headerAlert"
import ThemeProvider from "../context/ThemeProvider";
;
const Layout: React.FC<{ slug: string, className?: string }> = ({ children, slug, className }) => {



    return <ThemeProvider>
        <ToastProvider>
            <Header slug={slug} />
            <HeaderAlert />
            <main className={`bg-white dark:bg-gray-900 ${className ?? ''}`}>

                {children}
            </main>
        </ToastProvider>
    </ThemeProvider>
}

export default Layout;