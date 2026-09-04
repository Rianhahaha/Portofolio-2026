import React from 'react';

interface LoaderProps {
    loadingText?: string
}

export default function Loader({ loadingText = 'loading' }: LoaderProps) {
    return (
        <div className="flex  gap-2 tracking-widest font-artwork justify-center items-end">
            {/* 
            <span className='animate-pulse text-[5rem] w-full leading-[60px]'>
                {loadingText}
            </span> */}
            <div className="flex flex-row gap-2">
                <div className="w-4 h-4 rounded-full bg-white animate-bounce [animation-delay:.7s]" />
                <div className="w-4 h-4 rounded-full bg-white animate-bounce [animation-delay:.3s]" />
                <div className="w-4 h-4 rounded-full bg-white animate-bounce [animation-delay:.7s]" />
            </div>
        </div>
    );
}


