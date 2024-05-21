import {useRef} from 'react';

// write custom hook useWidth that should
// 1. return dom node width (node.clientWidth)
// 2. update output on window resize
const useWidth = (ref: any) => {
    return ref.current.clientWidth
}

// usage example
export const ResizedComp = () => {

    const ref = useRef<any>()
    const width = useWidth(ref)

    return (
        <div ref={ref}>
            {width}
        </div>
    )
}