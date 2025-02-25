import React from 'react'

const Navbar = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex items-center justify-between">
            <h1 className="text-3xl font-bold">My Image Finder</h1>
            <nav>
                <ul className="flex space-x-6">
                    <li><a href="#" className="hover:text-gray-200">Home</a></li>
                    <li><a href="#" className="hover:text-gray-200">Explore</a></li>
                    <li><a href="#" className="hover:text-gray-200">About</a></li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Navbar
