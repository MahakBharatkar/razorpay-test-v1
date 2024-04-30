import React from 'react'

const ProductCard = ({amount, img, checkoutHandler}) => {
  return (
    <div className="w-72 cursor-pointer bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <img src={img}
                    alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
            <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
                <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">₹{amount}</p>
                    <del>
                        <p className="text-sm text-gray-600 cursor-auto ml-2">₹299</p>
                    </del>

                    <button type="button" onClick={()=>checkoutHandler(amount)} className="ml-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Buy Now</button>
                
                </div>
            </div>
        
    </div>
  )
}

export default ProductCard