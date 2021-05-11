import React, { useState } from 'react';
import { useToasts } from 'react-toast-notifications';
import Layout from '../layout';

const portalId = process.env.GATSBY_PORTAL_ID;
const formId = process.env.GATSBY_FORM_ID;
const ContactForm = () => {
    const { addToast } = useToasts();
    const [isLoading, setIsLoading] = useState(false);
    const [form, setForm] = useState({ name: '', email: '', message: "" })
    const { name, email, message } = form;
    const handleSubmit = e => {
        e.preventDefault()
        setIsLoading(true)

        fetch(
            `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
            {
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                method: 'post', body: JSON.stringify({

                    portalId,
                    formId,
                    fields: [
                        {
                            name: "email",
                            value: email,
                        },
                        {
                            name: "name",
                            value: name,
                        },
                        {
                            name: "message",
                            value: message,
                        },
                    ],
                })
            },
        )
            .then(function (response) {
                console.log(response)
                if (response.status !== 200) {
                    addToast("Failed to submit form", { appearance: "error" })
                }

            }).catch(err => {
                console.log({ err })
                addToast("Failed to submit form", { appearance: "error" })

            }).finally(() => {
                setIsLoading(false)
            })
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        })
    }
    return <div className="flex pageContainer mx-auto flex-grow justify-center my-3 sm:items-center w-full">
        <div className="px-2 md:px-0  max-w-lg w-full dark:text-white">
            <h1 className="text-3xl mb-3">Get in Touch</h1>
            <form action="#" method="POST">
                <div className="sm:shadow overflow-hidden sm:rounded-md">
                    <div className="dark:bg-gray-800 bg-white sm:p-6">
                        <div className="flex flex-col space-y-3">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium dark:text-gray-100 text-gray-700">
                                    Name
                            </label>
                                <input
                                    value={name}
                                    onChange={handleChange}
                                    type="text"
                                    name="name"
                                    id="name"
                                    autoComplete="given-name"
                                    className="mt-1 px-2 h-9 focus:ring-purple-500 focus:border-purple-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>



                            <div>
                                <label htmlFor="email_address" className="block text-sm font-medium dark:text-gray-100 text-gray-700">
                                    Email address
                                 </label>
                                <input
                                    value={email}
                                    onChange={handleChange}
                                    type="text"
                                    name="email"
                                    id="email_address"
                                    autoComplete="email"
                                    className="mt-1 px-2 h-9 focus:ring-purple-500 focus:border-purple-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>



                            <div>

                                <textarea
                                    value={message}
                                    onChange={handleChange}
                                    id="message"
                                    name="message"
                                    rows={5}
                                    className="shadow-sm px-2 py-2 focus:ring-purple-500 focus:border-purple-500 mt-1 block w-full sm:text-sm dark:border-gray-700 border-gray-300 rounded-md"
                                    placeholder="Enter your message here"

                                />
                            </div>




                        </div>
                    </div>
                    <div className="my-6 sm:my-0 sm:px-4 sm:py-3 dark:bg-gray-800 bg-gray-50 text-right ">
                        <button
                            disabled={isLoading}
                            type="submit"
                            onClick={handleSubmit}
                            className="flex w-full sm:inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                        >
                            {isLoading && <span className="animate-spin inline-block ring-2 h-6 w-6 rounded-full"></span>}
                        Submit
                   </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
}

export default function Contact() {

    return (
        <Layout slug="contact">
            <ContactForm />
        </Layout>
    )
}