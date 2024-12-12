import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export const ReachUs = () => {
    const [formData, setFormData] = useState({
        from_fname: '',
        from_lname: '',
        from_email: '',
        message: '',
        selected_option: 'How Alumni Can Help Us', // Default dropdown title
    });

    const [popup, setPopup] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const dropdownOptions = [
        'Monitory Contribution',
        'Workshop',
        'Counselling',
        'Industrial Visit',
        'Mentoring Projects',
        'Placements',
        'Internships',
        'Other',
    ];

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Handle dropdown option selection
    const handleDropdownSelect = (option) => {
        setFormData((prevState) => ({
            ...prevState,
            selected_option: option,
        }));
        setDropdownOpen(false);
    };

    const sendEmail = (e) => {
        e.preventDefault();

        // Ensure the dropdown has a valid selection
        if (formData.selected_option === 'How Alumni Can Help Us') {
            alert('Please select an option from the dropdown!');
            return; // Prevent form submission if no option is selected
        }

        // Validate form fields
        if (!formData.from_fname || !formData.from_lname || !formData.from_email || !formData.message) {
            alert('Please fill out all required fields!');
            return;
        }

        // Send email using EmailJS
        emailjs.send('service_apu5zy4', 'template_g7qzrrj', formData, '5PrHo6XQmfc1vb4mT')
                    .then(
                () => {
                    console.log('SUCCESS!');
                    setPopup(true); // Show popup on success
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            );
    };

    // Close the popup and refresh the page
    const handleClosePopup = () => {
        setPopup(false);
        setFormData({
            from_fname: '',
            from_lname: '',
            from_email: '',
            message: '',
            selected_option: 'How Alumni Can Help Us',
        });
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.dropdown')) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className="max-w-[85%] mx-auto mt-28">
            <div>
                <h1 className="text-6xl font-extrabold font-mons py-4 text-darkBlue">Get in Touch!</h1>
                <div className="flex mx-auto justify-between">
                    <div className="size-[45%] lg:size-[40%] hidden md:flex mt-10 lg:mt-0 items-center">
                        <img src="images/contactUs.jpg" alt="contactUs" className="size-full" />
                    </div>
                    {/* Form */}
                    <form
                        className="w-full md:w-[45%] xl:w-[50%] text-md my-10 font-medium"
                        onSubmit={sendEmail}
                    >
                        <div className="mb-5 flex gap-5">
                            <input
                                type="text"
                                id="fName"
                                className="shadow-sm bg-gray-50 rounded-lg focus:ring-darkBlue focus:border-darkBlue block w-full p-3.5 3xl:p-5 3xl:text-xl placeholder:text-darkBlue bg-lightBlue"
                                placeholder="First Name"
                                name="from_fname"
                                value={formData.from_fname}
                                onChange={handleInputChange}
                                required
                            />
                            <input
                                type="text"
                                id="lName"
                                className="shadow-sm bg-gray-50 rounded-lg focus:ring-darkBlue focus:border-darkBlue block w-full p-3.5 3xl:p-5 3xl:text-xl placeholder:text-darkBlue bg-lightBlue"
                                placeholder="Last Name"
                                name="from_lname"
                                value={formData.from_lname}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-5">
                            <input
                                type="email"
                                id="email"
                                className="shadow-sm rounded-lg focus:ring-darkBlue focus:border-darkBlue block w-full p-3.5 3xl:p-5 3xl:text-xl placeholder:text-darkBlue bg-lightBlue"
                                placeholder="Email"
                                name="from_email"
                                value={formData.from_email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="relative mb-5 dropdown">
                            <button
                                type="button"
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className={`w-full bg-lightBlue focus:ring-darkBlue focus:border-darkBlue text-darkBlue rounded-lg p-3.5 3xl:p-5 3xl:text-xl text-center flex justify-between items-center`}
                            >
                                {formData.selected_option}
                                <svg
                                    className="w-2.5 h-2.5 ms-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 4 4 4-4"
                                    />
                                </svg>
                            </button>
                            {dropdownOpen && (
                                <div className="absolute z-10 bg-lightBlue rounded-lg shadow w-full ">
                                    <ul className=" text-darkBlue">
                                        {dropdownOptions.map((option, index) => (
                                            <li key={index}>
                                                <button
                                                    type="button"
                                                    onClick={() => handleDropdownSelect(option)}
                                                    className="block w-full text-left px-4 py-2.5 hover:bg-hoverBlue"
                                                >
                                                    {option}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                        <div className="flex items-start mb-5">
                            <textarea
                                id="message"
                                rows="7"
                                className="resize-none block p-3.5 w-full shadow-sm rounded-lg 3xl:p-5 3xl:text-xl focus:ring-darkBlue focus:border-darkBlue placeholder:text-darkBlue bg-lightBlue"
                                placeholder="Leave a message..."
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                            ></textarea>
                        </div>
                        <div className="w-full items-end justify-end flex">
                            <input
                                type="submit"
                                value="Send"
                                className="text-[#ffffff] cursor-pointer bg-darkBlue font-medium rounded-lg text-md px-5 py-2.5 3xl:px-8 3xl:py-4 xl:text-xl text-center"
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