import {
  Loader,
  PerspectiveCamera,
  PresentationControls,
  Stage,
  useGLTF,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { AiFillFacebook, AiOutlineTwitter } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import { Button } from "@material-tailwind/react";
import angleToRaidian from "../utility/angleToRaidian";
import { Link } from "react-router-dom";

// const group = useRef()
const Model = (props: any): any => {
  const { scene } = useGLTF("/Benz.glb");
  // const { actions } = useAnimations(animations, group)
  return <primitive object={scene} {...props} />;
};

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row py-12 lg:py-16 lg:pb-40 justify-center gap-4 md:gap-8 px-4 md:px-12 ">
      <div className="flex flex-col flex-wrap  lg:w-1/3 items-start gap-24 lg:gap-24">
        <div className="text-7xl font-bold flex flex-col gap-4">
          <h1>Begin Your</h1>
          <h1 className="text-teal-400">3D Modeling</h1>
          <h1 className="text-teal-400">Course</h1>
          <h1>For Free.</h1>
        </div>

        <div>
          <Link to="/register">
            <Button color="teal" size="lg" className="button-3d4p">
              get started
            </Button>
          </Link>
          <div className="text-2xl flex flex-row  justify-between p-3">
            <span className="hover:text-teal-400 hover:cursor-pointer">
              <Link to="https://www.facebook.com/">
                <AiFillFacebook />
              </Link>
            </span>
            <span className="hover:text-teal-400 hover:cursor-pointer">
              <Link to="https://twitter.com/i/flow/login?redirect_after_login=%2Flogin%3Flang%3Dth">
                <AiOutlineTwitter />
              </Link>
            </span>
            <span className="hover:text-teal-400 hover:cursor-pointer">
              <Link to="https://discord.com/">
                <BsDiscord />
              </Link>
            </span>
          </div>
        </div>
      </div>

      <div className="bg-zinc-700 min-h-full hidden lg:block overflow-hidden relative w-1/3 ">
        <Canvas dpr={[1, 2]} shadows>
          <Suspense fallback={null}>
            <PerspectiveCamera
              makeDefault
              zoom={1.4}
              position={[0, 1, 5]}
              fov={50}
            />
            {/* <color attach="background" args={['#2d2d30']} /> */}
            <PresentationControls
              speed={1.5}
              global
              zoom={0.7}
              polar={[-0.1, Math.PI / 4]}
            >
              <Stage preset={"soft"} environment={"city"} shadows>
                <Model scale={1} rotation={[0, angleToRaidian(-15), 0]} />
              </Stage>
            </PresentationControls>
          </Suspense>
        </Canvas>
        <Loader />
      </div>
    </div>
  );
};

export default Hero;
