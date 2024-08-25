import { Dispatch, FC, SetStateAction } from "react";
import { BsStarFill } from "react-icons/bs";

type Props = {
  isOpen: boolean;
  ratingValue: number;
  setRatingValue: Dispatch<SetStateAction<number>>;
};

export const RatingModal: FC<Props> = props => {
  const { isOpen, ratingValue, setRatingValue } = props;

  const starValues = [1, 2, 3, 4, 5];
  return (
    <section
      className={`fixed inset-0 z-[61] flex items-center justify-center ${
        isOpen
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      }`}
    >
      <article className="w-96 rounded-lg bg-white p-4 shadow-lg">
        <h2 className="mb-2 text-xl font-semibold dark:text-gray-800">
          Rate Your Experience
        </h2>
        <aside className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Rating
          </label>
          <div className="flex items-center">
            {starValues.map(value => (
              <button
                key={value}
                onClick={() => setRatingValue(value)}
                className={`h-6 w-6 ${
                  ratingValue === value ? "text-yellow-500" : "text-gray-300"
                }`}
              >
                <BsStarFill />
              </button>
            ))}
          </div>
        </aside>
      </article>
    </section>
  );
};
