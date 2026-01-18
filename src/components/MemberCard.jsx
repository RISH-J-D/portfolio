import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, FileText, Phone } from 'lucide-react';
import b1 from '../assets/b1.png';
import b2 from '../assets/b2.png';
import b3 from '../assets/b3.png';
import b4 from '../assets/b4.png';
import b5 from '../assets/b5.png';

const badges = { b1, b2, b3, b4, b5 };

const MemberCard = ({ member, onShowResume }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            data-logo-collision="true"
            className="group relative h-full"
        >
            <div className="glass-card p-3 flex flex-col items-center text-center relative overflow-hidden h-full">
                <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-br from-green-500/10 to-blue-600/10 -z-10 group-hover:h-28 transition-all duration-500" />

                <div className="w-20 h-20 rounded-full border-4 border-[#282828] shadow-lg overflow-hidden mb-1 group-hover:scale-110 transition-transform duration-300">
                    <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                    />
                </div>

                <h3 className="text-lg font-bold text-white">{member.name}</h3>
                <p className="text-xs font-medium text-green-500 mb-0.5">{member.role}</p>
                <p className="text-[#b3b3b3] text-xs mb-2">{member.bio}</p>

                <div className="flex flex-wrap gap-1.5 justify-center mb-1">
                    {member.expertise.map((skill, index) => (
                        <span
                            key={index}
                            className="text-[10px] px-2 py-0.5 bg-[#282828] text-[#b3b3b3] rounded-full border border-[#3e3e3e]"
                        >
                            {skill}
                        </span>
                    ))}
                </div>

                <div className="mt-auto flex items-center gap-3">
                    <button
                        onClick={() => onShowResume(member)}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-green-500/10 border border-green-500/10 rounded-full text-xs font-medium text-green-500 hover:bg-green-500/20 hover:border-green-500/20 transition-all"
                    >
                        <FileText size={20} />
                        <span>Resume</span>
                    </button>

                    <div className="flex items-center gap-2">
                        {member.contact.github && (
                            <a href={member.contact.github} className="text-[#b3b3b3] hover:text-green-500 transition-colors" target="_blank" rel="noopener noreferrer">
                                <Github size={20} />
                            </a>
                        )}
                        {member.contact.linkedin && (
                            <a href={member.contact.linkedin} className="text-[#b3b3b3] hover:text-green-500 transition-colors" target="_blank" rel="noopener noreferrer">
                                <Linkedin size={20} />
                            </a>
                        )}
                        {member.contact.email && (
                            <a href={`mailto:${member.contact.email}`} className="text-[#b3b3b3] hover:text-green-500 transition-colors">
                                <Mail size={20} />
                            </a>
                        )}
                        {member.contact.mobile && (
                            <a href={`tel:${member.contact.mobile}`} className="text-[#b3b3b3] hover:text-green-500 transition-colors" title={member.contact.mobile}>
                                <Phone size={20} />
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* Badge - Outside the inner card to prevent clipping */}
            {member.badgeId && badges[member.badgeId] && (
                <div className="absolute -top-6 -left-6 w-24 h-24 md:-top-10 md:-left-10 md:w-32 md:h-32 z-30 flex items-center justify-center pointer-events-none">
                    <img src={badges[member.badgeId]} alt={`${member.badgeId} Badge`} className="w-full h-full object-contain absolute" />
                </div>
            )}
        </motion.div>
    );
};

export default MemberCard;
