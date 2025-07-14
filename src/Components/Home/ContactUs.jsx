import contact from "../../assets/images/11. contact us.jpg";
import FreePic from "../reusable/FreePic";
import Overlay from "../reusable/Overlay";
const contactInfo = [
  { label: "Phone", value: "1 (232) 252-5522", underline: true },
  { label: "Location", value: "75 Street Sample, WL 63025" },
  { label: "Email", value: "xpartex@sample.com", underline: true },
];

const ContactUs = () => (
  <div className="grid grid-cols-1 md:grid-cols-11 mt-20 lg:mt-24 ">
    {/* Text */}
    <div
      className="p-10 xl:p-16 md:ml-10 lg:ml-14 xl:ml-20 bg-white text-center flex flex-col 
    justify-center col-span-5"
    >
      <h2 className="text-4xl xl:text-5xl font-semibold tracking-tight mb-4">
        Contact Us
      </h2>
      <p className="mb-4 text-xs lg:text-sm xl:text-base opacity-80 font-medium">
        We are here to meet any business need and promote your company online!
      </p>
      <hr className="mb-4 w-11/12 mx-auto text-gray-400 border" />
      <div className="opacity-90 text-xs lg:text-sm xl:text-base space-y-1 mb-4">
        {contactInfo.map(({ label, value, underline }) => (
          <p key={label}>
            <b>{label}:</b>{" "}
            <span
              className={`text-gray-700 tracking-tight ${
                underline ? "underline underline-offset-4" : ""
              }`}
            >
              {value}
            </span>
          </p>
        ))}
      </div>
      <FreePic />
    </div>

    {/* Image */}
    <div className="relative w-full h-full col-span-6">
      <img src={contact} className="w-full h-full object-cover" />
      <Overlay />
    </div>
  </div>
);

export default ContactUs;

