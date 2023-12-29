import { useState } from "react";
import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/* ----------------------------------
            react-date-range npm pkg
---------------------------------- */
import { DateRange } from 'react-date-range';
import { format } from "date-fns"
/* ----------------------------------
            react-date-range npm style pkg
---------------------------------- */
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
/* ----------------------------------
            react-date-range npm style pkg
---------------------------------- */
// import { DateType, initialOptionsType, actionType, handleSearchType } from "../../pages/Header";
import { handleSearchType } from "../../pages/Header";
import { PlaceType, DateType, OptionsType, UserOptions } from "../../context/UserDataProvider";
import { actionType } from "./hello";

type InputType1Props = {
   setUserOptions: React.Dispatch<React.SetStateAction<UserOptions>>
}

const InputType1: React.FC<InputType1Props> = ({setUserOptions}) => {
   // console.log(userOptions)
   return(
      <div className="d-flex items-center gap-[10px]">
         <FontAwesomeIcon icon={faBed} className="lightgray" />
         <input type="text" placeholder="What are you going" className="b-none outline-none" onChange={e => setUserOptions(prev => {
            return{
               ...prev,
               place: e.target.value,
            }
         })} />
      </div>
   )
}

type InputType2 = {
   date: DateType
   setUserOptions: React.Dispatch<React.SetStateAction<UserOptions>> 
}

const InputType2: React.FC<InputType2> = ({date, setUserOptions}) => {
   const [openDate, setOpenDate] = useState<boolean>(false);
   return(
      <div className="d-flex items-center gap-[10px]">
         <FontAwesomeIcon icon={faCalendarDays} className="lightgray" />
         <span className="lightgray pointer" onClick={() => setOpenDate(prev => !prev)}>
            {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].startDate, "MM/dd/yyyy")}`}
         </span>
         {openDate && (
            <DateRange
               editableDateInputs={true}
               onChange={(item: any) => setUserOptions(prev => {
                  return{
                     ...prev,
                     date: [item.selection]
                  }
               })}
               moveRangeOnFirstSelection={false}
               ranges={date}
               className={"absolute top-[50px]"}
               minDate={new Date()}
            />
         )}
      </div>
   )
}

type InputType3 = {
   options: OptionsType
   dispatch: React.Dispatch<actionType>
}

const InputType3: React.FC<InputType3> = ({options, dispatch}) => {
   const [openOption, setOpenOption] = useState(false)
   return(
      <div className="d-flex items-center gap-[10px]">
            <FontAwesomeIcon icon={faPerson} className="lightgray" />
            <span className="lightgray pointer" onClick={() => setOpenOption(prev => !prev)}>{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
            {openOption && (
               <>
               {/* <div className="w-full h-full absolute bg-dark"></div> */}
               <div className="bg-white absolute top-[50px] gray shadow rounded-[5px] ">
                  {Object.entries(options).map( ([option,count]) => <DropDownForInputType3 key={option} option={option} count={count} dispatch={dispatch} />) }
               </div>
               </>
            )}
      </div>  
   )
}

type FormatTextFun = (str : string) => string

type DropDownForInputType3Props = {
   option: string
   count: number
   dispatch: React.Dispatch<actionType>
}

const DropDownForInputType3: React.FC<DropDownForInputType3Props> = ({option, count, dispatch}) => {
   // input -> adult output -> Adult
   const formatText: FormatTextFun = (str) => {
         return str.charAt(0).toUpperCase() + str.slice(1);
   }

   const increaseHandler = (event : React.MouseEvent<HTMLButtonElement>) => {
      const target = event.target as HTMLButtonElement;
      const validValues: Set<string> = new Set(["adult", "children", "room"]); // Valid values
      if (validValues.has(target.id)) {
         // const valueInfo: "adult" | "children" | "room" = target.id as "adult" | "children" | "room";
         const valueInfo = target.id as "adult" | "children" | "room";
         dispatch({ type: "INCREMENT", value: valueInfo });
      }
   }
   //  type choice = "adult" | "children" | "room" | {}
   const decreaseHandler = (event : React.MouseEvent<HTMLButtonElement>) => {
      const target = event.target as HTMLButtonElement;
      const validValues: Set<string> = new Set(["adult", "children", "room"]); // Valid values
      if (validValues.has(target.id)) {
         const valueInfo = target.id as "adult" | "children" | "room";
         dispatch({ type: "DECREMENT", value: valueInfo });
      }
   }
   return(
      <div className="w-[200px] flex justify-between m-[10px]">
         <span>{formatText(option)}</span>
         <div className="d-flex items-center  gap-[10px] black">
            <button type="button" className="w-[30px] h-[30px] blue1 b-blue1 pointer disabled" id={option}
               onClick={decreaseHandler} disabled={(option === "adult" || option === "room" ) && count === 1}
            >-</button>
            <span>{count}</span>
            <button type="button" className="w-[30px] h-[30px] blue1 b-blue1 pointer" id={option}
               onClick={increaseHandler}
            >+</button>
         </div>
      </div>
   )
}

type SearchTagProps = {
   handleSearch: handleSearchType
}

const SearchTag: React.FC<SearchTagProps> = ({handleSearch}) => {
   return(
      <div className="d-flex items-center gap-[10px]">
         <button className="white py-[10px] bg-blue1 b-none pointer rounded-[5px]" onClick={handleSearch}>Search</button>
      </div>
   )
}

export { InputType1, InputType2, InputType3, SearchTag };
