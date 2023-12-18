////// THIS WAY IS BY PASTING A LINK ::::::::::::::::::::::::::::
import React, { useState } from "react";

const DemoLocation = () => {
  const [location, setLocation] = useState("");
  //   const eventLocation =
  //     "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28304.503343290875!2d47.92766716797531!3d29.347324544061138!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf8537ae9080d9%3A0x9bf0cb949d1006de!2z2K_ZitmI2KfZhiDYp9mE2K7Yr9mF2Kkg2KfZhNmF2K_ZhtmK2KkgLSDYr9mI2YTYqSDYp9mE2YPZiNmK2Ko!5e0!3m2!1sen!2skw!4v1702894606910!5m2!1sen!2skw";

  const handleLoactionChange = (e) => {
    // console.log("New Title:", title);
    setLocation(e.target.value);
  };
  return (
    <div style={{ margin: 100 }}>
      <input
        placeholder="paste your location link here"
        type="text"
        value={location}
        onChange={handleLoactionChange}
        className="w-full h-[50px] px-4 py-2 border border-NavyLight rounded-full focus:outline-none focus:ring-1 focus:ring-NavyMain"
      />
      <iframe
        src={location}
        // width="600"
        // height="450"
        // style={{ border: 0, margin: 100 }}
        // allowfullscreen=""
        // loading="lazy"
        // referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default DemoLocation;
