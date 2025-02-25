import React from 'react';

export default function Team() {
    const teamMembers = [
        { name: 'Member 1', image: '/images/TeamNew/sanket-pathak.png' },
        { name: 'Member 2', image: '/images/TeamNew/yash-chandola.png' },
        { name: 'Member 3', image: '/images/TeamNew/bhart-kaushik.png' },
        { name: 'Member 4', image: '/images/TeamNew/member4.png' },
        { name: 'Member 5', image: '/images/TeamNew/member5.png' },
    ];
    const teamHeads = [
        { name: 'Member 1', image: '/images/TeamNew/sanket-pathak.png' },
        { name: 'Member 2', image: '/images/TeamNew/yash-chandola.png' },
        { name: 'Member 3', image: '/images/TeamNew/bhart-kaushik.png' },
    ]

    return (
        <div className="pt-20 py-10 relative">
            <div className="mt-2">
                <div className="text-center">
                    <h2 className="text-[#A2A2A2] text-[1.9rem] font-pessanger-sans-bold">THE</h2>
                    <h1 className="-mt-3 text-[#EEFF00] font-druk-wide-bold text-[4.8rem]">TEAM</h1>
                </div>
                <div className="relative flex justify-center -mt-[5.3rem] px-5">
                    <div className="-z-10 absolute inset-0 top-10 flex justify-center items-center px-4">
                        <div className="w-full h-[12rem] bg-[#FF00A6] rounded-full filter blur-[4rem]"></div>
                    </div>
                    <img className="w-full z-10 h-auto object-cover" src="/images/TeamNew/hand-fan.png" alt="Hand Fan" />
                </div>
            </div>
            <div className="mt-10 flex flex-col gap-10">
                {teamMembers.map((member, index) => (
                    <div
                        key={index}
                        className={`relative flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center ${index % 2 === 0 ? 'ml-0' : 'mr-0'}`}
                    >
                        <div className="relative w-[200px] h-[200px] overflow-hidden">
                            <img className="w-full h-full object-cover" src={member.image} alt={member.name} />
                            <div className="absolute top-0 left-0 bg-black bg-opacity-50 text-white p-2">
                                {member.name}
                            </div>
                            <div className="absolute top-0 left-0 transform -rotate-90 origin-top-left bg-black bg-opacity-50 text-white p-2">
                                {member.name}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="team-heads">
                
            </div>
        </div>
    );
}
