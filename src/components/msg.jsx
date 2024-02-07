export default function msg({ active, message, isPositive }) {
    return (
        <>
            <div className={'px-4 py-1 absolute top-0 left-1/2 -translate-x-1/2 rounded-xl transition-all border-2 ' +
                (active ? 'translate-y-full scale-100 ' : '-translate-y-full scale-0 ') +
                (isPositive ? 'bg-green-200 text-green-900 border-green-600' : 'bg-red-200 text-red-900 border-red-600')} >
                {message}
            </div>
        </>
    );
}