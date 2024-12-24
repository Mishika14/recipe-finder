import React, { useState } from 'react';

const Results = ({ recipes }) => {
 // Split ingredients based on "|"
  const [expandedRecipe, setExpandedRecipe] = useState(null); // Track expanded recipe

  const handleCardClick = (recipe) => {
    setExpandedRecipe(recipe); // Show the clicked recipe in expanded view
  };

  const handleClose = () => {
    setExpandedRecipe(null); // Close the expanded card
  };
 
  return (
    <div>
      <div className="mt-4">
        {recipes.length > 0 ? (
          <div className="relative p-5">
            {/* Grid of Recipe Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {recipes.map((recipeItem, index) => (
                <div
                  key={index}
                  onClick={() => handleCardClick(recipeItem)} // Handle card click
                  className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer"
                >
                  <img
                    src="src/assets/Recipe book-pana.png"
                    alt={recipeItem.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-semibold text-gray-800">{recipeItem.title}</h2>
                    <p className="text-gray-600">{recipeItem.servings} servings</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Expanded Card View */}
            {expandedRecipe && (
              <div
                className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
                onClick={handleClose} // Close on overlay click
              >
                <div
                  className="bg-white rounded-lg p-8 w-3/4 max-w-4xl relative"
                  onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the card
                  style={{ maxHeight: '80vh', overflowY: 'auto' }} // Make the modal scrollable
                >
                  <button
                    onClick={handleClose}
                    className="absolute top-2 right-2 text-white bg-red-500 px-3 py-2 rounded-md"
                  >
                    X
                  </button>
                  <img
                    src="src/assets/Recipe book-pana.png"
                    alt={expandedRecipe.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <h2 className="text-3xl font-semibold mt-4">{expandedRecipe.title}</h2>
                  <p className="text-xl text-black-600 mt-2">Servings: {expandedRecipe.servings}</p>
                  <p className="text-xl text-black-600 mt-2">Ingredients:</p>
                  <ul className='list-disc custom-list pl-5'>
  {expandedRecipe.ingredients.split('|').map((ingredient, index) => (
    <li key={index} className="text-gray-800">{ingredient.trim()}</li> // Trim to remove extra spaces
  ))}
</ul>
    

                  <p className="text-xl text-black-600 mt-2">Instructions:</p>
                  <p className="text-gray-800 mt-2">{expandedRecipe.instructions}</p>


                </div>
              </div>
            )}
          </div>
        ) : (
          <p className="text-gray-500">
            {recipes.length === 0
              ? "No recipes found. Try searching for something else!"
              : "Enter a recipe name to search."}
          </p>
        )}
      </div>
    </div>
  );
};

export default Results;
