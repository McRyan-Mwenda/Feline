import { useQuery } from "@apollo/client";
import { TRANSACTION_CATEGORY } from "../../assets/schema";

const TransactionCategory = ({ setParent }) => {
  const { data, error } = useQuery(TRANSACTION_CATEGORY);

  if (error) {
    console.log(`${error.message}`);
  }

  return (
    <div className="mb-4">
      <label className="block">
        <span>Category</span>
        <select
          name="currency_code"
          className="mt-1 block w-full rounded-md border focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          onChange={(e) => setParent(e.target.value)}
        >
          <option selected>Select a category</option>
          {data &&
            data.getTransactionCategory.map((category) => {
              const options = (
                <>
                  <option key={category.id} value={category.category_name}>
                    {category.category_name}
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

export default TransactionCategory;
