'use client';

import Spline from '@splinetool/react-spline';

export default function TimelineModel({ onLoaded }: { onLoaded?: () => void }) {
    return (
        <div
            className="timeline-model-wrapper"
            style={{ width: '100%', height: '100%', position: 'relative', pointerEvents: 'none' }}
        >
            <div className="spline-watermark-hider-timeline"></div>
            <Spline
                scene="https://prod.spline.design/9W-z4gPfsa4Cgm-h/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
                onLoad={() => onLoaded?.()}
            />
        </div>
    );
}
