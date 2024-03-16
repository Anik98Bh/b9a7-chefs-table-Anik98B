

const Newcook = ({ cook, index }) => {


    const { recipe_name, preparing_time, calories } = cook;



    return (
        <div className="bg-slate-100 rounded-xl mb-3 py-3">
            <table className="table">
                <thead>
                    <tr className="flex items-center justify-between ">
                        <td>{index + 1}</td>
                        <td className="text-wrap w-1/2">{recipe_name}</td>
                        <td className="text-wrap">{preparing_time} min</td>
                        <td className="text-wrap">{calories} calories</td>
                    </tr>
                </thead>
            </table>
        </div>
    );
};

export default Newcook;
