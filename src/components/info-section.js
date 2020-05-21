import React from "react";
import { Link } from "gatsby";

const InfoSection = () => (
  <section>
    <h2>Stay productive, wherever you are</h2>
    <p>
      Never let location be an issue when accessing your files. Fylo has you
      covered for all of your file storage needs.
    </p>
    <p>
      Securely share files and folders with friends, family and colleagues for
      live collaboration. No email attachments required.
    </p>
    <Link to={`/`}>See how Fylo works</Link>
  </section>
);

export default InfoSection;
