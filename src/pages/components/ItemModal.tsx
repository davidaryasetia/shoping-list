import type { Dispatch, FC, SetStateAction } from "react";
import { useState } from "react";
import { trpc } from "../../utils/trpc";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ItemModalProps {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}

const ItemModal: FC<ItemModalProps> = ({ setModalOpen }) => {
  const [input, setInput] = useState<string>("");

  const { mutate: addItem } = trpc.useMutation(["itemsaddItem"]);

  return (
    <div className="absolute inset-8 flex items-center justify-center bg-black/75">
      <div className="space-y-3 bg-white p-3">
        <h3 className="text-xl font-semibold">Add Item</h3>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className=" w-full rounded-md border-gray-300 bg-gray-200 shadow-sm focus:border-violet-300 focus:ring "
        />
        <div className="grid grid-cols-2">
          <button
            type="button"
            onClick={() => setModalOpen(false)}
            className="m-2 rounded-md bg-gray-500 p-2 text-sm text-white transition hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => {
              addItem({ name: input });
              setModalOpen(false);
            }}
            className="m-2 rounded-md bg-gray-500 p-2 text-sm text-white transition hover:bg-gray-600"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
