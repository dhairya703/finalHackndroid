'use client';

import Spline from '@splinetool/react-spline';

export default function TrackModel() {
    return (
        <div className="track-model-wrapper" style={{ width: '100%', height: '100%', position: 'relative', pointerEvents: 'auto' }}>
            <div className="spline-watermark-hider-track"></div>
            <Spline
                scene="https://prod.spline.design/ZxOgL9Y-3qqP2nsU/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
            />
        </div>
    );
}
