import React from 'react';
import Layout from '../layout';
import { StaticImage } from 'gatsby-plugin-image';


const TechStack = () => {
    const features = [
        {
            name: 'TailwindCSS',
            description:
                'A utility-first CSS framework. Styling of this website is completely done using TailwindCSS',
            icon: <StaticImage alt={`tailwind logo`} src={'../images/tailwind_logo.svg'} aria-hidden="true" />,
            url: "https://tailwindcss.com/"
        },
        {
            name: 'Snipcart',
            description:
                'Snipcart. Snipcart is a developer-first, HTML/JS-based shopping cart platform.It is used to provide add to cart functionality on this website.',
            icon: <StaticImage alt={`snipcart logo`} src={'../images/snipcart_logo.webp'} aria-hidden="true" />,
            url: "https://snipcart.com/"
        },
        {
            name: 'Gatsby',
            description:
                'Gatsby is a React-based open-source framework for creating websites and apps.',
            icon: <StaticImage alt={`gatsby logo`} src={'../images/gatsby_logo.svg'} aria-hidden="true" />,
            url: "https://www.gatsbyjs.com/"
        },
        {
            name: 'Printful',
            description:
                'Printful provides on demand print service which allows you to create your custom products. The products listed on this website are created in printful',
            icon: <StaticImage alt={`printful logo`} src={'../images/printful_logo.png'} aria-hidden="true" />,
            url: "https://www.gatsbyjs.com/"
        },
    ]
    return <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight dark:text-gray-100 text-gray-900 sm:text-4xl">
                Tech Stack Used
             </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Gatsby, Snipcart , Tailwind and Printful
            </p>
        </div>


        <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                {features.map((feature) => (
                    <div key={feature.name} className="relative">
                        <dt>
                            <a href={feature.url}>
                                <div className="hover:bg-purple-700 absolute flex items-center justify-center h-12 w-12 p-1 rounded-md dark:bg-gray-800 bg-white border-2 text-white">
                                    {feature.icon}
                                </div>
                                <p className="hover:text-purple-700 ml-16 text-lg leading-6 font-medium dark:text-gray-100 text-gray-900">{feature.name}</p>
                            </a>
                        </dt>
                        <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                    </div>
                ))}
            </dl>
        </div>
    </div>
}

export const RepoDetails = () => {
    const githubLink = process.env.GATSBY_GITHUB_REPO_LINK ?? '#';
    const coffeeUsername = process.env.GATSBY_COFFEE_USERNAME ?? '#';
    return <div className="mt-5 dark:text-white dark:bg-gray-700 bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <div>
                <h2 className="text-3xl font-extrabold tracking-tight dark:text-gray-100 text-gray-900 sm:text-4xl">
                    <span className="block" >Source Code and License</span>
                    <span className="block text-xl text-purple-600">Hosted on Github, MIT License</span>
                </h2>
                <div>
                    <span className="text-sm">
                        You can checkout the source code on github or  help me with my insomnia by buying me a coffee.
                    </span>
                </div>
            </div>

            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                <div className="inline-flex rounded-md shadow">
                    <a
                        href={githubLink}
                        className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
                    >
                        View Source Code
                     </a>
                </div>
                <div className="ml-3 inline-flex rounded-md shadow">
                    <a href={`https://www.buymeacoffee.com/${coffeeUsername}`} target="_blank">
                        <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=cybershadow&button_colour=6d28d9&font_colour=ffffff&font_family=Cookie&outline_colour=ffffff&coffee_colour=FFDD00" />
                    </a>
                </div>
            </div>
        </div>

    </div>
}
export default function AboutPage(props) {


    return (
        <Layout slug="about" pageTitle="About Us">
            <div className="py-12   ">
                <TechStack />
                <RepoDetails />
            </div>

        </Layout>
    );
}
