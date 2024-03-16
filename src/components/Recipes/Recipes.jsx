import { data } from "autoprefixer";
import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";

const Recipes = ({ handleAddCook }) => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('recipe.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])

    return (

        <div>
            <div>
                <h1 className="text-3xl mb-2">Recipes: {recipes.length}</h1>
                <div className="w-full grid grid-cols-2 gap-8">
                    {
                        recipes.map(recipe => <Recipe
                            key={recipe.id}
                            recipe={recipe}
                            handleAddCook={handleAddCook}
                        ></Recipe>)
                    }
                </div>
            </div>
        </div>

    );
};

export default Recipes;