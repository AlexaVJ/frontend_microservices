import { FC } from 'react';
import Search from './Search';
import { NavLink } from 'react-router-dom';
import { getTypeUser } from '../session/Token';


const Menu: FC = () => {
    const type = getTypeUser();

    const menuItems = [
        { label: "ProblemSet", path: "/home" },
        { label: "Submissions", path: "/submissions" },
        // { label: "Ranking", path: "/ranking" },
        { label: "Create Problem", path: "/createProblem", requiresAdmin: true },
    ];

    return (
        <nav className='m-5'>
            <ul className="flex flex-row items-center">
                {menuItems.map((item, key) => {
                    if (type !== "admin" && item.requiresAdmin) return null;
                    return (
                        <li className='px-8 border-r-4 border-gray-500 font-Jomhuria text-5xl text-gray-900' key={key}>
                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                    isActive
                                        ? "border-b-4 border-red-800"
                                        : "hover:text-red-800"
                                }
                            >
                                {item.label}
                            </NavLink>
                        </li>
                    );
                })}
                <li className='px-8 text-xl'>
                    <Search />
                </li>
            </ul>
        </nav>
    );
};

export default Menu;
