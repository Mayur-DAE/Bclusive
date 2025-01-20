"use client";

export const Footer = () => {
    return (
        <footer className="p-4 md:p-6">
            <div className="mb-10">
                <p className="text-5xl lg:text-6xl font-semibold mb-4">Let&apos;s Keep in Touch with Us!</p>
                <p className="text-lg text-primary-dark opacity-75 ">
                    Contact us today to explore the possibilities of our dynamic
                    co-working space. Your ideal workspace is just a message or call
                    away with us.
                </p>
            </div>
            <ul className="mb-8 font-semibold text-lg">
                <li className=" mb-2">
                    +123 456 7890
                </li>
                <li className="mb-2">
                    workspace@mailservice.com
                </li>
                <li className="mb-2">
                    123 Wanderer Street, Any State, City
                </li>
            </ul>

            <div className="grid grid-cols-1 md:grid-cols-3 text-lg">
                <div>
                    <p className="font-bold mb-4">Company</p>
                    <ul className="mb-6 text-gray-500">
                        <li>
                            About Us
                        </li>
                        <li>
                            Careers
                        </li>
                        <li>
                            Careers
                        </li>
                    </ul>
                </div>
                <div>
                    <p className="font-bold mb-4">Community</p>
                    <ul className="mb-6 text-gray-500">
                        <li>
                            Event
                        </li>
                        <li>
                            Stories
                        </li>
                        <li>
                            Partnership
                        </li>
                    </ul>
                </div>
                <div>
                    <p className="font-bold mb-6">Resources</p>
                    <ul className="mb-6 text-gray-500">
                        <li>
                            Blog
                        </li>
                        <li>
                            FAQ
                        </li>
                        <li>
                            Support
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
