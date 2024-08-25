import { ClientComponent } from "./ClientComponent";
import { heading, section } from "./ServerComponent";

export const HeroSection = () => {
  return <ClientComponent heading={heading} section={section} />;
};
