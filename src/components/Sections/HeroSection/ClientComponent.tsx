"use client";

import React, { FC } from "react";

import { CountUpNumber } from "../../CountUpNumber/CountUpNumber";

type Props = {
  heading: React.ReactNode;
  section: React.ReactNode;
};

export const ClientComponent: FC<Props> = props => {
  const { heading, section } = props;
  return (
    <section className="container mx-auto flex items-center gap-12 px-4">
      <article className="h-full py-10">
        {heading}

        <div className="mt-12 flex justify-between">
          <aside className="flex flex-col items-center justify-center gap-3">
            <p className="text-center text-xs lg:text-xl">Basic Room</p>
            <CountUpNumber duration={5000} endValue={50} />
          </aside>
          <aside className="flex flex-col items-center justify-center gap-3">
            <p className="text-center text-xs lg:text-xl">Luxury Room</p>
            <CountUpNumber duration={5000} endValue={120} />
          </aside>
          <aside className="flex flex-col items-center justify-center gap-3">
            <p className="text-center text-xs lg:text-xl">Suite</p>
            <CountUpNumber duration={5000} endValue={60} />
          </aside>
        </div>
      </article>

      {section}
    </section>
  );
};
