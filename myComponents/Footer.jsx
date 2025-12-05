import React from 'react'

const Foot = () => {
    return (
        <div className="end flex flex-col gap-2 mx-3 my-3">
            <hr className='h-0.5 w-full bg-[#c9c9c9]'/>
            <footer className='flex justify-between text-[#6c757d] text-xs'>
                <span>{new Date().getFullYear()} © Zash Dev. FAHAM is a trademark of IISAT.</span>
                <span>Prototype Developed by <a href="https://zash-dev.vercel.app/" className='text-[#599eff] hover:underline'>Zash Dev</a></span>
            </footer>
        </div>
    )
}

export default Foot