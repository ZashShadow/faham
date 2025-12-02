// src/components/GoogleSheetEmbed.jsx

import React from 'react';

const ScheduleEmbed = ({ className }) => {
    // 💡 PASTE THE EMBEDDED URL HERE (the content of the 'src' attribute)
    const sheetUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQAXqrVm97lw1igqAQgAvAfKhC4J_Bd_drsW04EP3JiqfVjQfWZSANudvoAnHw9nABoW2F6HpO10oVd/pubhtml?widget=false&amp;headers=false&rm=minimal&chrome=false";

    return (
        <div className={`sheet-container flex flex-col ${className}`} style={{ width: '100%', height: '520px' }}>
            <span className='text-2xl font-bold bg-[#1F244E] text-white px-5 py-2 rounded-t-xl text-center'>Schedule</span>
            <iframe
                // 🔑 The URL from the "Publish to web" dialog
                src={sheetUrl}
                className='rounded-b-xl'

                // 📏 Adjust width and height as needed
                width="100%"
                height="100%"


                // 🔐 Security: Recommended attributes
                allowFullScreen
                title="Class Schedule"
            ></iframe>
        </div>
    );
};

export default ScheduleEmbed;