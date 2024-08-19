import React, { useContext } from 'react'
import { GlobalContext } from '../../Context/Context'
import RecipeItem from '../RecipeItem/RecipeItem'

function Home() {

  const{ recipes , loading} =useContext(GlobalContext)

  if(loading) return <div>
    Loading... Please Wait
  </div>
  

  return (
    <div className='py-8 container mx-auto flex flex-wrap justify-center gap-10'>
      {recipes && recipes.length > 0 ? (
        recipes.map((item)=> <RecipeItem key={item.id} item={item}/>)
      ) : (
        <div>
          <p className='lg:text-4xl text-xl text-center text-black font-extrabold'>
            Nothing to Show. Please Search Something
          </p>
        </div>
      )}
    </div>
  )
}

export default Home