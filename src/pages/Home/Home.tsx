import React from 'react'
import { Link } from 'react-router-dom'
import HomeImg from "../../assets/home-img.png"

export default function Home() {

    return (
        <>
            <div className=" md:pt-24 bg-homeImg h-screen w-full">
                <div className="p-4 origin-bottom-right lg:mx-36 md:mx-8">
                    <div className="p-4 space-y-10 md:space-y-0 md:grid md:grid-cols-2">

                        <div className="pr-4 md:flex md:flex-col md:justify-center align-middle pt-24">

                            <h2 className="self-center mb-4 text-5xl font-bold tracking-wider text-indigo-800 font-carattere md:text-4xl lg:text-7xl">AR Museum</h2>

                            <p className="self-center text-xl tracking-wide text-justify font-sourceSerifPro">AR Museum is an AR-based web platform which allow users of Cuseum-powered apps to experience the artworks from the comfort of their homes. Users will be able to virtually place objects onto their home and revel in artworks that are typically only available to view inside a museum setting. </p>

                            <Link to="/chemMolecule" className="md:w-1/3">
                                <button className="p-2 px-8 mt-4 text-base font-semibold tracking-wider text-white border rounded-full shadow-sm font-sourceSerifPro md:w-full bg-red-50 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:shadow-lg ">Explore</button>
                            </Link>

                        </div>

                        <div className="h-full">
                            <img src={HomeImg} alt="img" className="w-full " />
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}
