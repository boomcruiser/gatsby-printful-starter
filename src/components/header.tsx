import React, { Fragment, ReactNode, useContext } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, MoonIcon, ShoppingCartIcon, SunIcon, UserIcon, XIcon } from '@heroicons/react/outline'
import { SnipcartContext } from "gatsby-plugin-snipcart-advanced/context";
import { Link } from 'gatsby';
import { ThemeContext } from '../context/ThemeProvider';
import { StaticImage } from 'gatsby-plugin-image';

const navigation = [{ name: 'Home', slug: "" }, { name: 'About Us', slug: 'about' }, { name: 'Blog', slug: 'blog' }, { name: 'Contact Us', slug: 'contact' }]
const profile = ['Settings', 'Sign out']

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
// 
const NavMenu: React.FC<{ items: string[] | ReactNode[], accessibilityText: string }> = ({ items, children, accessibilityText }) => {

    return <Menu as="div" className="ml-3 relative">
        {({ open }) => (
            <>
                <div>
                    <Menu.Button className="max-w-xs bg-gray-100 dark:bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span className="sr-only">{accessibilityText}</span>

                        {children}
                    </Menu.Button>
                </div>
                <Transition
                    show={open}
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items
                        static
                        className="z-50 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    >
                        {items.map((item) => (
                            <Menu.Item key={item}>
                                {({ active }) => (
                                    <a className={classNames(
                                        active ? 'bg-gray-100' : '',
                                        'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                    >
                                        {item}
                                    </a>

                                )}
                            </Menu.Item>
                        ))}
                    </Menu.Items>
                </Transition>
            </>
        )}
    </Menu>
}

export default function Header({ slug }: { slug: string }) {
    const snipcartContext: any = useContext(SnipcartContext);
    const { state } = snipcartContext;
    // const location = useLocation();

    // console.log({ snipcartContext })
    const { userStatus, cartQuantity } = state;
    // console.log({ userStatus })
    const { dark, setDark } = useContext(ThemeContext)
    return (
        <>
            <Disclosure as="nav" className="bg-gray-100 dark:bg-gray-800">
                {({ open }) => (
                    <>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex items-center flex-grow justify-between h-16">
                                <div className="flex items-center flex-grow">
                                    <div className="flex items-center">

                                        <StaticImage
                                            placeholder="tracedSVG"
                                            className="h-14 w-14 mt-1"
                                            src="../images/GetDatShiLogoLarge.svg"
                                            alt="Site Logo"
                                        />
                                        {/* doesn't look good , might change later */}
                                        {/* <div className="text-2xl text-purple-700">

                                            GetDatShii
                                        </div> */}

                                    </div>
                                    <div className="flex-grow hidden md:block">
                                        <div className="ml-10 flex items-baseline space-x-4">
                                            {navigation.map((item) =>
                                                slug == item.slug ? (
                                                    <Fragment key={item.slug}>
                                                        {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                                                        <Link to={"/" + item.slug} className="bg-gray-200 dark:bg-gray-900 dark:text-white px-3 py-2 rounded-md text-sm font-medium">
                                                            {item.name}
                                                        </Link>
                                                    </Fragment>
                                                ) : (
                                                    <Link
                                                        key={item.slug}
                                                        to={"/" + item.slug}
                                                        className="text-gray-500 hover:text-black dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                                    >
                                                        {item.name}
                                                    </Link>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="hidden md:block">
                                    <div className="ml-4 flex items-center md:ml-6">

                                        <div className="space-x-3 inline-flex items-center">
                                            {userStatus !== 'SignedOut' && <>
                                                <NavMenu items={['All Caught Up']} accessibilityText="View notifications" >

                                                    <BellIcon className="h-6 w-6 text-black dark:text-white" aria-hidden="true" />

                                                </NavMenu>
                                                <button className="snipcart-customer-signin ml-3">
                                                    <UserIcon className="h-6 w-6 text-black dark:text-white" aria-hidden="true" />
                                                </button>

                                            </>
                                            }
                                            {userStatus === 'SignedOut' &&
                                                <button className="snipcart-customer-signin inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                                                    Log in
                                                </button>


                                            }
                                            <button className="inline-flex items-center space-x-1 text-black dark:text-white snipcart-checkout">
                                                <ShoppingCartIcon className="h-6 w-6 " aria-hidden="true" />
                                                <span>{cartQuantity}</span>
                                            </button>
                                            <button onClick={() => {
                                                setDark(!dark);
                                            }} className="inline-flex items-center space-x-1 text-black dark:text-white">
                                                <MoonIcon className="opacity-100 absolute dark:opacity-0 h-6 w-6 transition ease-in duration-500" aria-hidden="true" />
                                                <SunIcon className="opacity-0 absolute dark:opacity-100 h-6 w-6 transition ease-in duration-500" aria-hidden="true" />
                                            </button>
                                        </div>

                                    </div>

                                </div>
                                <div className="-mr-2 flex md:hidden">
                                    {/* Mobile menu button */}
                                    <Disclosure.Button className="bg-gray-100 dark:bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-400 dark:hover:text-white hover:text-black dark:hover:bg-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-300 dark:focus:ring-offset-gray-800 focus:ring-white">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                    <button className="inline-flex items-center space-x-1 text-black dark:text-white snipcart-checkout">
                                        <ShoppingCartIcon className="h-6 w-6 " aria-hidden="true" />
                                        <span>{cartQuantity}</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="md:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                {navigation.map((item, itemIdx) =>
                                    itemIdx === 0 ? (
                                        <Fragment key={item.slug}>
                                            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                                            <Link to={"/" + item.slug} className="bg-gray-200 text-black dark:bg-gray-900 dark:text-white block px-3 py-2 rounded-md text-base font-medium">
                                                {item.name}
                                            </Link>
                                        </Fragment>
                                    ) : (
                                        <Link
                                            key={item.slug}
                                            to={'/' + item.slug}
                                            className="dark:text-gray-300 text:gray-700 hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                        >
                                            {item.name}
                                        </Link>
                                    )
                                )}
                            </div>
                            <div className="pt-4 pb-3 mb-2 border-t border-gray-700">
                                <div className="flex flex-col justify-center space-y-2   px-5">

                                    <button className="flex-grow py-3 px-3 snipcart-customer-signin justify-between flex">
                                        <UserIcon className="h-6 w-6 ring-offset-gray-400 dark:ring-offset-gray-800 text-black dark:text-white" aria-hidden="true" />
                                        <div className="text-base font-medium leading-none text-black dark:text-white">My Account</div>
                                    </button>
                                    <button onClick={() => {
                                        if (document.documentElement.classList.contains('dark')) {

                                            document.documentElement.classList.remove('dark')
                                        } else {
                                            document.documentElement.classList.add('dark')
                                        }
                                    }} className="flex py-3 px-3 justify-between items-center space-x-1 text-black dark:text-white">
                                        <div className="h-6 w-6">

                                            <SunIcon className="opacity-0 absolute dark:opacity-100 h-6 w-6 transition ease-in duration-500" aria-hidden="true" />
                                            <MoonIcon className="opacity-100 absolute dark:opacity-0 h-6 w-6 transition ease-in duration-500" aria-hidden="true" />
                                        </div>
                                        <div className="text-base font-medium leading-none text-black dark:text-white dark:hidden">Dark Mode</div>
                                        <div className="text-base font-medium leading-none text-black dark:text-white dark:inline-flex hidden">Light Mode</div>
                                    </button>




                                </div>

                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>


        </>
    )
}