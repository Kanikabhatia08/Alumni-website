import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export const ContactUs = () => {
    const [formData, setFormData] = useState({
        fName: '',
        lName: '',
        email: '',
        message: '',
    });
    const [showMessage, setShowMessage] = useState(false);

    // Handle form input changes
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Use EmailJS for sending emails
        emailjs
            .send(
                'your_service_id', // Replace with your EmailJS service ID
                'your_template_id', // Replace with your EmailJS template ID
                formData,
                'your_user_id' // Replace with your EmailJS user ID
            )
            .then(() => {
                // Show success message
                setShowMessage(true);

                // Clear the form
                setFormData({ fName: '', lName: '', email: '', message: '' });
            })
            .catch((error) => {
                console.error('Error sending email:', error);
            });
    };

    return (
        <div className="max-w-[85%] mx-auto mt-28">
            {showMessage ? (
                <div className="text-center bg-green-200 text-green-800 py-4 rounded-lg">
                    <p>Your response has been taken!</p>
                    <button
                        className="mt-4 text-blue-500 underline"
                        onClick={() => setShowMessage(false)}
                    >
                        Go Back
                    </button>
                </div>
            ) : (
                <>
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
                            onSubmit={handleSubmit}
                        >
                            <div className="mb-5 flex gap-5">
                                <input
                                    type="text"
                                    id="fName"
                                    value={formData.fName}
                                    onChange={handleChange}
                                    className="shadow-sm bg-gray-50 rounded-lg focus:ring-darkBlue focus:border-darkBlue block w-full p-3.5 3xl:p-5 3xl:text-xl placeholder:text-darkBlue bg-[#aec8e2]"
                                    placeholder="First Name"
                                    required
                                />
                                <input
                                    type="text"
                                    id="lName"
                                    value={formData.lName}
                                    onChange={handleChange}
                                    className="shadow-sm bg-gray-50 rounded-lg focus:ring-darkBlue focus:border-darkBlue block w-full p-3.5 3xl:p-5 3xl:text-xl placeholder:text-darkBlue bg-[#aec8e2]"
                                    placeholder="Last Name"
                                    required
                                />
                            </div>
                            <div className="mb-5">
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="shadow-sm rounded-lg focus:ring-darkBlue focus:border-darkBlue block w-full p-3.5 3xl:p-5 3xl:text-xl placeholder:text-darkBlue bg-[#aec8e2]"
                                    placeholder="Email"
                                    required
                                />
                            </div>
                            <div className="flex items-start mb-5">
                                <textarea
                                    id="message"
                                    rows="7"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="resize-none block p-3.5 w-full shadow-sm rounded-lg 3xl:p-5 3xl:text-xl focus:ring-darkBlue focus:border-darkBlue placeholder:text-darkBlue bg-[#aec8e2]"
                                    placeholder="Leave a message..."
                                    required
                                ></textarea>
                            </div>
                            <div className="w-full items-end justify-end flex">
                                <button
                                    type="submit"
                                    className="text-[#ffffff] bg-[#2E5090] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 3xl:px-8 3xl:py-4 xl:text-xl text-center"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </>
            )}
        </div>
    );
};
