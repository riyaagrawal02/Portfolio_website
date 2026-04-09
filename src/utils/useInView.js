import { useEffect, useRef, useState } from "react";

const useInView = ({ rootMargin = "200px", threshold = 0 } = {}) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isVisible) {
            return undefined;
        }

        const element = ref.current;

        if (!element || typeof IntersectionObserver === "undefined") {
            setIsVisible(true);
            return undefined;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { rootMargin, threshold }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [isVisible, rootMargin, threshold]);

    return { ref, isVisible };
};

export default useInView;
