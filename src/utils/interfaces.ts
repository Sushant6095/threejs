// store what keys are pressed

import * as THREE from "three";

interface Controls {
    [key: string]: boolean;
}

// store an array of points which then create a curve
// the extrude shapes may need to change depending on 
// the orientation of the curve
interface CurveData {
    points: Array<[x: number, y: number, z: number]>;
    closed?: boolean;
    
    ellipse?: boolean;
    radius?: [x: number, y: number];
    angles?: [start: number, end: number]
    clockwise?: boolean;
    divisions?: number

    extrudeShapeIndex?: number
    extrudeOptions?: THREE.ExtrudeGeometryOptions;
    extrudeShape?: THREE.Shape

    moving?: boolean;
    movingDirection?: THREE.Vector3;
    period?: number;
    phase?: number;

    textureRotation?: number;
}

// the track is rendered in multiple layers
interface LayerData {
    shapes: Array<Array<[x: number, y: number]>>;
    material: THREE.Material;
}

// for moving platforms
interface Platform {
    mesh: THREE.Mesh;
    origin: THREE.Vector3;
    movingDirection: THREE.Vector3;
    period: number;
    phase: number;
}

interface CheckpointData {
    position: THREE.Vector3;
    resetDirection: THREE.Vector3;
    resetRotation: THREE.Euler;
    width?: number;
    height?: number;
}

interface Checkpoint {
    mesh: THREE.Mesh;
    resetDirection: THREE.Vector3;
    resetRotation: THREE.Euler;
    index: number;
}

interface TrackData {
    startPoint: THREE.Vector3;
    startDirection: THREE.Vector3;
    startRotation: THREE.Euler;
    curveData: Array<CurveData>;
    layerData: Array<LayerData>;
    checkpoints: Array<CheckpointData>;
    backgroundColors: Array<string>;
    signsPoints?: Array<CurveData>
    gridColor?: number | THREE.Color;
}

interface VehicleData {
    modelPath: string;

    acceleration: number;
    deceleration: number;
    friction: number;
    turnRate: number;
    maxRoll: number;
    defaultGravity?: THREE.Vector3;
    
    width: number;
    height: number;
    length: number;
}

export {
    Controls,
    CurveData,
    LayerData,
    Platform,
    CheckpointData,
    Checkpoint,
    TrackData,
    VehicleData
}