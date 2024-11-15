import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
    const form = useRef();
    const [popup, setPopup] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_apu5zy4', 'template_46a3urb', form.current, {
                publicKey: '5PrHo6XQmfc1vb4mT',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setPopup(true); // Show popup on success
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    // Close the popup and refresh the page
    const handleClosePopup = () => {
        setPopup(false);
        window.location.reload(); // Refresh the page
    };

    return (
        <div className="max-w-[85%] mx-auto mt-28">
            <div>
                <h1 className="text-6xl font-extrabold font-mons py-4 text-darkBlue">
                    Get in Touch!
                </h1>
                <div className="flex mx-auto justify-between">
                    <div className="size-[45%] lg:size-[40%] hidden md:flex mt-10 lg:mt-0 items-center">
                        <img src="images/contactUs.jpg" alt="contactUs" className="size-full" />
                    </div>
                    {/* Form */}
                    <form
                        className="w-full md:w-[45%] xl:w-[50%] text-md my-10 font-semibold"
                        onSubmit={sendEmail}
                        ref={form}
                    >
                        <div className="mb-5 flex gap-5">
                            <input
                                type="text"
                                id="fName"
                                className="shadow-sm bg-gray-50 rounded-lg focus:ring-darkBlue focus:border-darkBlue block w-full p-3.5 3xl:p-5 3xl:text-xl placeholder:text-darkBlue bg-[#aec8e2]"
                                placeholder="First Name"
                                name="from_fname"
                                required
                            />
                            <input
                                type="text"
                                id="lName"
                                className="shadow-sm bg-gray-50 rounded-lg focus:ring-darkBlue focus:border-darkBlue block w-full p-3.5 3xl:p-5 3xl:text-xl placeholder:text-darkBlue bg-[#aec8e2]"
                                placeholder="Last Name"
                                name="from_lname"
                                required
                            />
                        </div>
                        <div className="mb-5">
                            <input
                                type="email"
                                id="email"
                                className="shadow-sm rounded-lg focus:ring-darkBlue focus:border-darkBlue block w-full p-3.5 3xl:p-5 3xl:text-xl placeholder:text-darkBlue bg-[#aec8e2]"
                                placeholder="Email"
                                name="from_email"
                                required
                            />
                        </div>
                        <div className="flex items-start mb-5">
                            <textarea
                                id="message"
                                rows="7"
                                className="resize-none block p-3.5 w-full shadow-sm rounded-lg 3xl:p-5 3xl:text-xl focus:ring-darkBlue focus:border-darkBlue placeholder:text-darkBlue bg-[#aec8e2]"
                                placeholder="Leave a message..."
                                name="message"
                                required
                            ></textarea>
                        </div>
                        <div className="w-full items-end justify-end flex">
                            <input
                                type="submit"
                                value="Send"
                                className="text-[#ffffff] bg-[#2E5090] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 3xl:px-8 3xl:py-4 xl:text-xl text-center"
                            />
                        </div>
                    </form>
                </div>
            </div>

            {/* Popup */}
            {popup && (
                <div className="fixed inset-0 bg-[#707172] bg-opacity-50 flex items-center justify-center">
                    <div className="bg-[white] p-6 rounded-lg shadow-lg text-center">
                        <h2 className="text-2xl font-bold mb-4">Email Sent Successfully!</h2>
                        <p className="mb-6">Your message has been sent. We will get back to you soon.</p>
                        <button
                            onClick={handleClosePopup}
                            className=" bg-darkBlue text-[#fff] px-4 py-2 rounded-lg hover:bg-blue"
                        >
                            OK
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};
