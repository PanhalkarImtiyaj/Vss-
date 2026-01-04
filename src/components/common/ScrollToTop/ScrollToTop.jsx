import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Immediate scroll to top
        window.scrollTo(0, 0);

        // Fallback for some browsers or slow rendering pages
        const timeoutId = setTimeout(() => {
            window.scrollTo(0, 0);
        }, 100);

        return () => clearTimeout(timeoutId);
    }, [pathname]);

    return null;
};

export default ScrollToTop;
