import React, { FC } from "react";

type Props = {
  isOpen: boolean;
};

export const BackDrop: FC<Props> = ({ isOpen }) =>
  isOpen ? (
    <div className="fixed left-0 top-0 z-[60] h-screen w-screen bg-[rgba(0,0,0,0.8)]"></div>
  ) : (
    <></>
  );
