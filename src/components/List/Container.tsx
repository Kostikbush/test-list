import { FC, ReactNode } from "react";

interface ContainerPropsType {
  children: ReactNode;
}

const Container: FC<ContainerPropsType> = ({ children }) => (
  <div className="flex flex-col gap-6 pl-4">{children}</div>
);

Container.displayName = "Container";

export default Container;
