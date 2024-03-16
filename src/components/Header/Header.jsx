

const Header = () => {
    return (
        <div>
            {/* navber */}
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost text-3xl font-bold">Recipe Calories</a>
                </div>
                <div className="navbar-center mr-36 flex gap-20">
                    <a className="text-[#150B2BB3]">Home</a>
                    <a className="text-[#150B2BB3]">Recipes</a>
                    <a className="text-[#150B2BB3]">About</a>
                    <a className="text-[#150B2BB3]">Search</a>
                </div>
                <div className="flex-none gap-2">
                    <label className="input input-bordered rounded-full bg-[#150B2B0D] flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                        <input type="text" className="grow" placeholder="Search" />
                    </label>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* banner */}
            <div className="hero min-h-screen mt-5 rounded-3xl" style={{ backgroundImage: 'url(../src/assets/Banner.png)' }}>
                <div className=" bg-opacity-20"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="w-2/3">
                        <h1 className="mb-5 text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
                        <p className="mb-5">The American Heart Association generally recommends eating fish, especially fatty fish like salmon, twice per week because it can improve heart health and may decrease the risk of stroke.</p>
                        <div className='flex justify-evenly'>
                            <button className="btn bg-[#0BE58A] border-none rounded-full">Explore Now</button>
                            <button className="btn btn-outline border-white rounded-full text-white">Our Feedback</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;