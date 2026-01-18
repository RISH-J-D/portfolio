import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { teamMembers } from '../data/team';
import MemberCard from '../components/MemberCard';
import ResumeModal from '../components/ResumeModal';

const Team = () => {
    const [selectedResumeMember, setSelectedResumeMember] = useState(null);

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <div className="min-h-screen md:h-screen w-full md:overflow-hidden flex flex-col justify-end pb-24 md:pb-8 bg-transparent">
            <div className="w-full flex flex-col h-full">
                {/* Header Section - Top */}
                <div className="text-center shrink-0 pt-20 md:pt-24">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-4xl md:text-5xl font-bold text-white mb-2"
                    >
                        Meet  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">Our Team</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto"
                    >
                        The minds behind the innovation.
                    </motion.p>
                </div>

                {/* Content Area - 3 Top, 2 Bottom Layout */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.1 }}
                    className="flex-grow flex items-start justify-center pb-4 pt-20 md:pt-16 md:overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
                >
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-6 md:gap-y-8 w-full max-w-6xl px-6 md:px-0">
                        {teamMembers.map((member) => (
                            <div key={member.id} className="w-full md:w-[310px] lg:w-[330px] h-[300px]">
                                <MemberCard
                                    member={member}
                                    onShowResume={() => setSelectedResumeMember(member)}
                                />
                            </div>
                        ))}
                    </div>
                </motion.div>

                <ResumeModal
                    isOpen={!!selectedResumeMember}
                    onClose={() => setSelectedResumeMember(null)}
                    resumeUrl={selectedResumeMember?.resumeUrl}
                    memberName={selectedResumeMember?.name}
                />
            </div>
        </div>
    );
};

export default Team;
