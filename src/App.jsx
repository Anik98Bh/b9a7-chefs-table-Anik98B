import { useState } from 'react'
import './App.css'
import Cooking from './components/Cookings/Cooking'
import Header from './components/Header/Header'
import Recipes from './components/Recipes/Recipes'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [cooking, setCooking] = useState([]);

  const handleAddCook = recipe => {
    const newCooking = [...cooking, recipe];
    const isExist = cooking.find(item => item.recipe_id === recipe.recipe_id)
    if (isExist) {
      return toast("Already added!");
    }
    else {
      setCooking(newCooking);
    }

  }

  return (
    <>

      <div className='max-w-7xl mx-auto'>
        <Header></Header>
        <div className="mt-16 place-content-center text-center">
          <h1 className="text-5xl font-semibold">Our Recipes</h1>
          <p className='text-[#150B2B99] mt-5 mb-10'>Indulge in a comforting dish of Chicken Alfredo Pasta, a creamy and flavorful Italian classic. <br /> Begin by cooking your favorite pasta until al dente while you prepare the chicken.</p>
        </div>
        <div className='md:flex mt-5 gap-4'>
          <Recipes handleAddCook={handleAddCook}></Recipes>
          <Cooking
            cooking={cooking}
            setCooking={setCooking}
          ></Cooking>
        </div>
        <ToastContainer></ToastContainer>
      </div>

    </>
  )
}

export default App
