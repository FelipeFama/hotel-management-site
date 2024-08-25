import { FC } from "react";

type Props = {
  isOpen: boolean;
};

export const RatingModal: FC<Props> = props => {
  const { isOpen } = props;
  return (
    <section
      className={`fixed inset-0 z-[61] flex items-center justify-center ${
        isOpen
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      }`}
    >
      Rating Modal
    </section>
  );
};
