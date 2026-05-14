
import {Outlet,NavLink} from "react-router";



function Technologies() {
  return (
    <div>
       <nav className="mb-4">
            <ul className="flex justify-center space-x-6">
            <li>
                <NavLink to='java' className={({isActive}) => isActive ? "text-orange-500 font-bold" : "text-gray-700"}>Java</NavLink>
            </li>
            <li>
                <NavLink to='nodejs' className={({isActive}) => isActive ? "text-orange-500 font-bold" : "text-gray-700"}>Nodejs</NavLink>
            </li>
            <li>
                <NavLink to='vue' className={({isActive}) => isActive ? "text-orange-500 font-bold" : "text-gray-700"}>Vue</NavLink>
            </li>
            </ul>
        </nav>
        <div className="p-4 bg-white rounded shadow">
            <Outlet />
        </div>
    </div>
  )
}

export default Technologies
