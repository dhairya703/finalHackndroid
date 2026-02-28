'use client';

import Spline from '@splinetool/react-spline';

export default function RobotModel() {
    return (
        <div className="robot-wrapper" style={{ width: '100%', height: '100%', position: 'relative', pointerEvents: 'none' }}>
            <Spline
                scene="https://prod.spline.design/kONxpNDh-I2TpQ7s/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
            />
        </div>
    );
}
