import {IoTimeOutline } from 'react-icons/io5';
import { AiOutlineFire } from "react-icons/ai";

const Recipe = ({ recipe, handleAddCook}) => {
    const { recipe_name, recipe_img, short_description, ingredients, preparing_time, calories } = recipe;
    return (
        <div className="mb-20 p-8 border rounded-3xl">
            <div className=" bg-base-100">
                <img className='rounded-3xl' src={recipe_img} alt="" />
                <div className="">
                    <h2 className="card-title">{recipe_name}</h2>
                    <p>{short_description}</p>
                    <hr className="my-4 border-dashed bg-red-500" />
                    <div><span className="font-medium">Ingredients: {ingredients.length}</span>
                        <ul className="list-disc pl-7">
                            {
                                ingredients.map((ingredient, idx) => <li key={idx}>{ingredient}</li>)
                            }
                        </ul>
                    </div>
                    <hr className="my-4 border-dashed bg-red-500" />
                    <div className="flex justify-between my-3">
                        <div className='flex justify-items-center gap-2'>
                            <button className=' text-2xl'><IoTimeOutline></IoTimeOutline></button>
                            <span>{preparing_time} minutes</span>
                        </div>
                        <div className='flex justify-items-center gap-2'>
                            <button className='text-2xl'><AiOutlineFire></AiOutlineFire></button>
                            <span>{calories} calories</span>
                        </div>
                    </div>
                    <div className="">
                        <button onClick={()=>handleAddCook(recipe)} className="btn bg-[#0BE58A] rounded-full">Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipe;