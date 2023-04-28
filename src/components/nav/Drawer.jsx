import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openDrawer, closeDrawer } from "../../redux/reducers/drawer";

const Drawer = () => {
  const dispatch = useDispatch();

  const width = useSelector((state) => state.drawer.menuWidth);
  const display = useSelector((state) => state.drawer.menuDisplay);

  const checkDrawer = () => {
    if (
      localStorage.getItem("menuWidth") &&
      localStorage.getItem("menuDisplay")
    ) {
      if (
        localStorage.getItem("menuWidth") === "5%" &&
        localStorage.getItem("menuDisplay") === "block"
      ) {
        dispatch(openDrawer());
      } else if (
        localStorage.getItem("menuWidth") === "0" &&
        localStorage.getItem("menuDisplay") === "none"
      ) {
        dispatch(closeDrawer());
      }
    } else {
      dispatch(openDrawer());
    }
  };

  useEffect(() => {
    checkDrawer();
  });

  return (
    <div
      className="border-l drawer py-4"
      style={{
        width: width,
        display: display,
        position: "fixed",
        right: "0px",
        height: "100%",
      }}
    >
      <div
        style={{
          marginTop: "0.75rem",
        }}
      ></div>
      <p className="text-center">Menu</p>
      <div className="mb-10"></div>
      <ul className="flex flex-col justify-center items-center">
        <li className="my-2"></li>
        <li>
          <a href="" className="tooltip">
            <i className="bi bi-safe2 text-3xl p-4"></i>
            <span className="tooltip-text">Accounts</span>
          </a>
        </li>
        <li className="my-2"></li>
        <li>
          <a href="" className="tooltip">
            <i className="bi bi-piggy-bank text-3xl p-4"></i>
            <span className="tooltip-text">Budgets</span>
          </a>
        </li>
        <li className="my-2"></li>
        <li>
          <a href="" className="tooltip">
            <i className="bi bi-bullseye text-3xl p-4"></i>
            <span className="tooltip-text">Targets</span>
          </a>
        </li>
        <li className="my-2"></li>
        <li>
          <a href="" className="tooltip">
            <i className="bi bi-box-seam text-3xl p-4"></i>
            <span className="tooltip-text">Inventory</span>
          </a>
        </li>
        <li className="my-2"></li>
        <li>
          <a href="" className="tooltip">
            <i className="bi bi-people text-3xl p-4"></i>
            <span className="tooltip-text">Employees</span>
          </a>
        </li>
        <li className="my-2"></li>
        <li>
          <a href="" className="tooltip">
            <i className="bi bi-heart-pulse text-3xl p-4"></i>
            <span className="tooltip-text">Reports</span>
          </a>
        </li>
        <li className="my-2"></li>
        <li>
          <a href="" className="tooltip">
            <i className="bi bi-robot text-3xl p-4"></i>
            <span className="tooltip-text">AI</span>
          </a>
        </li>
        <li className="my-2"></li>
        <li>
          <a href="" className="tooltip">
            <i className="bi bi-wrench-adjustable-circle text-3xl p-4"></i>
            <span className="tooltip-text">Profile</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Drawer;
