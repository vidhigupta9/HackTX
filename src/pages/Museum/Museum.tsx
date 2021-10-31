import React from 'react'
import { Link } from "react-router-dom"
import StegosaurusImg from "../../assets/Museum/Stegosaurus.jpeg"
import TRexSkeletonImg from "../../assets/Museum/T-Rex_skeleton.jpeg"
import TRexImg from "../../assets/Museum/T-Rex.jpeg"
import TriceratopsSkullImg from "../../assets/Museum/Triceratops-skull.jpeg"
import TriceratopsImg from "../../assets/Museum/Triceratops.jpeg"

export default function Museum() {

    return (
        <div className="pt-16 bg-homeImg">
            <div className="grid w-full py-10 place-items-center text-center">
                <h1 className="pb-2 text-5xl font-semibold tracking-wide font-carattere lg:text-6xl">
                    Museum
                </h1>
                <div className="inline-flex h-1 bg-indigo-500 rounded-full w-48"></div>
            </div>

            <div className="flex flex-wrap flex-col-2 justify-around w-full px-16 py-8">

                <Link to='/triceratops'>
                    <div className="m-8">
                        <div className="w-72 h-72 cursor-pointer transition duration-500 transform hover:scale-105">
                            <img className="pb-8 border-4 bg-white border-blue-600 rounded-lg" alt="" src={TriceratopsImg} />
                            <div className="grid place-content-center mx-1 -mt-8 text-xl font-semibold text-gray-900 bg-homeImg font-sourceSerifPro">Triceratops</div>
                        </div>
                    </div>
                </Link>

                <Link to='/triceratopsSkull'>
                    <div className="m-8">
                        <div className="w-72 h-72 cursor-pointer transition duration-500 transform hover:scale-105">
                            <img className="pb-8 border-4 bg-white border-blue-600 rounded-lg" alt="" src={TriceratopsSkullImg} />
                            <div className="grid place-content-center mx-1 -mt-8 text-xl font-semibold text-gray-900 bg-homeImg font-sourceSerifPro">Triceratops Skull</div>
                        </div>
                    </div>
                </Link>

                <Link to='/stegosaurus'>
                    <div className="m-8">
                        <div className="w-72 h-72 cursor-pointer transition duration-500 transform hover:scale-105">
                            <img className="pb-8 border-4 bg-white border-blue-600 rounded-lg" alt="" src={StegosaurusImg} />
                            <div className="grid place-content-center mx-1 -mt-8 text-xl font-semibold text-gray-900 bg-homeImg font-sourceSerifPro">Stegosaurus</div>
                        </div>
                    </div>
                </Link>

                <Link to='/TRexSkeleton'>
                    <div className="m-8">
                        <div className="w-72 h-72 cursor-pointer transition duration-500 transform hover:scale-105">
                            <img className="pb-8 border-4 bg-white border-blue-600 rounded-lg" alt="" src={TRexSkeletonImg} />
                            <div className="grid place-content-center mx-1 -mt-8 text-xl font-semibold text-gray-900 bg-homeImg font-sourceSerifPro">T-Rex Skeleton</div>
                        </div>
                    </div>
                </Link>

                <Link to='/trex'>
                    <div className="m-8">
                        <div className="w-72 h-72 cursor-pointer transition duration-500 transform hover:scale-105">
                            <img className="pb-8 border-4 bg-white border-blue-600 rounded-lg" alt="" src={TRexImg} />
                            <div className="grid place-content-center mx-1 -mt-8 text-xl font-semibold text-gray-900 bg-homeImg font-sourceSerifPro">T-Rex</div>
                        </div>
                    </div>
                </Link>

                <div className="m-8">
                    <div className="w-72 h-72 cursor-pointer transition duration-500 transform hover:scale-105 border-4 border-blue-600 rounded-lg">
                        <div className="grid place-content-center text-3xl text-center items-center align-middle h-full font-semibold text-gray-900 bg-homeImg font-sourceSerifPro">More Models comming soon..</div>
                    </div>
                </div>

            </div>
        </div>
    )
}
