import { useEffect, useRef } from "react";

const MediaVideo = ({ video }) => {

    const iframeRef = useRef();


    const updateHeight = () => {
        const height = iframeRef.current.offsetWidth * 9 / 16 + "px";
        iframeRef.current.setAttribute("height", height);
    };

    useEffect(() => {
        updateHeight();
        window.addEventListener("resize", updateHeight);

        return () => {
            window.removeEventListener("resize", updateHeight);
        };
    }, [video]);

    return (
        <iframe
            src={`https://www.youtube.com/embed/${video.key}?controls=0`}
            key={video.key}
            width="100%"
            ref={iframeRef}
        ></iframe>
    )
}

export default MediaVideo