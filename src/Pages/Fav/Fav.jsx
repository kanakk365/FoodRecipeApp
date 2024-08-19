
import RecipeItem from "../RecipeItem/RecipeItem"
import React, { useContext } from 'react'
import { GlobalContext } from '../../Context/Context'


function Fav() {
  const{ favoritesData } =useContext(GlobalContext)

  
  

  return (
    <div className='py-8 container mx-auto flex flex-wrap justify-center gap-10'>
      {favoritesData && favoritesData.length > 0 ? (
        favoritesData.map((item)=> <RecipeItem key={item.id} item={item}/>)
      ) : (
        <div>
          <p className='lg:text-4xl text-xl text-center text-black font-extrabold'>
            Nothing to Show . Please add something.
          </p>
        </div>
      )}
    </div>
  )
}

export default Fav