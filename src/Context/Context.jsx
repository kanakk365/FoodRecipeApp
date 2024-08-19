import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading , setLoading] = useState(false)
  const [recipes , setRecipes] = useState([])
  const [recipeData ,setRecipeData] = useState(null)
  const [favoritesData , setFavoritesData] = useState([])

  const navigate = useNavigate()
  async function handleSubmit(event) {
    event.preventDefault()
    try {
      setLoading(true)
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );
      const data = await res.json();
      
      if(data?.data?.recipes){
        setRecipes(data?.data?.recipes)
        setLoading(false)
        setSearchParam('')
        navigate('/')
      }
    } catch (e) {
      console.log(e);
      setLoading(false)
      setSearchParam('')
    }
  }

  function handleAddFav(currentItem){
    let cpyItem = [...favoritesData]
    let index= cpyItem.findIndex(item=> item.id === currentItem.id)

    if(index === -1){
      cpyItem.push(currentItem)
    }else{
      cpyItem.splice(currentItem)
    }
    setFavoritesData(cpyItem)
  }

  console.log(loading, recipes)

  

  return (
    <GlobalContext.Provider value={{ searchParam, setSearchParam, handleSubmit , loading , recipes , recipeData ,setRecipeData , favoritesData , setFavoritesData ,handleAddFav}}>
      {children}
    </GlobalContext.Provider>
  );
}
