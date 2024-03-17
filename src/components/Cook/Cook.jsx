

const Cook = ({ cook, index, handleCurrentlyCooking }) => {


    const { recipe_name, preparing_time, calories } = cook;



    return (
        <div className="bg-slate-100 rounded-xl mb-3 py-3">
            <table className="table">
                <thead>
                    <tr className="flex items-center ">
                        <td>{index + 1}</td>
                        <td className="text-wrap">{recipe_name}</td>
                        <td className="text-wrap">{preparing_time} min</td>
                        <td className="text-wrap">{calories} calories</td>
                        <td><button onClick={() => handleCurrentlyCooking(cook)} className="btn btn-sm bg-[#0BE58A] rounded-full">Preparing</button></td>

                    </tr>
                </thead>
            </table>
        </div>
    );
};

export default Cook;