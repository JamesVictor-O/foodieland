import Image from 'next/image'
import React from 'react'

const OtherRecipes = () => {
  return (
    <div className="hidden md:block w-[35%] ml-12">
              <h2 className="text-3xl">Other Recipe</h2>
              {/* recipes */}
              <div className="w-full mt-5 ">
                  <div className="w-full h-32  overflow-hidden  p-2 flex flex-row">
                      <div className="w-44 h-28 overflow-hidden rounded-xl">
                          <Image src="/recipe2/image2.png" alt="" className="w-full object-cover h-full" />
                      </div>
                      <div className="w-48 h-28 ml-8 flex flex-col justify-between">
                          <h2 className="font-semibold text-xl">Chicken Meatball with Creamy Chees...</h2>
                          <p className="font-medium text-sm">By Andreas Paula</p>
                       </div>
                  </div>


                  <div className="w-full h-32  overflow-hidden  p-2 flex flex-row">
                      <div className="w-44 h-28 overflow-hidden rounded-xl">
                          <Image src="/recipe2/image1.png" alt="" className="w-full object-cover h-full" />
                      </div>
                      <div className="w-48 h-28 ml-8 flex flex-col justify-between">
                          <h2 className="font-semibold text-xl">The Creamiest Creamy Chicken an...</h2>
                          <p className="font-medium text-sm">By Andreas Paula</p>
                       </div>
                  </div>


                  <div className="w-full h-32  overflow-hidden  p-2 flex flex-row">
                      <div className="w-44 h-28 overflow-hidden rounded-xl">
                          <Image src="/recipe2/image5.png" alt="" className="w-full object-cover h-full" />
                      </div>
                      <div className="w-48 h-28 ml-8 flex flex-col justify-between">
                          <h2 className="font-semibold text-xl">The Best Easy One Pot Chicken and Rice</h2>
                          <p className="font-medium text-sm">By Andreas Paula</p>
                       </div>
                  </div>
                
              </div>
          </div>
  )
}

export default OtherRecipes
