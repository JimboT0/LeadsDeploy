
import Share from "@/components/share"


function footer() {
    return (
        <div className="w-[100%] h-20vh bg-gray-800 justify-center items-center text-center" >


            <div className=' md:columns-5 columns-1 md:pt-60 py-10'>
                <img alt='image' className="w-[156px] h-10 py-5" src="https://via.placeholder.com/156x40" />
                <div className=' text-zinc-100 text-base font-medium leading-normal gap-3 py-5'><a href='/' className=' text-zinc-100 text-base font-medium leading-normal gap-3 py-5 font-bodoni-moda'>Home</a></div>
                <div className=' text-zinc-100 text-base font-medium leading-normal gap-3 py-5'><a href='/guide' className=' text-zinc-100 text-base font-medium leading-normal gap-3 py-5 font-bodoni-moda'>Guide</a></div>
                <div className=' text-zinc-100 text-base font-medium leading-normal gap-3 py-5'><a href='/contact' className=' text-zinc-100 text-base font-medium leading-normal gap-3 py-5 font-bodoni-moda'>Contact Us</a></div>
                <img alt='image' className="w-[156px] h-10 py-5" src="https://via.placeholder.com/156x40" />
            </div>

            <Share />


            <div className='flex flex-col justify-center items-center text-center p-10'>
                <div className="w-[308.70px] h-[38.89px] text-center text-slate-300 text-sm font-normal leading-snug mt-10 font-bodoni-moda">©  VintageRiches 2024 All Rights Reserved</div>
            </div>



        </div>
    )
}

export default footer


