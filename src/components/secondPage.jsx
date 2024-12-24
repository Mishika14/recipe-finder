import React, { useState, useEffect } from "react";
import Results from "./results.jsx";

const SecondPage = () => {
  const [recipe, setRecipe] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setRecipe(e.target.value);
  };

  const fetchData = async () => {
    const apiUrl = `https://api.api-ninjas.com/v1/recipe?query=${recipe}`;
    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "X-Api-Key": "tLKDqDinLt3PTRnMh6V+Bg==FjcejYT0dTMHhUev",
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch recipes");
      }
      const data = await response.json();
      setRecipes(data);
      setError("");
      console.log(data)
    } catch (error) {
      console.error(error);
      setError("An error occurred while fetching recipes.");
    }
  };

  const handleSearch = () => {
    if (recipe.trim() !== "") {
      fetchData();
    }
  };

  return (
    <div className="h-[100vh] w-full bg-white pl-3">
      <div className="flex flex-col gap-6">
        {/* Heading */}
        <div className="pt-3">
          <h1 className="font-ibmFlex font-medium text-3xl text-black">
            What's Cooking Today?
          </h1>
        </div>

        {/* Search Bar */}
        <div className="flex items-center justify-around">
          <div className=" w-3/4 relative">
            <input
              type="text"
              placeholder="Search..."
              onChange={handleChange}
              className="w-full px-4 py-2 pl-10 text-sm text-gray-700 bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#fc7462"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </span>
          </div>
          <button
            onClick={handleSearch}
            className=" w-1/6 py-2 rounded-3xl text-white bg-[#fc7462] shadow hover:bg-[#fc7465]"
          >
            Search
          </button>
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500">{error}</p>}

        {/* Recipe Results */}
        <Results recipes={recipes}/>
    
      
</div>
</div>
  )
}


     
 

export default SecondPage;




     