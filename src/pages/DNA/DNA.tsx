import React, { Suspense, useRef, useState } from "react"
import { Link } from "react-router-dom"
import * as THREE from 'three'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'
import { Canvas } from "@react-three/fiber"
import { ContactShadows, Environment, useGLTF, OrbitControls } from "@react-three/drei"
import { proxy, useSnapshot } from "valtio"

type GLTFResult = GLTF & {
    nodes: {
        mesh_0: THREE.Mesh
        mesh_1: THREE.Mesh
        mesh_2: THREE.Mesh
        mesh_3: THREE.Mesh
        mesh_4: THREE.Mesh
        mesh_5: THREE.Mesh
        mesh_6: THREE.Mesh
    }
    materials: {
        vmd_mat_cindex_0: THREE.MeshStandardMaterial
        vmd_mat_cindex_1: THREE.MeshStandardMaterial
        vmd_mat_cindex_10: THREE.MeshStandardMaterial
        vmd_mat_cindex_5: THREE.MeshStandardMaterial
        vmd_mat_cindex_8: THREE.MeshStandardMaterial
    }
}

const state = proxy({
    current: null,
})

function Model(props: JSX.IntrinsicElements['group']) {
    const group = useRef<THREE.Group>()
    const { nodes, materials } = useGLTF('/dna/scene.gltf') as GLTFResult
    const [hovered, set] = useState(null)
    return (
        <group ref={group} {...props} dispose={null}
            //@ts-ignore
            onPointerOver={(e) => (e.stopPropagation(), set(e.object.material.name))}
            onPointerOut={(e) => e.intersections.length === 0 && set(null)}
            onPointerMissed={() => (state.current = null)}
            //@ts-ignore
            onPointerDown={(e) => (e.stopPropagation(), (state.current = e.object.material.name))}
        >
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <mesh geometry={nodes.mesh_0.geometry} material={materials.vmd_mat_cindex_0} />
                <mesh geometry={nodes.mesh_1.geometry} material={materials.vmd_mat_cindex_1} />
                <mesh geometry={nodes.mesh_2.geometry} material={nodes.mesh_2.material} />
                <mesh geometry={nodes.mesh_3.geometry} material={nodes.mesh_3.material} />
                <mesh geometry={nodes.mesh_4.geometry} material={materials.vmd_mat_cindex_5} />
                <mesh geometry={nodes.mesh_5.geometry} material={nodes.mesh_5.material} />
                <mesh geometry={nodes.mesh_6.geometry} material={nodes.mesh_6.material} />
            </group>
        </group>
    )
}

function Details() {

    const snap = useSnapshot(state)
    if (snap.current === "vmd_mat_cindex_5") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
                <h1 className="text-3xl uppercase">Phosphate</h1>
                <p className="text-xl text-justify">A phosphate backbone is the portion of the DNA double helix that provides structural support to the molecule. DNA consists of two strands that wind around each other like a twisted ladder. Each strand has a backbone made of alternating sugar (deoxyribose) and phosphate groups.</p>
            </div>
        )
    }
    else if (snap.current === "vmd_mat_cindex_8") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
                <h1 className="text-3xl uppercase">Hydrogen</h1>
                <p className="text-xl text-justify">DNA contains four bases: Guanine, Cytosine, Adenine, and Thymine. The complementary base pairs of guanine with cytosine and adenine with thymine connect to one another using hydrogen bonds. These hydrogen bonds between complementary nucleotides are what keeps the two strands of a DNA helix together.</p>
            </div>
        )
    }
    else if (snap.current === "vmd_mat_cindex_1") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
                <h1 className="text-3xl uppercase">Oxygen</h1>
                <p className="text-xl text-justify">This gene carries the information for the amino acid sequence of one of the two types of subunits of the hemoglobin molecule, which carries oxygen in the blood. A different gene, the α-globin gene, carries the information for the other type of hemoglobin subunit (a hemoglobin molecule has four subunits, two of each type). </p>
            </div>
        )
    }
    else if (snap.current === "vmd_mat_cindex_0") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
                <h1 className="text-3xl uppercase">Base</h1>
                <p className="text-xl text-justify">There are four nucleotides, or bases, in DNA: adenine (A), cytosine (C), guanine (G), and thymine (T). These bases form specific pairs</p>
            </div>
        )
    }

    else {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
                <h1 className="text-2xl tracking-wider">Click on diffrent parts of DNA molecule to know more</h1>
                <p className="self-center mx-8 text-xl tracking-wide text-justify font-fontVollkorn">To view the 3D model in AR, scan the QR code or click on the button below.</p>

                <div className="grid justify-center grid-cols-1 gap-2 pb-8 mx-8 md:grid-cols-2 lg:grid-cols-2">
                    <img className="flex p-6 text-6xl rounded-xl h-48 w-48" src="https://storage.echoar.xyz/wispy-violet-4999/5aa2a630-068e-43c0-8ab3-05ba98dbd918" alt="Molecule QR" />
                    <a href="https://go.echoar.xyz/EQ1V" target="_blank" rel="noreferrer">
                        <button className="h-12 px-8 ml-8 text-base font-semibold tracking-wider text-white border rounded-full shadow-sm font-fontVollkorn mt-16 bg-red-50 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:shadow-lg">View in AR</button>
                    </a>
                </div>
            </div>
        )
    }
}

export default function DNA() {
    return (
        <>
            <div className="pt-24 bg-ARbg">

                <Link to="/chemMolecule" className="ml-8">Go Back</Link>

                <div className="grid w-full py-10 place-items-center">
                    <h1 className="pb-2 text-5xl font-semibold tracking-wide font-carattere lg:text-6xl">
                        DNA
                    </h1>
                    <div className="inline-flex h-1 bg-indigo-500 rounded-full w-72"></div>
                    <div className="font-fontVollkorn text-justify text-xl w-86 mt-2 mx-4 md:mx-44">Each strand of a DNA molecule is composed of a long chain of monomer nucleotides. The nucleotides of DNA consist of a deoxyribose sugar molecule to which is attached a phosphate group and one of four nitrogenous bases: two purines (adenine and guanine) and two pyrimidines (cytosine and thymine). This work is based on "DNA" (https://sketchfab.com/3d-models/dna-60e95170b37549e3b45ee490b74bb112) by holoxica (https://sketchfab.com/holoxica) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/). The sugar is then bound to the phosphate group by a hydrogen bond and the base by a ligation reaction. The nucleotides are connected by a double-stranded double-helix, which is the basis of the DNA molecule.
                    </div>
                </div>

                <div className="md:grid md:grid-cols-3 md:pr-15 pr-1">

                    <div className="w-full h-screen px-4 outline-none cursor-pointer md:col-span-2 lg:block">
                        <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
                            <ambientLight intensity={0.7} />
                            <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                            <Suspense fallback={null}>
                                <Model scale={0.2} />
                                <Environment preset="city" />
                                <ContactShadows rotation-x={Math.PI / 2} position={[0, -0.8, 0]} opacity={0.25} width={10} height={10} blur={1.5} far={0.8} />
                            </Suspense>
                            <OrbitControls autoRotate />
                        </Canvas>
                    </div>

                    <div className="mt-16 md:mt-0 md:col-span-1 p-4">
                        <Details />
                    </div>

                </div>

            </div>

        </>
    )
}
