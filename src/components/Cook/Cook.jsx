
const Cook = ({ cook }) => {
    const { recipe_name, preparing_time, calories } = cook;
    return (
        <div className="bg-slate-300 rounded-xl mb-3 py-3">
            <table className="table flex justify-around items-center ">
                <thead>
                    <tr>
                        <p>{}</p>
                        <td>{recipe_name}</td>
                        <td>{preparing_time}</td>
                        <td>{calories}</td>
                        <button className="btn btn-sm bg-[#0BE58A] rounded-full">Preparing</button>
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