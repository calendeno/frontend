import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export const Layout = ({ children }: Props): JSX.Element => {
  return <div className="flex justify-center">{children}</div>;
};
