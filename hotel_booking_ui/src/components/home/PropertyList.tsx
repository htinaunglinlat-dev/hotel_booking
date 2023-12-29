import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"

const propertyData = [
   "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
   "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
   "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
   "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
   "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg",
]

type PropertyListType = {
   type: string
   count: number
   imgUrl: string
}

const PropertyList: React.FC<PropertyListType> = ({type, count, imgUrl}) => {
   return (
      <div className="rounded-[10px] hidden flex-1">
         <img src={imgUrl} alt="" className="w-100 h-[150px] cover pointer" />
         <div className="d-flex justify-between items-center">
            <h1 className="font-[18px] pointer">{type}</h1>
            <span className="font-[14px] bold-300">{`${count} ${type}s`}</span>
         </div>
      </div>
   )
}

const PropertyContainer: React.FC = () => {
   const url = "/hotels/countByType"
   const { data, loading, error, fetchData } = useFetch<{type: string, count: number}[]>(url)
   useEffect( () => {
      fetchData()
   },[url])
   return(
      <div className="w-100 mw-[1024px] mx-auto mt-[50px]">
         <h2>Browse by property type</h2>
         <div className="mx-auto flex mw-[1024px] gap-[20px] justify-between">
            {  loading ? (
                  "loading please wait ..."
               ) : (
                  data?.map( (item,idx) => <PropertyList key={item.type} {...item} imgUrl={propertyData[idx]}  />)
               )}
         </div>
      </div>
   )
}


export default PropertyContainer