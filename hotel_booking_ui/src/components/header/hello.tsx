import { useState, useReducer, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { faBed, faCalendarDays, faCar, faColonSign, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/* ----------------------------------
            Component
---------------------------------- */
import { InputType1, InputType2, InputType3, SearchTag } from "../components/header/SearchBoxContainerTag";
// Context 
import { useSearchDataContext } from "../context/UserDataProvider";

export type DateType = {
   startDate: Date;
   endDate: Date;
   key: string;
}[]

export type initialOptionsType = {
   adult: number
   children: number
   room: number
}

export type actionType = {
   type: "INCREMENT" | "DECREMENT"
   value: "adult" | "children" | "room"
}

const initialOptions = {
   adult: 1,
   children: 0,
   room: 1,
}

const reducer = (state : initialOptionsType, action: actionType) => {
   // console.log(state, typeof action.value);
   switch(action.type) {
      case "INCREMENT":
         return {
            ...state,
            [action.value] : state[action.value] + 1
         }
         break;
      case "DECREMENT":
         return {
            ...state,
            [action.value]: state[action.value] ? state[action.value] - 1 : state[action.value],
         }
         break;
      default:
         return state;
   }
}

export type handleSearchType = () => void

// type NavigateOptions = {
//    state?: {
//       destination: string
//       date: DateType
//       options: initialOptionsType
//    }
// }

const Header = () => {
   // const [height, setHeight] = useState<number>(0);
   // const [float, setFloat] = useState<boolean>(false);
   // console.log(AuthContext)
   const navigate = useNavigate();
   const [destination, setDestination] = useState<string | "">("")
   const [date, setDate] = useState<DateType>([
      {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
      }
   ]);
   const [options, dispatch] = useReducer(reducer, initialOptions as initialOptionsType);

   // useEffect( () => {
   //    window.addEventListener("scroll", () => {
   //       setHeight(window.scrollY);
   //       // console.log("=> ",height)
   //       if(height >= 356) {
   //          setFloat(true)
   //       } else {
   //          setFloat(false);
   //       }
   //    })
   //    // console.log("hello world")
   // },[height])

   const handleSearch: handleSearchType = () => {
      navigate("/hotels", {
         state: {
            destination,
            date,
            options
         }
      })
   }


   // console.log(faBed) // return obj;
   return(
      <div className="bg-blue white d-flex justify-center items-center relative pb-[75px]">
         <div className="d-flex flex-col items-start w-100 mw-[1024px] gap-[10px]">
            <h1>A lifetime of discount? It's is Genius.</h1>
            <p className="my-[20px]">Get rewarded for your travels - unlock instant savings of 10% or more with a free Lamabooking account</p>
            <button type="button" className="bg-blue1 b-none white p-[10px] pointer">Sign In / Register</button>
            {/* ................ Search BOx Container ................. */}
            {/* <div id="hello" className={`${float ? "fixed" : "absolute"} h-[30px] bg-white b-yellow d-flex items-center justify-around py-[10px] px-none rounded-[5px] bottom-[-25px] w-100 mw-[1024px] mt-[20px] z-2 `}> */}
            <div id="hello" className={`absolute h-[30px] bg-white b-yellow d-flex items-center justify-around py-[10px] px-none rounded-[5px] bottom-[-25px] w-100 mw-[1024px] mt-[20px] z-2 `}>
               <InputType1 setDestination={setDestination} />
               <InputType2 date={date} setDate={setDate} />
               <InputType3 options={options} dispatch={dispatch} />
               <SearchTag handleSearch={handleSearch} />
            </div>
            {/* ....................................................... */}
         </div>
      </div>
   )
}

export default Header;