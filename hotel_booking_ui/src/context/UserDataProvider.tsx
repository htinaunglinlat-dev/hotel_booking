import React, { useState } from "react";
import { createContext, useContext } from "react"

export type PlaceType = string
export type DateType = {
   startDate: Date
   endDate: Date
   key: string
}[]
export type OptionsType = {
   adult: number
   children: number
   room: number
}

export type UserOptions = {
   place: PlaceType
   date: DateType
   options: OptionsType
}

type SearchDataProviderProps = {
   children: React.ReactNode
}

type AuthContextType = [
   userOptions: UserOptions,
   setUserOptions: React.Dispatch<React.SetStateAction<UserOptions>>
]

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const SearchDataProvider: React.FC<SearchDataProviderProps> = ({children}) => {
   const [userOptions, setUserOptions] = useState<UserOptions>({
      place: "",
      date: [{
         startDate: new Date(),
         endDate: new Date(),
         key: "selection",
      }],
      options: {
         adult: 1,
         children: 0,
         room: 1,
      }
   })
   return(
      <AuthContext.Provider value={[userOptions, setUserOptions]}>
         {children}
      </AuthContext.Provider>
   )
}

export default SearchDataProvider;
export const useSearchDataContext = () => {
   const context = useContext(AuthContext)
   if(!context) {
      throw new Error("useSearchDataContext must be used within a SearchDataProvider")
   }
   return context
}