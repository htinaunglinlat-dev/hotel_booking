import { useEffect } from "react"
import useFetch from "./../../hooks/useFetch.ts"

const featureData = [
   {
      url: "https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=",
      name: "Berlin"
   },
   {
      url: "https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o=",
      name: "Madrid"
   },
   {
      url: "https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o=",
      name: "London"
   }
]

type FeaturedProps = {
   url: string
   name: string
   count: number
}

const Featured: React.FC<FeaturedProps> = ({url, name, count}) => {
   return(
         <div className="rounded-[10px] relative white hidden h-[250px] overlay pointer">
            <img src={url} className="w-100 cover" />
            <div className="absolute bottom-[10px] left-[20px]">
               <h1>{name}</h1>
               <h2>{count} properties</h2>
            </div>
         </div>
   )
}

const HomeContainer: React.FC = () => {
   const url = "/hotels/countByCity?cities=berlin,madrid,london"
   const { data, loading, error, fetchData } = useFetch<number[]>(url)
   useEffect( () => {
      fetchData()
   },[url])
   const displayData = data ? data : [0,0,0]
   console.log("=>",data)
   return (
      // <div className="mt-[50px] flex flex-col gap-[30px] mw-[1024px] mx-auto">
         <div className="w-100 mw-[1024px] flex justify-between gap-[20px] mx-auto mt-[50px]">
            { loading ? (
                  "loading please wait"
               ) : (
               featureData.map( (item, index) => <Featured key={item.name} {...item} count={displayData[index]} />)
            )}
         </div>
      // </div>
   )
}

export default HomeContainer;