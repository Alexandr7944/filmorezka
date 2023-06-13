import { useEffect, useState } from 'react'

function useDebounce(value: any, delay?: number): boolean {
    //Processing delay
    const [isPause, setIsPause] = useState<boolean>(false);

    useEffect(() => {
        setIsPause(true);
        const timer = setTimeout(() => setIsPause(false), delay || 500);

        return () => {
            clearTimeout(timer);
        }
    }, [value, delay]);

    return isPause;
}

export default useDebounce;