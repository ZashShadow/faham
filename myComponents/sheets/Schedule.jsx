// src/components/GoogleSheetEmbed.jsx
"use client"
import React from 'react';
import { useState } from 'react';

const ScheduleEmbed = ({ className }) => {
    const [Loaded, setLoaded] = useState(false);
    // 💡 PASTE THE EMBEDDED URL HERE (the content of the 'src' attribute)
    const sheetUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQAXqrVm97lw1igqAQgAvAfKhC4J_Bd_drsW04EP3JiqfVjQfWZSANudvoAnHw9nABoW2F6HpO10oVd/pubhtml?widget=false&amp;headers=false&rm=minimal&chrome=false";

    return (
        <div
            className={`sheet-container flex flex-col ${className}`}
            style={{ width: "100%", height: "520px" }}
        >
            {/* Header */}
            <span className="text-2xl font-bold bg-[#1F244E] text-white px-5 py-2 rounded-t-xl text-center">
                Schedule
            </span>

            {/* Content area */}
            <div className="relative flex-1">
                {!Loaded && (
                    <div className="absolute inset-0 bg-[#D2D2D2] rounded-b-xl animate-pulse" />
                )}
                <iframe
                    src={sheetUrl}
                    className={`w-full h-full rounded-b-xl transition-opacity duration-300 ${Loaded ? "opacity-100" : "opacity-0"
                        }`}
                    onLoad={() => setLoaded(true)}
                    allowFullScreen
                    title="Class Schedule"
                />
            </div>
        </div>

    );
};

export default ScheduleEmbed;