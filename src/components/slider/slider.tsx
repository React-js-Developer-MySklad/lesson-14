import {Suspense, useRef} from "react";
import {useSlider} from "../../hooks/useSlider/useSlider";

export const Slider = () => {
    const ref = useRef<HTMLDivElement>(null);
    const state = useSlider(ref, {
        onDrag: (value) => {
            console.log('onDrag', value);
        },
    });

    return (
        <>
            <div ref={ref} style={{position: 'relative', background: 'yellow', padding: 4}}>
                <p style={{margin: 0, textAlign: 'center'}}>Slide me</p>
            </div>
            <pre>{JSON.stringify(state, null, 2)}</pre>
        </>
    )
}