import { useEffect, useState } from "react";

export default function msg({ message, isPositive, isButtonClicked, setIfButtonClicked }) {
    const [isActive, changeactiveStatus] = useState(false);
    useEffect(() => {
        if (isButtonClicked) {
            changeactiveStatus(true);
            const id = setTimeout(() => {
                changeactiveStatus(false);
                setIfButtonClicked(false);
            }, 2000);
            return (() => clearTimeout(id));
        }
    }, [isButtonClicked]);
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