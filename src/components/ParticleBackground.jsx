import React, { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function ExplodingParticles() {
  const pointsRef = useRef();
  const numParticles = 10000; // 💥 Increase particle count here

  // Random final positions (spread out)
  const randomPositions = useMemo(() => {
    const arr = new Float32Array(numParticles * 3);
    for (let i = 0; i < arr.length; i++) arr[i] = (Math.random() - 0.5) * 6;
    return arr;
  }, [numParticles]);

  // Start positions (clustered near center)
  const startPositions = useMemo(() => {
    const arr = new Float32Array(numParticles * 3);
    for (let i = 0; i < arr.length; i++) arr[i] = (Math.random() - 0.5) * 0.2;
    return arr;
  }, [numParticles]);

  // Working positions array
  const positions = useMemo(() => new Float32Array(startPositions), [startPositions]);

  let exploded = false;

  useFrame(() => {
    if (!pointsRef.current) return;
    const attr = pointsRef.current.geometry.attributes.position.array;

    // Explosion outward (once)
    if (!exploded) {
      let complete = true;
      for (let i = 0; i < attr.length; i++) {
        attr[i] += (randomPositions[i] - attr[i]) * 0.04;
        if (Math.abs(randomPositions[i] - attr[i]) > 0.01) complete = false;
      }
      if (complete) exploded = true;
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }

    // Continuous rotation
    pointsRef.current.rotation.y += 0.001;
    pointsRef.current.rotation.x += 0.0005;
  });

  return (
    <Points ref={pointsRef} positions={positions}>
      <PointMaterial
        transparent
        color="#00ffff"
        size={0.015}       // smaller size for 10k particles
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

export default function ParticleBackground() {
  return (
    <Canvas
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 0,
      }}
      camera={{ position: [0, 0, 6] }}
      dpr={[1, 2]} // better performance
    >
      <ambientLight />
      <ExplodingParticles />
    </Canvas>
  );
}
