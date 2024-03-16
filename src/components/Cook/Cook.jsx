

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

// {
//     // cooking.map(cook => <Cook key={cook.id} cook={cook}></Cook>)
//     cook.map(item => (
//         <div key={item.id} className="overflow-x-auto">
//             <table className="table">
//                 {/* head */}
//                 <thead>
//                     <tr>
//                         <th></th>
//                         <td>{recipe_name}</td>
//                         <td>{preparing_time}</td>
//                         <td>{calories}</td>
//                     </tr>
//                 </thead>
//             </table>
//         </div>
//     ))}