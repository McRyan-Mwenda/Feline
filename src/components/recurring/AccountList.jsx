import { useQuery } from "@apollo/client";
import { GET_ALL_ACCOUNTS } from "../../assets/schema";

const AccountList = () => {
  const { data, error } = useQuery(GET_ALL_ACCOUNTS);

  if (error) {
    console.log(`${error.message}`);
  }

  return (
    <div className="mb-4">
      <label className="block">
        <span>Account</span>
        <select
          name="account_id"
          className="mt-1 block w-full rounded-md border focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          <option selected>Select an account to link</option>
          {data &&
            data.getAllAccounts.map((account) => {
              const options = (
                <>
                  <option key={account.id} value={account.id}>
                    {account.account_name}
                  </option>
                </>
              );

              return options;
            })}
        </select>
      </label>
    </div>
  );
};

export default AccountList;
