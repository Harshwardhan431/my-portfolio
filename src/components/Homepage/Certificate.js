import React from "react";
import Fade from "react-reveal/Fade";
import awsSol from "../../images/aws-solution-architect.png";
import awsCloud from "../../images/aws-cloud-practicnor.png";

export default function Certificate() {
  return (
    <section className="mt-8 mx-3">
      <Fade up>
        <div>
          <h1 className="heading-main">Certifications</h1>
        </div>
      </Fade>

      <Fade up>
        <div className="mt-6 py-8 px-5 bg-gray-800 flex items-center justify-center shadow-2xl rounded-md">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 w-auto">
            <a href="https://www.credly.com/badges/0f4abf68-0b4f-4366-a481-dbab9085814b/public_url" target="_blank" rel="noreferrer noopener">
              <img src={awsSol} alt="AWS Solution Architect" className="h-48 sm:h-56 object-contain mx-auto" />
            </a>
            <a href="https://www.credly.com/badges/30afee31-edd9-463b-89e8-118888c09ac1/linked_in" target="_blank" rel="noreferrer noopener">
              <img src={awsCloud} alt="AWS Cloud Practitioner" className="h-48 sm:h-56 object-contain mx-auto" />
            </a>
          </div>
        </div>
      </Fade>
    </section>
  );
}
