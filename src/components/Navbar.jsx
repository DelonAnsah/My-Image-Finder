import React from 'react'

const Navbar = () => {
  return (
    <header class="bg-blue-600 text-white p-4 shadow-md">
        <div class="container mx-auto flex items-center justify-between">
            <h1 class="text-3xl font-bold">Pixabay Image Finder</h1>
            <nav>
                <ul class="flex space-x-6">
                    <li><a href="#" class="hover:text-gray-200">Home</a></li>
                    <li><a href="#" class="hover:text-gray-200">Explore</a></li>
                    <li><a href="#" class="hover:text-gray-200">About</a></li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Navbar
