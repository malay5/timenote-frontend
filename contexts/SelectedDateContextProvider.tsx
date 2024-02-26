"use client";
import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";
type contextType = { selected_date: Date | undefined; setSelectedDate: Dispatch<SetStateAction<Date | undefined>> };

const SelectedDateContext = createContext<contextType>({
  selected_date: undefined,
  setSelectedDate: () => {},
});

const SelectedDateContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [selected_date, setSelectedDate] = useState<Date | undefined>(undefined);



  return (
    <SelectedDateContext.Provider value={{selected_date, setSelectedDate  }}>
      {children}
    </SelectedDateContext.Provider>
  );
};

export default SelectedDateContextProvider ;

export const useSelectedDateContext = () => useContext(SelectedDateContext);