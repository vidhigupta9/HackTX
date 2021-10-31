import React from 'react'
import { Link } from "react-router-dom"
import DNAImg from "../../assets/chemMolecule/DNA.jpg"
import SucroseImg from "../../assets/chemMolecule/Sucrose.jpg"
import GlucosideImg from "../../assets/chemMolecule/octyl_glucoside.jpeg"
import GlucoseImg from "../../assets/chemMolecule/Glucose.jpg"
import H2OImg from "../../assets/chemMolecule/H2O.jpg"

export default function ChemMolecule() {

    return (
        <div className="pt-16 bg-homeImg">
            <div className="grid w-full py-10 place-items-center text-center">
                <h1 className="pb-2 text-5xl font-semibold tracking-wide font-carattere lg:text-6xl">
                Museum
                </h1>
                <div className="inline-flex h-1 bg-indigo-500 rounded-full w-72"></div>
            </div>

            <div className="flex flex-wrap flex-col-2 justify-around w-full px-16 py-8">

                <Link to='/dna'>
                    <div className="m-8">
                        <div className="w-72 h-72 cursor-pointer transition duration-500 transform hover:scale-105">
                            <img className="pb-8 border-4 bg-white border-blue-600 rounded-lg" alt="" src={DNAImg} />
                            <div className="grid place-content-center mx-1 -mt-8 text-xl font-semibold text-gray-900 bg-homeImg font-sourceSerifPro">DNA</div>
                        </div>
                    </div>
                </Link>

                <Link to='/sucrose'>
                    <div className="m-8">
                        <div className="w-72 h-72 cursor-pointer transition duration-500 transform hover:scale-105">
                            <img className="pb-8 border-4 bg-white border-blue-600 rounded-lg" alt="" src=
                                {SucroseImg} />
                            <div className="grid place-content-center mx-1 -mt-8 text-xl font-semibold text-gray-900 bg-homeImg font-sourceSerifPro">Sucrose</div>
                        </div>
                    </div>
                </Link>

                <Link to='/glucoside'>
                    <div className="m-8">
                        <div className="w-72 h-72 cursor-pointer transition duration-500 transform hover:scale-105">
                            <img className="pb-8 border-4 bg-white border-blue-600 rounded-lg" alt="" src=
                                {GlucosideImg} />
                            <div className="grid place-content-center mx-1 -mt-8 text-xl font-semibold text-gray-900 bg-homeImg font-sourceSerifPro">Octyl Glucoside</div>
                        </div>
                    </div>
                </Link>

                <Link to='/glucose'>
                    <div className="m-8">
                        <div className="w-72 h-72 cursor-pointer transition duration-500 transform hover:scale-105">
                            <img className="pb-8 border-4 bg-white border-blue-600 rounded-lg" alt="" src=
                                {GlucoseImg} />
                            <div className="grid place-content-center mx-1 -mt-8 text-xl font-semibold text-gray-900 bg-homeImg font-sourceSerifPro">Glucose</div>
                        </div>
                    </div>
                </Link>

                <Link to='/h2oMolecule'>
                    <div className="m-8">
                        <div className="w-72 h-72 cursor-pointer transition duration-500 transform hover:scale-105">
                            <img className="pb-8 border-4 bg-white border-blue-600 rounded-lg" alt="" src=
                                {H2OImg} />
                            <div className="grid place-content-center mx-1 -mt-8 text-xl font-semibold text-gray-900 bg-homeImg font-sourceSerifPro">H2O Molecule</div>
                        </div>
                    </div>
                </Link>

                <div className="m-8">
                    <div className="w-72 h-72 cursor-pointer transition duration-500 transform hover:scale-105 border-4 border-blue-600 rounded-lg">
                        <div className="grid place-content-center text-3xl text-center items-center align-middle h-full font-semibold text-gray-900 bg-homeImg font-sourceSerifPro">More Molecules comming soon..</div>
                    </div>
                </div>

            </div>
        </div>
    )
}
