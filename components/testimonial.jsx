

function Testimonial() {
    return (
        <div className="w-[100%] lg:h-[536px] flex flex-col justify-center items-center text-center pt-10 pb-20">
            <div className="w-[90%] h-[70px] text-center text-gray-950 text-[100%] font-semibold leading-[62px] mb-10">Don’t just take our word for it...</div>
            <div className='flex bg-purple-200 flex-col md:flex-row justify-center items-center text-center w-[80%] rounded-xl p-10'>
                <img alt='image' className="w-[290px] h-60 rounded-full" width='290' height='240' src='./happy-woman.jpg' />
                <div className='flex flex-col justify-center items-center text-center '>
                    <div className="w-[70%] h-[100%] text-gray-950 text-lg font-medium leading-7 m-10">&quot;
                        VintageRiches paid me R22 000 for the old watch that was sitting in my drawer! <br />
                        They treated my fairly and paid me quickly.
                        I have recommended them to many friends and many of my friends have sold their old items for a lot more than they expected they could&quot;</div>


                </div>
            </div>
        </div>
    )
}

export default Testimonial
