import { useState } from 'react'
import './App.css'
import Cooking from './components/Cookings/Cooking'
import Header from './components/Header/Header'
import Recipes from './components/Recipes/Recipes'

function App() {
  const [cooking, setCooking] = useState([]);

  const handleAddCook = recipe => {
    const newCooking = [...cooking, recipe];
    setCooking(newCooking);
  }

  return (
    <>

      <div className='max-w-7xl mx-auto'>
        <Header></Header>
        <div className='md:flex mt-5 gap-4'>
          <Recipes handleAddCook={handleAddCook}></Recipes>
          <Cooking
            cooking={cooking}
          ></Cooking>
        </div>
      </div>

    </>
  )
}

export default App
