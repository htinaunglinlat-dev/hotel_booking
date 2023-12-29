const featurePropertyData = [
   {
      url: "https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1",
      name:"Aparthotel Stare Miasto",
      city: "Madrid",
      price: "Starting from $120",
      rating: { star: 8.9, condition: "Excellent" },
   },
   {
      url: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1",
      name: "Comfort Suites Airport",
      city: "Austin",
      price: "Starting from $140",
      rating: { star: 9.3, condition: "Exceptional"}
   },
   {
      // url: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/232902339.jpg?k=3947def526b8af0429568b44f9716e79667d640842c48de5e66fd2a8b776accd&o=&hp=1",
      url: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1",
      name: "Four Seasons Hotel",
      city: "Lisbon",
      price: "Starting from $99",
      rating: { star: 8.8, condition: "Excellent" }
   },
   {
      // url: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1",
      url: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1",
      name: "Hilton Garden Inn",
      city: "Berlin",
      price: "Starting from $105",
      rating: { star: 8.9, condition: "Excellent" }
   },
]

type FeaturePropertyListType = {
   url: string
   name: string
   city: string
   price: string
   rating: {
      star: number
      condition: string
   }  
}

const FeaturePropertyList: React.FC<FeaturePropertyListType> = ({url, name, city, price, rating}) => {
   return (
      <div className=" hidden pointer flex-1 flex flex-col gap-[5px]">
         <img src={url} alt="" className="w-100 h-[150px] cover" />
         <span className="bold">{name}</span>
         <span>{city}</span>
         <span className="bold-500">{price}</span>
         <div>
            <button type="button" className="bg-blue b-none white mr-[10px] p-[3px] bold">{rating.star}</button>
            <span className="font-[14px]">{rating.condition}</span>
         </div>
      </div>
   )
}

const FeaturePropertyContainer: React.FC = () => {
   return(
      <div className="w-100 mw-[1024px] mx-auto mt-[50px]">
         <h2>Browse by property type</h2>
         <div className="mx-auto flex mw-[1024px] gap-[20px] justify-between">
            {featurePropertyData.map( item => <FeaturePropertyList key={item.city} {...item} />)}
         </div>
      </div>
   )
}


export default FeaturePropertyContainer