import type React from "react";

function Container({ children }: { children: React.ReactNode }) {
  return <div className="max-w-[1200px] mx-auto lg:p-0 px-2.5">{children}</div>;
}

export default Container;
