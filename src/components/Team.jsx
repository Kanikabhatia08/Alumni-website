function TeamCard({ img, name, title, institution }) {
    return (
        <div className="rounded-lg bg-[#FAFAFA] shadow-md">
            <div className="p-6 text-center">
                <img
                    src={img}
                    alt={name}
                    className="size-40 mx-auto mb-6 rounded-full object-cover"
                />
                <h5 className="text-lg font-medium ">{name}</h5>
                <p className="text-base font-semibold text-gray">{title}</p>
                <p className="mb-4 text-base font-semibold text-gray">{institution}</p>

                
            </div>
        </div>
    );
}

const members = [
    {
        img: "/images/vipinKumar.jpg",
        name: "Mr. Vipin kumar",
        title: "Technical Assistant",
        institution: "Department of Computer Science, Punjabi University, Patiala",
    },
    {
        img: "/images/vishalSir.jpg",
        name: "Dr. Vishal Goyal",
        title: "Proffesor",
        institution: "Department of Computer Science, Punjabi University, Patiala",
    },
    {
        img: "/images/kanika.jpg",
        name: "Kanika Bhatia",
        title: "Student",
        institution: "MCA, Department of Computer Science",
    },
    {
        img: "/images/abhinash.jpg",
        name: "Abhinash",
        title: "Student",
        institution: "MCA, Department of Computer Science",
    },
    {
        img: "/images/harman.jpg",
        name: "Harmandeep Singh",
        title: "Student",
        institution: "MCA, Department of Computer Science",
    },
    {
        img: "/images/purvak.jpg",
        name: "Purvak",
        title: "Student",
        institution: "MCA, Department of Computer Science",
    }
];

export function Team() {
    return (
        <section className="max-w-[90%] w-full flex mx-auto px-8 lg:pb-28">
            <div className="container mx-auto">
                <div className="mb-16 text-center lg:mb-28">
                    <h1 className="my-2 text-2xl font-bold text-darkBlue lg:text-4xl">
                    The Driving Force <br/>Our Dedicated Team of Experts
                    </h1>
                    <p className="mx-auto max-w-4xl ">
                    From visionary leaders to creative thinkers and technical experts, every member of our team is dedicated to delivering innovative solutions and exceptional service that drives our success.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 justify-center lg:grid-cols-3">
                    {members.map((props, key) => (
                        <TeamCard key={key} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Team;
