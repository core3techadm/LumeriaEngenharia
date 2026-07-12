"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  Float,
  RoundedBox,
} from "@react-three/drei";
import * as THREE from "three";

type ServiceSceneProps = {
  serviceId: string;
};

const COLORS = {
  forest: "#0f1f14",
  mid: "#1a3328",
  sage: "#b8d4b0",
  leaf: "#719968",
  gold: "#c8a96e",
  mint: "#e8f1ef",
  slate: "#455a58",
  white: "#f5f7f4",
};

function SceneLights({ accent = COLORS.sage }: { accent?: string }) {
  return (
    <>
      <ambientLight intensity={0.35} />
      <directionalLight
        position={[4, 6, 3]}
        intensity={1.1}
        color="#f8faf5"
        castShadow={false}
      />
      <pointLight position={[-3, 2, -2]} intensity={0.45} color={accent} />
      <spotLight
        position={[0, 5, 2]}
        angle={0.45}
        penumbra={0.8}
        intensity={0.55}
        color={COLORS.mint}
      />
    </>
  );
}

function GroundShadow() {
  return (
    <ContactShadows
      position={[0, -1.15, 0]}
      opacity={0.45}
      scale={8}
      blur={2.8}
      far={4}
      color="#000000"
    />
  );
}

/** Painéis solares com grade de células + sol suave */
function SolarScene() {
  const sun = useRef<THREE.Mesh>(null);
  const panels = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (sun.current) {
      sun.current.position.y = 1.15 + Math.sin(t * 0.6) * 0.06;
    }
    if (panels.current) {
      panels.current.rotation.y = Math.sin(t * 0.2) * 0.12;
    }
  });

  const cells = useMemo(() => {
    const items: [number, number][] = [];
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 6; col++) {
        items.push([col, row]);
      }
    }
    return items;
  }, []);

  return (
    <group>
      <SceneLights accent={COLORS.gold} />
      <mesh ref={sun} position={[0, 1.15, -0.6]}>
        <sphereGeometry args={[0.38, 48, 48]} />
        <meshStandardMaterial
          color={COLORS.gold}
          emissive={COLORS.gold}
          emissiveIntensity={1.4}
          roughness={0.25}
        />
      </mesh>
      <mesh position={[0, 1.15, -0.6]}>
        <sphereGeometry args={[0.55, 32, 32]} />
        <meshBasicMaterial color={COLORS.gold} transparent opacity={0.12} />
      </mesh>

      <group ref={panels} position={[0, -0.35, 0.2]} rotation={[-0.55, 0.15, 0]}>
        {[-1.05, 0, 1.05].map((x) => (
          <group key={x} position={[x, 0, 0]}>
            <RoundedBox args={[0.95, 0.06, 0.72]} radius={0.02} smoothness={4}>
              <meshPhysicalMaterial
                color="#0d1a14"
                metalness={0.85}
                roughness={0.18}
                clearcoat={0.4}
              />
            </RoundedBox>
            {cells.map(([col, row]) => (
              <mesh
                key={`${x}-${col}-${row}`}
                position={[
                  -0.36 + col * 0.13,
                  0.035,
                  -0.24 + row * 0.13,
                ]}
              >
                <boxGeometry args={[0.11, 0.01, 0.11]} />
                <meshPhysicalMaterial
                  color="#1e3a4a"
                  metalness={0.9}
                  roughness={0.12}
                  clearcoat={1}
                  clearcoatRoughness={0.15}
                  envMapIntensity={1.2}
                />
              </mesh>
            ))}
          </group>
        ))}
      </group>
      <GroundShadow />
    </group>
  );
}

/** Residência minimalista com nós de automação */
function AutomationScene() {
  const hubs = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (hubs.current) {
      hubs.current.children.forEach((child, i) => {
        const mesh = child as THREE.Mesh;
        const mat = mesh.material as THREE.MeshStandardMaterial;
        if (mat.emissiveIntensity !== undefined) {
          mat.emissiveIntensity = 0.55 + Math.sin(t * 2 + i) * 0.25;
        }
      });
    }
  });

  return (
    <group>
      <SceneLights accent={COLORS.sage} />
      <Float speed={1.1} floatIntensity={0.15} rotationIntensity={0.05}>
        <group position={[0, -0.2, 0]}>
          {/* Base / piso */}
          <RoundedBox
            args={[2.2, 0.08, 1.6]}
            radius={0.03}
            position={[0, -0.55, 0]}
          >
            <meshPhysicalMaterial
              color={COLORS.mid}
              roughness={0.55}
              metalness={0.2}
            />
          </RoundedBox>

          {/* Volume principal */}
          <RoundedBox args={[1.5, 0.95, 1.1]} radius={0.04} position={[0, 0, 0]}>
            <meshPhysicalMaterial
              color="#243d32"
              roughness={0.4}
              metalness={0.15}
              clearcoat={0.3}
            />
          </RoundedBox>

          {/* Telhado */}
          <mesh position={[0, 0.62, 0]} rotation={[0, Math.PI / 4, 0]}>
            <coneGeometry args={[1.15, 0.45, 4]} />
            <meshPhysicalMaterial
              color={COLORS.forest}
              roughness={0.5}
              metalness={0.1}
            />
          </mesh>

          {/* Janelas iluminadas */}
          {[
            [-0.35, 0.05, 0.56],
            [0.35, 0.05, 0.56],
          ].map((pos, i) => (
            <mesh key={i} position={pos as [number, number, number]}>
              <planeGeometry args={[0.35, 0.35]} />
              <meshStandardMaterial
                color={COLORS.mint}
                emissive={COLORS.sage}
                emissiveIntensity={0.9}
              />
            </mesh>
          ))}

          {/* Nós de conexão */}
          <group ref={hubs}>
            {[
              [-0.9, 0.35, 0.4],
              [0.95, 0.2, -0.3],
              [0, 1.05, 0],
            ].map((pos, i) => (
              <mesh key={i} position={pos as [number, number, number]}>
                <sphereGeometry args={[0.08, 24, 24]} />
                <meshStandardMaterial
                  color={COLORS.sage}
                  emissive={COLORS.leaf}
                  emissiveIntensity={0.7}
                />
              </mesh>
            ))}
          </group>

          {/* Arcos de conexão */}
          <mesh position={[-0.45, 0.5, 0.2]} rotation={[0, 0, -0.6]}>
            <torusGeometry args={[0.55, 0.008, 8, 48, Math.PI * 0.7]} />
            <meshBasicMaterial color={COLORS.sage} transparent opacity={0.35} />
          </mesh>
          <mesh position={[0.45, 0.45, -0.1]} rotation={[0.3, 0, 0.5]}>
            <torusGeometry args={[0.5, 0.008, 8, 48, Math.PI * 0.65]} />
            <meshBasicMaterial color={COLORS.leaf} transparent opacity={0.3} />
          </mesh>
        </group>
      </Float>
      <GroundShadow />
    </group>
  );
}

/** Speaker premium + ondas sonoras */
function AudioScene() {
  const waves = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (waves.current) {
      waves.current.children.forEach((child, i) => {
        const mesh = child as THREE.Mesh;
        const scale = 1 + Math.sin(t * 1.8 - i * 0.7) * 0.08;
        mesh.scale.setScalar(scale);
        const mat = mesh.material as THREE.MeshBasicMaterial;
        mat.opacity = 0.35 - i * 0.08 + Math.sin(t * 1.8 - i * 0.7) * 0.08;
      });
    }
  });

  return (
    <group>
      <SceneLights accent={COLORS.leaf} />
      <Float speed={1} floatIntensity={0.12} rotationIntensity={0.04}>
        <group position={[-0.35, -0.15, 0]} rotation={[0, 0.35, 0]}>
          {/* Corpo do speaker */}
          <RoundedBox args={[0.7, 1.5, 0.55]} radius={0.06} smoothness={6}>
            <meshPhysicalMaterial
              color="#121c16"
              metalness={0.5}
              roughness={0.25}
              clearcoat={0.6}
            />
          </RoundedBox>
          {/* Woofer */}
          <mesh position={[0, 0.15, 0.28]} rotation={[0, 0, 0]}>
            <cylinderGeometry args={[0.22, 0.22, 0.04, 48]} />
            <meshPhysicalMaterial
              color="#2a3d32"
              metalness={0.7}
              roughness={0.3}
            />
          </mesh>
          <mesh position={[0, 0.15, 0.3]}>
            <circleGeometry args={[0.12, 48]} />
            <meshStandardMaterial
              color={COLORS.sage}
              emissive={COLORS.leaf}
              emissiveIntensity={0.4}
            />
          </mesh>
          {/* Tweeter */}
          <mesh position={[0, -0.4, 0.28]}>
            <cylinderGeometry args={[0.1, 0.1, 0.04, 32]} />
            <meshPhysicalMaterial color="#1a2a22" metalness={0.8} roughness={0.2} />
          </mesh>
        </group>
      </Float>

      <group ref={waves} position={[0.55, 0.1, 0.2]}>
        {[0.45, 0.7, 0.95].map((r, i) => (
          <mesh key={r} rotation={[0, Math.PI / 2, 0]}>
            <torusGeometry args={[r, 0.012, 12, 64]} />
            <meshBasicMaterial
              color={COLORS.sage}
              transparent
              opacity={0.35 - i * 0.08}
            />
          </mesh>
        ))}
      </group>
      <GroundShadow />
    </group>
  );
}

/** Pendente arquitetural + cone de luz */
function LightingScene() {
  const glow = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    if (glow.current) {
      glow.current.intensity =
        1.6 + Math.sin(state.clock.elapsedTime * 1.4) * 0.25;
    }
  });

  return (
    <group>
      <SceneLights accent={COLORS.gold} />
      <pointLight
        ref={glow}
        position={[0, 0.35, 0]}
        color={COLORS.mint}
        intensity={1.6}
        distance={5}
      />

      {/* Cabo */}
      <mesh position={[0, 1.35, 0]}>
        <cylinderGeometry args={[0.012, 0.012, 0.8, 12]} />
        <meshStandardMaterial color="#2a3530" metalness={0.9} roughness={0.2} />
      </mesh>

      {/* Cúpula */}
      <Float speed={0.8} floatIntensity={0.08} rotationIntensity={0.02}>
        <group position={[0, 0.75, 0]}>
          <mesh>
            <sphereGeometry args={[0.42, 48, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
            <meshPhysicalMaterial
              color="#d8c4a0"
              metalness={0.85}
              roughness={0.18}
              clearcoat={1}
              side={THREE.DoubleSide}
            />
          </mesh>
          <mesh position={[0, -0.02, 0]} rotation={[Math.PI, 0, 0]}>
            <sphereGeometry args={[0.38, 32, 24, 0, Math.PI * 2, 0, Math.PI / 2.4]} />
            <meshPhysicalMaterial
              color={COLORS.mint}
              emissive={COLORS.gold}
              emissiveIntensity={0.35}
              transparent
              opacity={0.55}
              roughness={0.1}
            />
          </mesh>
        </group>
      </Float>

      {/* Cone de luz */}
      <mesh position={[0, -0.15, 0]}>
        <coneGeometry args={[0.85, 1.4, 32, 1, true]} />
        <meshBasicMaterial
          color={COLORS.mint}
          transparent
          opacity={0.07}
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>

      {/* Superfície iluminada */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.05, 0]}>
        <circleGeometry args={[1.1, 48]} />
        <meshStandardMaterial
          color={COLORS.mid}
          emissive={COLORS.gold}
          emissiveIntensity={0.15}
          roughness={0.8}
        />
      </mesh>
      <GroundShadow />
    </group>
  );
}

/** Fluxo elétrico / circuito limpo */
function ElectricalScene() {
  const pulse = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (pulse.current) {
      pulse.current.children.forEach((child, i) => {
        const mesh = child as THREE.Mesh;
        const mat = mesh.material as THREE.MeshStandardMaterial;
        mat.emissiveIntensity = 0.4 + Math.sin(t * 3 - i * 0.8) * 0.4;
      });
    }
  });

  const traces = useMemo(
    () => [
      { pos: [0, 0.15, 0.06] as [number, number, number], size: [1.4, 0.03, 0.02] as [number, number, number] },
      { pos: [-0.35, -0.1, 0.06] as [number, number, number], size: [0.03, 0.5, 0.02] as [number, number, number] },
      { pos: [0.4, 0.05, 0.06] as [number, number, number], size: [0.03, 0.35, 0.02] as [number, number, number] },
      { pos: [0.15, -0.25, 0.06] as [number, number, number], size: [0.55, 0.03, 0.02] as [number, number, number] },
    ],
    [],
  );

  return (
    <group>
      <SceneLights accent={COLORS.gold} />
      <Float speed={0.9} floatIntensity={0.1} rotationIntensity={0.06}>
        <group rotation={[0.15, -0.35, 0]}>
          <RoundedBox args={[1.9, 1.25, 0.08]} radius={0.04} smoothness={4}>
            <meshPhysicalMaterial
              color="#0c1611"
              metalness={0.4}
              roughness={0.35}
              clearcoat={0.5}
            />
          </RoundedBox>

          {/* Trilhas */}
          {traces.map((trace, i) => (
            <mesh key={i} position={trace.pos}>
              <boxGeometry args={trace.size} />
              <meshStandardMaterial
                color={COLORS.gold}
                emissive={COLORS.gold}
                emissiveIntensity={0.35}
                metalness={0.8}
                roughness={0.2}
              />
            </mesh>
          ))}

          {/* Nós / pads */}
          <group ref={pulse}>
            {[
              [-0.55, 0.35, 0.08],
              [0.55, 0.35, 0.08],
              [-0.35, -0.35, 0.08],
              [0.45, -0.2, 0.08],
              [0.15, 0.15, 0.08],
            ].map((pos, i) => (
              <mesh key={i} position={pos as [number, number, number]}>
                <cylinderGeometry args={[0.07, 0.07, 0.05, 24]} />
                <meshStandardMaterial
                  color={COLORS.gold}
                  emissive={COLORS.gold}
                  emissiveIntensity={0.6}
                  metalness={0.9}
                  roughness={0.15}
                />
              </mesh>
            ))}
          </group>

          {/* Chip central */}
          <RoundedBox args={[0.35, 0.35, 0.06]} radius={0.02} position={[0, 0.15, 0.08]}>
            <meshPhysicalMaterial
              color={COLORS.slate}
              metalness={0.6}
              roughness={0.25}
            />
          </RoundedBox>
        </group>
      </Float>
      <GroundShadow />
    </group>
  );
}

/** Volume arquitetônico moderno (gestão de obras) */
function ConstructionScene() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.25) * 0.2;
    }
  });

  return (
    <group>
      <SceneLights accent={COLORS.sage} />
      <group ref={group} position={[0, -0.35, 0]}>
        {/* Piso */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.02, 0]}>
          <planeGeometry args={[2.4, 2.4]} />
          <meshStandardMaterial color={COLORS.mid} roughness={0.9} />
        </mesh>

        {/* Volumes arquitetônicos */}
        <RoundedBox args={[0.7, 1.1, 0.7]} radius={0.02} position={[-0.45, 0.55, 0.1]}>
          <meshPhysicalMaterial
            color="#2d4a3a"
            roughness={0.35}
            metalness={0.2}
            clearcoat={0.25}
          />
        </RoundedBox>
        <RoundedBox args={[0.85, 0.7, 0.85]} radius={0.02} position={[0.4, 0.35, -0.15]}>
          <meshPhysicalMaterial
            color={COLORS.leaf}
            roughness={0.4}
            metalness={0.15}
          />
        </RoundedBox>
        <RoundedBox args={[0.45, 1.45, 0.45]} radius={0.02} position={[0.15, 0.72, 0.55]}>
          <meshPhysicalMaterial
            color={COLORS.sage}
            roughness={0.3}
            metalness={0.25}
            clearcoat={0.4}
          />
        </RoundedBox>

        {/* Detalhe de vidro */}
        <mesh position={[-0.45, 0.7, 0.46]}>
          <planeGeometry args={[0.4, 0.55]} />
          <meshPhysicalMaterial
            color={COLORS.mint}
            transparent
            opacity={0.35}
            metalness={0.9}
            roughness={0.05}
            emissive={COLORS.sage}
            emissiveIntensity={0.2}
          />
        </mesh>

        {/* Guia / eixo de projeto */}
        <mesh position={[0.9, 0.02, 0.9]}>
          <cylinderGeometry args={[0.015, 0.015, 0.9, 8]} />
          <meshStandardMaterial color={COLORS.gold} metalness={1} roughness={0.2} />
        </mesh>
        <mesh position={[0.9, 0.02, 0.9]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.015, 0.015, 0.7, 8]} />
          <meshStandardMaterial color={COLORS.gold} metalness={1} roughness={0.2} />
        </mesh>
      </group>
      <GroundShadow />
    </group>
  );
}

function SceneContent({ serviceId }: ServiceSceneProps) {
  switch (serviceId) {
    case "fotovoltaica":
      return <SolarScene />;
    case "automacao":
      return <AutomationScene />;
    case "sonorizacao":
      return <AudioScene />;
    case "luminotecnico":
      return <LightingScene />;
    case "projetos-eletricos":
      return <ElectricalScene />;
    case "gestao-obras":
      return <ConstructionScene />;
    default:
      return <SolarScene />;
  }
}

export function ServiceScene3D({ serviceId }: ServiceSceneProps) {
  return (
    <div className="relative h-full w-full min-h-[320px] overflow-hidden bg-[radial-gradient(ellipse_at_center,_#1a3328_0%,_#0f1f14_70%)]">
      {/* Vinheta sutil */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(15,31,20,0.55)_100%)]" />

      <Canvas
        camera={{ position: [0, 0.4, 4.2], fov: 38 }}
        dpr={[1, 1.75]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{ background: "transparent" }}
      >
        <fog attach="fog" args={["#0f1f14", 6, 14]} />
        <Environment preset="city" environmentIntensity={0.45} />
        <SceneContent serviceId={serviceId} />
      </Canvas>
    </div>
  );
}
