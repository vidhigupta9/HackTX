import { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Link } from "react-router-dom";

const Model = () => {
    const gltf = useLoader(GLTFLoader, "/triceratops/scene.gltf");
    return (
        <>
            <primitive object={gltf.scene} scale={0.45} />
        </>
    );
};

export default function Triceratops() {
    return (
        <>
        <div className="py-8 pt-36">
        <Link to="/museum" className="p-8">Go back</Link>

            <div className="md:grid md:grid-cols-3 md:mr-15 mr-1 sm:mx-4">

                <div className="w-full h-full px-4 outline-none cursor-pointer md:col-span-1 lg:block">
                    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
                        <ambientLight intensity={0.7} />
                        <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                        <Suspense fallback={null}>
                            <Model />
                            <Environment preset="city" />
                        </Suspense>
                        <OrbitControls autoRotate />
                    </Canvas>
                </div>

                <div className="mt-5 md:mt-0 md:col-span-2">
                    <div className="md:flex md:flex-col md:justify-center ">

                        <h2 className="self-center mx-8 mb-4 text-5xl font-medium tracking-wide text-black font-fontVollkorn">Triceratops</h2>

                        <p className="self-center mx-8 text-xl font-medium tracking-wide text-justify text-black font-fontVollkorn">Triceratops is an extinct genus of herbivorous chasmosaurine ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the Late Cretaceous period, about 68 million years ago in what is now North America. This work is based on "Triceratops" (https://sketchfab.com/3d-models/triceratops-909bf645de1746829ab19acd1ae31767) by D.art (https://sketchfab.com/D.art) licensed under CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
                        </p>

                        <p className="self-center mx-8 text-xl tracking-wide text-justify text-black font-fontVollkorn">To view the 3D model in AR, scan the QR code or click on the button below.</p>

                        <div className="grid justify-center grid-cols-1 gap-6 pb-8 mx-8 md:grid-cols-2 lg:grid-cols-2">
                            <img className="flex p-6 text-6xl rounded-xl h-64 w-64" src="https://storage.echo3d.co/shiny-wave-1052/ac9ee416-6d85-4c47-ac7a-27baac43ed93.png" alt="Earth QR" />
                            <a href="https://go.echo3d.co/VMwe" target="_blank" rel="noreferrer">
                                <button className="h-12 px-8 ml-12 text-base font-semibold tracking-wider text-white border rounded-full shadow-sm font-fontVollkorn lg:mt-36 sm:mt-4 bg-red-50 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:shadow-lg">View in AR</button>
                            </a>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    </>
    )
}
