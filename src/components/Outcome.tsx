import { PerspectiveCamera, PresentationControls, Stage, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'

const Model = (props: any): any => {
  const { scene } = useGLTF('/Donut.glb')
  return <primitive object={scene} {...props} />
}

const Outcome = () => {
  return (
    <div className="h-64">
      {' '}
      <Canvas dpr={[1, 2]} shadows>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault zoom={1.4} position={[0, 1, 5]} fov={50} />
          {/* <color attach="background" args={['#2d2d30']} /> */}
          <PresentationControls speed={1.5} global zoom={0.7} polar={[-0.1, Math.PI / 4]}>
            <Stage preset={'soft'} environment={'city'} shadows>
              <Model scale={1} />
            </Stage>
          </PresentationControls>
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Outcome
