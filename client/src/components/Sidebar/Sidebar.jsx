import React from "react";
import { routes } from "../../utils/routes";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-[250px] h-[100vh] border">
      <ul>
        {routes?.map((el, i) => {
          return (
            <li key={i}>
              <Link to={el?.link}>
                <div>{el?.icon}</div>
                <div>{el?.title}</div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
