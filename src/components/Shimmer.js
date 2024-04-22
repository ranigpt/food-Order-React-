const Shimmer =()=>{
    return <div className="flex flex-wrap">
        {Array(10)
        .fill("")
        .map((e,index)=>(
            <div className=" w-52 h-52 bg-gray-200 m-2  rounded-md shadow-md border-emerald-100" key={index}></div>
        ))
            
            
            
           }
    </div>
}

export default Shimmer;