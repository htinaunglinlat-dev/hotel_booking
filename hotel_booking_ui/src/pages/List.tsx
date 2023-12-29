// import "./list.css";
// import { useLocation } from "react-router-dom";
// import { useState } from "react";
// import { format } from "date-fns";
// import { DateRange } from "react-date-range";
// import SearchItem from "../../components/searchItem/SearchItem";
import SearchItem from "../components/list/ResultItem";
import { InputListType1, InputListType2, InputListType3, SearchButtonList } from "../components/list/SearchItem";
import { useSearchDataContext } from "../context/UserDataProvider";

const List: React.FC = () => {
  const [ userOptions, setUserOptions ] = useSearchDataContext();
  // const location = useLocation();
  // const [date, setDate] = useState(location.state.date);
  // const [openDate, setOpenDate] = useState(false);
  // const [options, setOptions] = useState(location.state.options);
  return (
    <div>
      <div className="d-flex justify-center mt-[20px]">
        <div className="w-100 mw-[1024px] d-flex gap-[20px]">
          <div className="flex-1 bg-orange p-[10px] rounded-[10px] sticky top-[10px] h-fit">
            <h1 className="lsTitle">Search</h1>
            {/* <div className="lsItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div> */}
            <InputListType1 userOptions={userOptions} setUserOptions={setUserOptions} />
            {/* <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(
                date[0].endDate,
                "MM/dd/yyyy"
              )}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item: any) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div> */}
            <InputListType2 userOptions={userOptions} setUserOptions={setUserOptions} />
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                {/* <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                */}
                {/*
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.room}
                  />
                </div> */}
                <InputListType3 text={"Min price"} text1={"per night"} minPrice={0} />
                <InputListType3 text={"Max price"} text1={"per night"} minPrice={0} />
                <InputListType3 text={"Adult"} minPrice={1} placeholder={userOptions.options.adult.toString()} />
                <InputListType3 text={"Children"} minPrice={0} placeholder={userOptions.options.children.toString()} />
                <InputListType3 text={"Room"} minPrice={1} placeholder={userOptions.options.room.toString()} />
              </div>
            </div>
            {/* <button>Search</button> */}
            <SearchButtonList />
          </div>
          <div className="flex-3">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;