import React from 'react';
import { Link } from 'react-router-dom'
const Footer = () => (
<footer className="footer relative pt-1">
    <div className="container mx-auto px-6">

        <div className="sm:flex sm:mt-8">
            <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
                <div className="flex flex-col">
                    <span className="my-2"><p className="text-white-700  text-md hover:text-black-500 footer-title">HABITAT</p></span>
                    <span className="my-2"><p className="text-white-700  text-md hover:text-black-500">123 1st St</p></span>
                    <span className="my-2"><p className="text-white-700  text-md hover:text-black-500">San Diego CA</p></span>
                    <span className="my-2"><p className="text-white-700  text-md hover:text-black-500">92101</p></span>
                </div>
                <div className="flex flex-col">
                    <span className="my-2"><a href="tel:619-123-1234" className="text-white-700 text-md hover:text-black-500">619-123-1234</a></span>
                    <span className="my-2"><a href="mailto:" className="text-white-700 text-md hover:text-black-500">contact@habitat.com</a></span>
                </div>
                <div className="flex flex-col">
                    <span className="my-2"><a href="https://tomasespinoza.me/projects/habitat" className="text-white-700  text-md hover:text-black-500">Home</a></span>
                    <span className="my-2"><Link to="/" className="text-white-700  text-md hover:text-black-500">Our Listings</Link></span>
                    <span className="my-2"><a href="https://tomasespinoza.me/projects/habitat" className="text-white-700  text-md hover:text-black-500">Where We Are</a></span>
                    <span className="my-2"><a href="https://tomasespinoza.me/projects/habitat" className="text-white-700  text-md hover:text-black-500">About</a></span>
                </div>
            </div>
        </div>
    </div>
    <div className="container mx-auto px-6 copyright">
        <div className="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
            <div className="sm:w-2/3 text-center py-6">
                <p className="text-sm text-white-700mb-2">
                    © 2021 Habitat.com
                </p>
            </div>
        </div>
    </div>
</footer>
)

export default Footer;