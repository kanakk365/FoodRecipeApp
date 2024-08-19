import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../Context/Context";
import { useParams } from "react-router-dom";

function Details() {
  const { recipeData, setRecipeData ,handleAddFav ,favoritesData } = useContext(GlobalContext);
  const { id } = useParams();

  useEffect(() => {
    async function getDetails() {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?/${id}`
      );
      const data = await res.json();
      console.log(data);

      if (data?.data) {
        setRecipeData(data);
      }
    }

    getDetails();
  }, [id]);

  return (
    <div className="container mx-auto py-10 grid grid-cols-1 lg:gird-cols-2 gap-10">
      <div className="row-start-2 lg:row-start-auto">
        <div className="h-96 overflow-hidden rounded-xl group">
          <img
            src={recipeData?.recipe?.image_url}
            className="w-full h-full object-cover block group-hover:scale-105 duration-300"
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-sm text-cyan-700 font-medium">
          {recipeData?.recipe?.publisher}
        </span>
        <h3 className="font-bold text-2xl truncate text-black">
          {" "}
          {recipeData?.recipe?.title}{" "}
        </h3>
      </div>
      <div>
        <button onClick={()=>handleAddFav(recipeData?.recipe)} className="p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inline-block shadow-md bg-black text-white">
          {" "}
          {
            favoritesData && favoritesData.length>0 && favoritesData.findIndex(item => item.id === recipeData?.recipe?.id) !==-1 ?"Remove From Favorites " :"Add to Favorites"
          }
        </button>
      </div>
      <span className="text-2xl font-semibold text-black"> Ingredients: </span>
      <ul>
        {recipeData?.recipe?.ingredients.map((ingredients) => (
          <li>
            <span className="text-2xl font-semibold text-black">
              {ingredients.quantity} {ingredients.unit}
            </span>
            <span className="text-2xl font-semibold text-black">
              {ingredients.desctiption}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Details;
