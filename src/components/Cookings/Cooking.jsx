import Cook from "../Cook/Cook";

const Cooking = ({ cooking }) => {
    return (
        <div className="w-1/3 h-full border rounded-2xl px-1">
            <h2 className="text-xl font-semibold text-center">Want to cook: {cooking.length}</h2>
            <hr className="my-4 border-dashed bg-red-500" />
            <div className=" px-4">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead>

                </table>
                {
                    cooking.map((cook) => <Cook key={cook.id} cook={cook}>
                    </Cook>)
                }
            </div>

        </div>
    );
};

export default Cooking;