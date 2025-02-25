import React from 'react'

const Search = () => {
  return (
    <section class="mt-8 px-4">
      <div class="max-w-lg mx-auto">
        <input type="text" placeholder="Search for images..." class="w-full px-4 py-2 text-lg border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      <div class="flex items-center space-x-2">
        <label for="amount" class="text-lg">Amount:</label>
        <select id="amount" name="amount" class="w-full p-2 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="30">30</option>
          <option value="50">50</option>
        </select>
      </div>
    </section>
  )
}

export default Search
