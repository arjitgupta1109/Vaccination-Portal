import React from "react";
import "./InfoSection.css";
function InfoSection() {
 return (
 <section className="info-section">
 <div className="pic">
 {/* Add an image or illustration related to vaccination */}
 </div>
 <div className="info">
 <h1>How Vaccination Works</h1>

 <h3>For Adults</h3>
 <p>Adults can register for vaccination by providing their details, selecting a preferred vaccination for a
particular disease, and scheduling an appointment. After receiving the vaccine, they can check their
vaccination appointment from the portal.</p>

 <h3>For Children</h3>
 <p>Parents or guardians can register their children for vaccination by submitting necessary details. The
system will provide available vaccination slots and guide them through the process to ensure timely
immunization.</p>

 <p>Our goal is to ensure a smooth and safe vaccination process for everyone, helping to build a
healthier community.</p>
 </div>
 </section>
 );
}
export default InfoSection;
