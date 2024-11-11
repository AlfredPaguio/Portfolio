import React from "react";

function MapBox() {
  return (
    <section className="relative h-[250px] w-full overflow-hidden rounded-[16px] border border-accent sm:h-[380px] sm:rounded-[18px]">
      <figure className="h-full">
        <iframe
          className="h-full w-full border-none grayscale dark:invert filter"
          title="Map Address"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3864.6566073318504!2d121.04439287570243!3d14.389269086072456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d0f73253fa35%3A0x6f881838f624e78c!2s618%20Tuazon%20St%2C%20Muntinlupa%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1730569403170!5m2!1sen!2sph"
          width="400"
          height="300"
          loading="lazy"
          referrerPolicy="no-referrer"
        ></iframe>
      </figure>
    </section>
  );
}

export default MapBox;
