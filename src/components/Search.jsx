import axios from 'axios';
import React, { useState } from 'react'
import SearchResults from './SearchResults';

const Search = () => {

  const [searchText, setSearchText] = useState("");
  const [images, setImages] = useState([]);
  const [amount, setAmount] = useState(15);
  const [loading, setLoading] = useState(false);

  const apiUrl = "https://pixabay.com/api";
  const apikey = import.meta.env.VITE_PIXABAY_API_KEY 

  const onChangeText = (e) => {
    const value = e.target.value;
    setSearchText(value);

    if (value === "") {
      setImages([]);
    } else {
      setLoading(true);  // Set loading to true when the API call starts

      axios
      .get(`${apiUrl}/?key=${apikey}&q=${value}&image_type=photo&per_page=${amount}&safesearch=true`)
      .then((res)  => {
        setImages(res.data.hits);
        setLoading(false); // Set loading to false once the data is fetched
      })
      .catch((err) => {
        console.log(err);
        setLoading(false); // Set loading to false even if an error occurs
      })
    }
  }

  return (
    <section className="mt-8 px-4">
      <div className="max-w-lg mx-auto space-y-4">
        {/* Search Input */}
        <input 
          type="text" 
          placeholder="Search for images..." 
          className="w-full px-4 py-2 text-lg border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchText}
          onChange={onChangeText}
        />
        
        {/* Amount Select */}
        <div className="flex items-center space-x-2 justify-center">
          <label htmlFor="amount" className="text-lg">Amount:</label>
          <select 
            id="amount" 
            name="amount" 
            className="w-32 p-2 text-lg border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="30">30</option>
            <option value="50">50</option>
          </select>
        </div>
      </div>

      {/* Show loading spinner */}
      {loading && (
        <div className="flex justify-center items-center mt-4">
          <div className="w-8 h-8 border-4 border-t-4 border-blue-600 border-solid rounded-full animate-spin"></div>
        </div>
      )}

      {/* Show images once fetched */}
      {images.length > 0 && <SearchResults images={images} />}
    </section>
  )
}

export default Search;
