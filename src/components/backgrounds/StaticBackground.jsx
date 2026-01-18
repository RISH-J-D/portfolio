import React from 'react';

const StaticBackground = () => {
    return (
        <div className="fixed inset-0 -z-50 overflow-hidden bg-black">
            <img
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop"
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
        </div>
    );
};

export default StaticBackground;
