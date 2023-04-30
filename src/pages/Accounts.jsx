import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AllAccounts from "../components/account/AllAccounts";
import Modal from "../components/modal/Modal";
import NewAccount from "../components/account/NewAccount";

const Accounts = () => {
  const navigate = useNavigate();

  const [isVisible, setIsVisible] = useState(false);

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const checkAuth = (isLoggedIn) => {
    if (isLoggedIn) {
      return;
    } else {
      navigate("/signin");
    }
  };

  useEffect(() => {
    checkAuth(isLoggedIn);
  }, [isLoggedIn]);

  return (
    <div className="page">
      <div className="mb-4">
        <div className="flex justify-between items-center">
          <h4 className="text-2xl font-semibold">Accounts</h4>
          <button
            className="rounded-md border py-2 px-4"
            onClick={() => setIsVisible(true)}
          >
            <i className="bi bi-plus-lg"></i> New Account
          </button>
        </div>
        <p className="text-lg font-thin">
          A collection of all your accounts / businesses
        </p>
      </div>
      <AllAccounts />

      {/* modals */}
      <Modal
        visible={isVisible}
        setVisible={setIsVisible}
        title={"Create new account"}
        element={<NewAccount />}
      />
      {/* modals */}
    </div>
  );
};

export default Accounts;
