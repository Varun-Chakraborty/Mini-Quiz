import { useEffect, useState } from "react";

export default function msg({ message, isPositive }) {
    const [isActive, changeactiveStatus] = useState(true);
    useEffect(() => {
        changeactiveStatus(true);
        let id = setTimeout(() => {
            changeactiveStatus(false);
        }, 2000);
        return (() => clearTimeout(id));
    }, [message, isPositive]);
    return (
        <>
            <div className={'px-4 py-1 absolute top-0 left-1/2 -translate-x-1/2 rounded-xl transition-all border-2 ' +
                (isActive ? 'translate-y-full scale-100 ' : '-translate-y-full scale-0 ') +
                (isPositive ? 'bg-green-200 text-green-900 border-green-600' : 'bg-red-200 text-red-900 border-red-600')} >
                {message}
            </div>
        </>
    );
}