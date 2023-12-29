import { faBed, faCar, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

const HeaderLists = [
   {
      icon: faBed,
      iconText: "Stays",
      route: "/",
   },
   {
      icon: faPlane,
      iconText: "Fights",
      route: "flights"
   },
   {
      icon: faCar,
      iconText: "Cars rentals",
      route: "rentals"
   },
   {
      icon: faBed,
      iconText: "Attractions",
      route: "attractions"
   },
   {
      icon: faTaxi,
      iconText: "Airport Taxi",
      route: "taxi"
   },
]


const NavBarContainer: React.FC = () => {
   return(
      <>
         <CompanyLogo />
         <NavBar />
      </>
   )
}

const CompanyLogo: React.FC = () => {
   return(
      <div className="d-flex h-[50px] bg-blue justify-center">
         <div className="w-100 mw-[1024px] white bold-500 d-flex justify-between items-center">
            <span className="font-[2rem] bolder">Lama Booking</span>
            <div>
               <button className="b-none ml-[20px] px-[10px] py-[5px] pointer blue " type="button">Register</button>
               <button className="b-none ml-[20px] px-[10px] py-[5px] pointer blue " type="button">Login</button>
            </div>
         </div>
      </div>
   )
}

const NavBar: React.FC = () => {  
   return(
      <div className="bg-blue white d-flex justify-center">
         {/* <div className="w-100 mw-[1024px] mt-[20px] mb-[100px] mx-0"> */}
         <div className="w-100 mw-[1024px] mt-[20px] mb-[20px] mx-0">
            <div className="d-flex gap-[40px]">
               {HeaderLists.map( (item, index) => <NavListItem key={index} {...item} />)}
            </div>
         </div>
      </div>
   )
}

type NavListItemProps = {
   icon: any
   iconText: string
   route: string
}

const NavListItem: React.FC<NavListItemProps> = ({icon, iconText, route}) => { // active = false
   return(
      // <NavLink className={`d-flex items-center gap-[10px] ${active ? "active" : ""}`} to={"/"}>
      <NavLink className={`d-flex items-center gap-[10px] font-none white click`} to={route}>
         <FontAwesomeIcon icon={icon} />
         <span>{iconText}</span>
      </NavLink>
   )
}

export default NavBarContainer;