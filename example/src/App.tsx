import type { ThingProps } from "./Thing";
import { Thing } from "./Thing";

export const App: React.FC = () => {
  const props: ThingProps = { children: "Hello from React!" };

  return <Thing {...props} />;
};
