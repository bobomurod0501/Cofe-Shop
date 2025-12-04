import React, { useMemo, useState } from "react";
import { StateValuesContext } from "../context/stateValuesContext";

const StateValuesProvider = ({ children }: { children: React.ReactNode }) => {

  const [searchVal, setSearchVal] = useState<string>("");
  const values = useMemo(() => ({ searchVal, setSearchVal }), [searchVal]);
  
  return (
    <StateValuesContext.Provider value={values}>
      {children}
    </StateValuesContext.Provider>
  );
};

export default StateValuesProvider;
