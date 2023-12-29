import React, { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
// import { PlaceType, DateType, OptionsType, UserOptions } from "../../context/UserDataProvider";
import { UserOptions } from "../../context/UserDataProvider";

type InputListType1Props = {
   userOptions: UserOptions
   setUserOptions: React.Dispatch<React.SetStateAction<UserOptions>>
}

type InputListType1ListenerProps = (event: React.FocusEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement>) => void

const InputListType1: React.FC<InputListType1Props> = ({userOptions, setUserOptions}) => {

   const InputTypeList1Handler: InputListType1ListenerProps = event => {
      // console.log(event);
      if(event.type === "blur" || (event.type === "keydown" && (event as React.KeyboardEvent).key === "Enter")) {
         const target = event.target as HTMLInputElement;
         setUserOptions((prev:UserOptions) => {
            return {
               ...prev,
               place: target.value,
            }
         })
      }
   }
   // console.count(userOptions)
   return(
      <div className="d-flex flex-col gap-[5px] mb-[10px]">
         <label htmlFor="destination" className="font-[12px]">Destination</label>
         <input type="text"
            className="h-[30px] rounded-none p-[5px]"
            placeholder={userOptions.place ? userOptions.place : "What are you going"}
            onKeyDown={InputTypeList1Handler}
            onBlur={InputTypeList1Handler}
            id="destination"
         />
      </div>
   )
}

type InputListType2Props = {
   userOptions: UserOptions
   setUserOptions: React.Dispatch<React.SetStateAction<UserOptions>>
}

const InputListType2: React.FC<InputListType2Props> = ({userOptions, setUserOptions}) => {
   const [openDate, setOpenDate] = useState(false);
   return(
      <div className="d-flex flex-col gap-[5px] mb-[10px]">
         <label htmlFor="date" className="font-[12px]">Check-in Date</label>
         <span className="h-[30px] p-[5px] bg-white d-flex items-center pointer" onClick={() => setOpenDate(prev => !prev)}>{`${format(
            userOptions.date[0].startDate,
            "MM/dd/yyyy"
         )} to ${
            userOptions.date[0].endDate,
            "MM/dd/yyyy"
         }`}</span>
         {openDate && (
            <DateRange
            onChange={(item: any) => setUserOptions(prev => {
               return{
                  ...prev,
                  date: [item.selection],
               }
            })}
            minDate={new Date()}
            ranges={userOptions.date}
            />
         )}
      </div>
   )
}

type InputListType3Props = {
   text: string
   text1?: string
   minPrice: number
   placeholder?: string
}

const InputListType3: React.FC<InputListType3Props> = ({text, text1 = "",minPrice, placeholder = ""}) => {
   return(
      <div className="d-flex justify-between mb-[10px] gray1 font-[12px]">
         <span>
            {text} <small>{text1}</small>
         </span>
         <input
            className="w-[50px]"
            type="number"
            min={minPrice}
            placeholder={placeholder}
         />
      </div>
   )
}

const SearchButtonList: React.FC = () => {
   return <button type="button" className="p-[10px] bg-blue1 white rounded-none w-100 bold pointer click">Search</button>
}


export { InputListType1, InputListType2, InputListType3, SearchButtonList }
