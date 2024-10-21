import React from 'react'
import vector from '../images/contactUs.jpg'

export const ContactUs = () => {
    return (
        <div className='max-w-[85%]  mx-auto mt-28'>
            <h1 className='text-6xl font-extrabold font-mons py-4 text-darkBlue'>Get in Touch!</h1>

            <div className='flex mx-auto justify-between'>
                <div className=' size-[45%] lg:size-[40%] hidden md:flex mt-10 lg:mt-0   items-center '>
                    <img src={vector} alt='contactUs' className='size-full' />
                </div>
                {/* form */}
                <form class="w-full md:w-[45%] xl:w-[50%] text-md my-10 font-semibold">
                    <div class="mb-5 flex gap-5">
                        <input type="text" id="fName" class="shadow-sm bg-gray-50 rounded-lg focus:ring-darkBlue focus:border-darkBlue block w-full p-3.5 3xl:p-5 3xl:text-xl placeholder:text-darkBlue bg-[#aec8e2]" placeholder="First Name" required />
                        <input type="text" id="lName" class="shadow-sm bg-gray-50 rounded-lg focus:ring-darkBlue focus:border-darkBlue block w-full p-3.5 3xl:p-5 3xl:text-xl placeholder:text-darkBlue bg-[#aec8e2]" placeholder="Last Name" required />
                    </div>
                    <div class="mb-5">
                        <input type="email" id="email" class="shadow-sm  rounded-lg focus:ring-blue-500 focus:border-darkBlue block w-full p-3.5 3xl:p-5 3xl:text-xl placeholder:text-darkBlue bg-[#aec8e2] " placeholder="Email" required />

                    </div>
                    <div class="flex items-start mb-5">
                        <textarea id="message" rows="7" class=" resize-none	block p-3.5 w-full shadow-sm rounded-lg 3xl:p-5 3xl:text-xl focus:ring-blue-500 focus:border-blue-500  placeholder:text-darkBlue bg-[#aec8e2]" placeholder="Leave a message..."></textarea>
                    </div>
                    <div className='w-full  items-end justify-end flex'>
                        <button type="submit" class="text-[#ffffff] bg-[#2E5090] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 3xl:px-8 3xl:py-4 xl:text-xl text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    </div>
                </form>

            </div>
        </div>
    )

}
