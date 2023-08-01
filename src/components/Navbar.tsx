import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";
import React from "react";
import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import useProfile from "../hooks/useProfile";

interface INavItem {
  name: string;
  link: string;
}

const NavItem: INavItem[] = [
  { name: "RESOURCES", link: "" },
  { name: "NEWS", link: "" },
  { name: "ABOUT", link: "" },
  { name: "FAQ", link: "" },
];

const Navbar = () => {
  const { user } = useProfile();
  const { isLoggedIn, logout } = useAuth();

  const navigate = useNavigate();

  const handleNavigate = (userId: string) => {
    navigate(`/profile/${userId}`);
  };
  // console.log(user)
  return (
    <nav className=" flex flex-col px-4 md:px-12 lg:px-40 bg-neutral-900 sticky top-0 z-50">
      <div className="flex flex-wrap items-center justify-between p-4">
        <Link to={"/"} className="flex items-center">
          <svg
            className="w-16 fill-teal-400"
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1080 540"
          >
            <path d="m203.75,224.72c-5.99,0-12.02-1.85-17.2-5.68-12.86-9.5-15.58-27.64-6.07-40.5l64.25-86.92h-93.66c-16,0-28.96-12.96-28.96-28.96s12.96-28.96,28.96-28.96h151.08c10.94,0,20.94,6.16,25.86,15.92,4.92,9.76,3.93,21.46-2.57,30.25l-98.38,133.09c-5.68,7.68-14.43,11.75-23.3,11.75Z" />
            <path d="m771.78,510.95c-16,0-28.96-12.96-28.96-28.96v-104.5h-152.51c-16,0-28.96-12.96-28.96-28.96s12.96-28.96,28.96-28.96h181.48c16,0,28.96,12.96,28.96,28.96v133.46c0,16-12.96,28.96-28.96,28.96Z" />
            <path d="m604.63,283.85c-5.83,0-11.7-1.75-16.8-5.39-13.02-9.3-16.04-27.39-6.74-40.4l137.29-192.23c9.3-13.02,27.38-16.02,40.4-6.74,13.02,9.3,16.04,27.39,6.74,40.4l-137.29,192.23c-5.66,7.92-14.56,12.13-23.6,12.13Z" />
            <path d="m205.79,510.95c-94.89,0-172.08-77.19-172.08-172.08,0-16,12.96-28.96,28.96-28.96s28.96,12.96,28.96,28.96c0,62.95,51.21,114.16,114.16,114.16s114.16-51.21,114.16-114.16-51.21-114.16-114.16-114.16c-16,0-28.96-12.96-28.96-28.96s12.96-28.96,28.96-28.96c94.89,0,172.08,77.19,172.08,172.08s-77.19,172.08-172.08,172.08Z" />
            <path d="m878.71,510.95c-16,0-28.96-12.96-28.96-28.96v-133.09c0-16,12.96-28.96,28.96-28.96,62.95,0,114.16-51.21,114.16-114.16s-51.21-114.16-114.16-114.16h-56.89c-16,0-28.96-12.96-28.96-28.96s12.96-28.96,28.96-28.96h56.89c94.89,0,172.08,77.19,172.08,172.08,0,85.02-61.98,155.83-143.12,169.63v106.58c0,16-12.96,28.96-28.96,28.96Z" />
            <path d="m394.99,510.95c-16,0-28.96-12.96-28.96-28.96s12.96-28.96,28.96-28.96c99.64,0,180.7-81.07,180.7-180.7s-81.07-180.7-180.7-180.7c-16,0-28.96-12.96-28.96-28.96s12.96-28.96,28.96-28.96c131.58,0,238.62,107.05,238.62,238.62s-107.05,238.62-238.62,238.62Z" />
          </svg>
        </Link>

        <ul className="flex flex-row gap-16 font-bold text-sm">
          {/* {NavItem.map((item) => (
            <li className="hover:text-teal-400 hover:cursor-pointer" key={item.name}>
              {item.name}
            </li>
          ))} */}
          <li>
            {isLoggedIn ? (
              <Menu>
                <MenuHandler>
                  <Button color="teal" className="rounded-full">
                    {user && user["firstname"]}
                  </Button>
                </MenuHandler>
                <MenuList>
                  <MenuItem>
                    <p onClick={() => handleNavigate(user!["firstname"])}>
                      Profile
                    </p>
                  </MenuItem>
                  <MenuItem onClick={logout}>Log out</MenuItem>
                </MenuList>
              </Menu>
            ) : (
              <Link
                to="/login"
                className=" border-2 border-teal-400 text-teal-400 px-6 py-2 rounded-full bg-white hover:bg-teal-400 hover:text-white "
              >
                LOGIN
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
