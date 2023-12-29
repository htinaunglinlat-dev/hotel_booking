const contentData = {
   places: ["Countries", "Regions","Cities", "Districts", "Airports", "Hotels"],
   buildings: ["Homes", "Apartments","Resorts", "Villas", "Hostels", "Guest houses"],
   options: ["Unique places to stay", "Reviews","Unpacked: Travel articles", "Travel communities", "Seasonal and holiday deals"],
   helps: ["Car rental", "Flight Finder", "Restaurant reservations","Travel Agents"],
   services: ["Customer Service","Partner Help","Careers","Sustainability","Press center","Safety Resource Center","Investor relations","Terms & conditions"]
}

type ListContainerProps = { data : string[] }

const ListContainer: React.FC<ListContainerProps> = ({data}) => {
   return(
      <ul className="list-style-none p-none">
         {data.map( (item, index) => <li key={index} className="mb-[10px] pointer list">{item}</li>)}
      </ul>
   )
}
const FooterContainer: React.FC = () => {
   return (
      <div className="w-100 mw-[1024px] font-[12px] mx-auto py-[30px] flex flex-col items-center">
         <div className="w-100 d-flex justify-between mb-[50px]">
            <ListContainer data={contentData.places} />
            <ListContainer data={contentData.buildings} />
            <ListContainer data={contentData.options} />
            <ListContainer data={contentData.helps} />
            <ListContainer data={contentData.services} />
         </div>
         <div className="bold gray">Copyright © 2022 Lamabooking.</div>
      </div>
   )
}

export default FooterContainer