import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import MailList from "../components/home/MailList";
import FooterContainer from "../components/home/Footer";
import { Outlet } from "react-router-dom";

const photos = [
   {
     src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
   },
   {
     src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
   },
   {
     src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
   },
   {
     src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
   },
   {
     src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
   },
   {
     src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
   },
];
const Hotel: React.FC<{children: React.ReactNode}> = ({children}) => {
   const [slideNumber, setSlideNumber] = useState(0);
   const [open, setOpen] = useState(false);
   
   const handleOpen: (i:number) => void = (i) => {
      setSlideNumber(i);
      setOpen(true);
   };

   const handleMove: (direction: String) => void = (direction) => {
      let newSlideNumber;

      if (direction === "l") {
         newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
      } else {
         newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
      }

      setSlideNumber(newSlideNumber)
   };

   // useEffect(() => {
   //    if(open === true) {
   //       const blockScroll = e => {
   //          e.preventDefault();
   //        };
      
   //        // Event listeners to block scroll
   //        document.addEventListener('wheel', blockScroll, { passive: false });
   //        document.addEventListener('touchmove', blockScroll, { passive: false });
      
   //        // Clean up event listeners when component unmounts
   //        return () => {
   //          document.removeEventListener('wheel', blockScroll);
   //          document.removeEventListener('touchmove', blockScroll);
   //        };
   //    }
   
   //    return () => {
         
   //    }
   // }, [open])
   

   return (
      <div>
         {open && (
            <div className="sticky top-[0px] left-[0px] h-full bg-1 z-999 flex items-center">
               <FontAwesomeIcon
               icon={faCircleXmark}
               className="absolute top-[20px] right-[20px] font-[30px] lightgray pointer"
               onClick={() => setOpen(false)}
               />
               <FontAwesomeIcon
               icon={faCircleArrowLeft}
               className="m-[20px] font-[50px] lightgray pointer"
               onClick={() => handleMove("l")}
               />
               <div className="w-100 h-100 flex justify-center items-center">
               <img src={photos[slideNumber].src} alt="" className="w-80 h-[80vh]" />
               </div>
               <FontAwesomeIcon
               icon={faCircleArrowRight}
               className="m-[20px] font-[50px] lightgray pointer"
               onClick={() => handleMove("r")}
               />
            </div>
         )}
         {children}
         {/* <Navbar />
         <Header type="list" /> */}
         <div className="d-flex flex-col items-center mt-[20px]">
         <div className="w-100 mw-[1024px] d-flex flex-col gap-[10px] relative">
            <button className="absolute top-[10px] right-none b-none py-[10px] px-[20px] bg-blue white bold rounded-[5px] pointer">Reserve or Book Now!</button>
            <h1 className="font-[24px]">Tower Street Apartments</h1>
            <div className="font-[12px] flex items-center gap-[10px]">
               <FontAwesomeIcon icon={faLocationDot} />
               <span>Elton St 125 New york</span>
            </div>
            <span className="blue bold">
               Excellent location – 500m from center
            </span>
            <span className="green bold justify-between">
               Book a stay over $114 at this property and get a free airport taxi
            </span>
            <div className="flex wrap">
               {photos.map((photo, i) => (
               <div className="w-1/3" key={i}>
                  <img
                     onClick={() => handleOpen(i)}
                     src={photo.src}
                     alt=""
                     className="w-100 cover pointer"
                  />
               </div>
               ))}
            </div>
            <div className="flex justify-between gap-[20px] mt-[20px] ">
               <div className="flex-3">
               <h1 className="hotelTitle">Stay in the heart of City</h1>
               <p className="font-[14px] mt-[20px]">
                  Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                  Street Apartments has accommodations with air conditioning and
                  free WiFi. The units come with hardwood floors and feature a
                  fully equipped kitchenette with a microwave, a flat-screen TV,
                  and a private bathroom with shower and a hairdryer. A fridge is
                  also offered, as well as an electric tea pot and a coffee
                  machine. Popular points of interest near the apartment include
                  Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                  airport is John Paul II International Kraków–Balice, 16.1 km
                  from Tower Street Apartments, and the property offers a paid
                  airport shuttle service.
               </p>
               </div>
               <div className="flex-1 bg-white1 p-[20px] flex flex-col gap-[20px] rounded-[5px]">
                  <h1 className="font-[18px] gray2">Perfect for a 9-night stay!</h1>
                  <span className="font-[14px]">
                     Located in the real heart of Krakow, this property has an
                     excellent location score of 9.8!
                  </span>
                  <h2 className="bold">
                     <b>$945</b> (9 nights)
                  </h2>
                  <button className="rounded-none py-[10px] px-[20px] bg-blue white bold pointer rounded-[5px] click">Reserve or Book Now!</button>
               </div>
            </div>
         </div>
         {/* <MailList /> */}
         {/* <Footer /> */}
            <MailList />
            <FooterContainer />
         </div>
      </div>
   );
};

export default Hotel;