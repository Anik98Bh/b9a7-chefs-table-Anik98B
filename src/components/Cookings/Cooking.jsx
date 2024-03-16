import { useEffect, useState } from "react";
import Cook from "../Cook/Cook";
import Newcook from "../Newcook/Newcook";

const Cooking = ({ cooking, setCooking }) => {
    const [singleCook, setSingleCook] = useState([])
    console.log('cooking', cooking)

    const handleCurrentlyCooking = (cook) => {
        setSingleCook([...singleCook, cook])
        const updateItems = cooking?.filter(item => item.recipe_id !== cook.recipe_id);
        setCooking(updateItems)
    }

    const totalTime = (singleCook, preparing_time) => {
        return singleCook?.reduce((total, obj) => total + obj[preparing_time], 0)
    }

    const totalTimes = totalTime(singleCook, 'preparing_time')

    const totalCalory = (singleCook, calories) => {
        return singleCook?.reduce((total, obj) => total + obj[calories], 0)
    }

    const totalCalories = totalCalory(singleCook, 'calories')

    return (
        <div className=" h-full border rounded-2xl px-1">
            <h2 className="text-xl font-semibold text-center">Want to cook: {cooking.length}</h2>
            <hr className="my-4 border-dashed bg-red-500" />
            <div className=" px-4">
                <table className="table">
                    <thead>
                        <tr>
                            <th>SL:</th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                </table>
                {
                    cooking.map((cook, index) => <Cook key={cook.id}
                        handleCurrentlyCooking={handleCurrentlyCooking}
                        index={index} cook={cook}>
                    </Cook>)
                }
            </div>
            <div className="mt-9">
                <h1 className="text-2xl font-semibold text-center">Currently cooking:</h1>
                <hr className="my-4 border-dashed bg-red-500" />
                <div className=" px-4">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>SL:</th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                            </tr>
                        </thead>

                    </table>
                    {
                        singleCook.map((cook, index) => <Newcook key={cook.id}
                            index={index} cook={cook}>
                        </Newcook>)
                    }
                    <div className="flex justify-end items-center gap-4">
                        <h1 className="font-medium">Total Time =<br />
                            {totalTimes} minutes</h1>
                        <h1 className="font-medium">Total Calories =<br />
                            {totalCalories} calories</h1>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Cooking;