import { Session } from "inspector";
import React, { ReactNode } from "react";

type ProvidersProps = {
  children: ReactNode;
};

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  // Add your provider logic here if needed
  return <>{children}</>; // Return the children wrapped in an empty JSX fragment
};

export default Providers;
