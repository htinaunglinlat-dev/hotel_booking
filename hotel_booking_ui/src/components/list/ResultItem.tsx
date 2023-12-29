const SearchItem = () => {
  return (
    <div className="b-lightgray p-[10px] rounded-[5px] d-flex justify-between gap-[20px] mb-[20px]">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        className="w-[200px] h-[200px] cover"
      />
      <div className="d-flex flex-col gap-[10px] flex-2">
        <h1 className="blue1 font-[20px]">Tower Street Apartments</h1>
        <span className="font-[12px]">500m from center</span>
        <span className="font-[12px] bg-green white w-fit p-[3px] rounded-[5px]">Free airport taxi</span>
        <span className="font-[12px] bold">
          Studio Apartment with Air conditioning
        </span>
        <span className="font-[12px]">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="font-[12px] green bold">Free cancellation </span>
        <span className="font-[12px] green">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="flex-1 d-flex flex-col justify-between">
        <div className="flex justify-between">
          <span className="bold">Excellent</span>
          <button className="bg-blue white padding-[5px] bold rounded-none">8.9</button>
        </div>
        <div className="right d-flex flex-col gap-[5px]">
          <span className="font-[24px]">$112</span>
          <span className="font-[12px] gray">Includes taxes and fees</span>
          <button className="bg-blue white bold py-[10px] px-[5px] rounded-none pointer rounded-[5px]">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;