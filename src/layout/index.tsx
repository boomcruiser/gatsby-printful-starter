import React from "react"
import { ToastProvider } from "react-toast-notifications"
import Header from "../components/header"
import HeaderAlert from "../components/headerAlert"
import ThemeProvider from "../context/ThemeProvider";
import { Helmet } from 'react-helmet'
const Layout: React.FC<{ slug: string, className?: string, pageTitle?: string }> = ({ children, slug, className, pageTitle }) => {



    return <ThemeProvider>
        <ToastProvider>
            <Helmet>
                <title>{pageTitle || ''}</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <Header slug={slug} />
            <HeaderAlert />
            <main className={`bg-white dark:bg-gray-900 ${className ?? ''}`}>

                {children}
            </main>
        </ToastProvider>
    </ThemeProvider>
}

export default Layout;