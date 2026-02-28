'use client';

import Spline from '@splinetool/react-spline';

interface RobotModelProps {
    onSceneReady?: () => void;
}

export default function RobotModel({ onSceneReady }: RobotModelProps) {
    return (
        <div className="robot-wrapper" style={{ width: '100%', height: '100%', position: 'relative', pointerEvents: 'none' }}>
            <Spline
                scene="https://prod.spline.design/kONxpNDh-I2TpQ7s/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
                onLoad={() => onSceneReady?.()}
            />
        </div>
    );
}
