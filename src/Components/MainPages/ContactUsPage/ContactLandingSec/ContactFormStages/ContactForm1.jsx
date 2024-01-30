import React, { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import Axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactFormFinal from "./ContactFinalStage/ContactFormFinal";
import ContactFormLoader from "./ContactFormLoader/ContactFormLoader";

const animatedComponents = makeAnimated();

const ServiceOptions = [
  { value: "Poseter", label: "Poster" },
  { value: "Banner", label: "Poster" },
  { value: "Business Card", label: "Business Card" },
  { value: "Web UI", label: "Web UI" },
  { value: "App UI", label: "App UI" },
  { value: "Logo Designing", label: "Logo Designing" },
  { value: "Flyer", label: "Flyer" },
  { value: "Brochure", label: "Brochure" },
  { value: "Sinnage Board", label: "Sinnage Board" },
  { value: "LetterHead", label: "LetterHead" },
  { value: "strawberry", label: "Strawberry" },
  { value: "Other", label: "Other" },
];

export const ContactForm1 = () => {
  const [loading, setLoading] = useState(false);
  const [formState, setFormState] = useState(1);
  const url = "https://dezainabackend.onrender.com/contact";
  const [data, setData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    message: "",
    service: "",
  });

  function submit(e) {
    e.preventDefault();
    Axios.post(url, {
      name: data.name,
      email: data.email,
      contactNumber: data.contactNumber,
      message: data.message,
      service: data.service,
    }).then((res) => {
      console.log(res.data);
    });
    setLoading(true);
    toast.success("Form Submitted Successfully!", {
      position: "bottom-right",
      draggable: true,
    });
    // setFormState(2);
    setTimeout(() => {
      setFormState(2);
      setLoading(false);
    }, 2000);
  }

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }

  return (
    <div className="ContactFormMain">
      {/* <ContactFormFinal/> */}
      {/* <ContactFormLoader/> */}

      {loading && <ContactFormLoader />}
      <div className="ContactForm-Container">
        {formState === 1 && (
          <form
            className="ContactLS-Form"
            disabled={loading}
            onSubmit={(e) => submit(e)}
          >
            <div className="ContactLSForm-Content">
              <label className="ContactLSForm-Label">Name</label>
              <input
                className="ContactLSForm-Input"
                id="name"
                onChange={(e) => handle(e)}
                value={data.name}
                type="text"
                placeholder="Name"
                required
              />
            </div>
            <div className="ContactLSForm-Content">
              <label className="ContactLSForm-Label">Phone</label>
              <input
                className="ContactLSForm-Input"
                id="contactNumber"
                onChange={(e) => handle(e)}
                value={data.contactNumber}
                type="number"
                placeholder="Phone Number"
                required
              />
            </div>
            <div className="ContactLSForm-Content">
              <label className="ContactLSForm-Label">Email</label>
              <input
                className="ContactLSForm-Input"
                id="email"
                onChange={(e) => handle(e)}
                value={data.email}
                type="email"
                placeholder="Email"
                required
              />
            </div>

            <div className="ContactLSForm-Content">
              <label className="ContactLSForm-Label">
                Service{" "}
                <span style={{ color: "grey", fontSize: "0.6rem" }}>
                  {" "}
                  (Opitional){" "}
                </span>
              </label>
              {/* <Select id='service' 
                                        className='OPBodyContentAddBox-ProductDetail' 
                                        closeMenuOnSelect={false}
                                        components={animatedComponents}
                                        isMulti
                                    options={ServiceOptions} 
                                    onChange={(e)=>handle(e)} value={data.service}
                                    type="service"
                                    /> */}

              <select
                id="service"
                isMulti={true}
                className="ContactLSForm-Input "
                onChange={(e) => handle(e)}
                value={data.service}
                type="service"
              >
                <option value="None">None</option>
                <option
                  value="Category1"
                  className="ContactLSFormInput-Category"
                  disabled={true}
                >
                  Visual Branding
                </option>
                <option
                  value="Logo Design"
                  className="ContactLSFormInput-Product"
                >
                  Logo Design
                </option>
                <option
                  value="Brand Kit Design"
                  className="ContactLSFormInput-Product"
                >
                  Brand Kit Design
                </option>
                <option
                  value="Business Card Design"
                  className="ContactLSFormInput-Product"
                >
                  Business Card Design
                </option>
                <option
                  value="Letter Head Design"
                  className="ContactLSFormInput-Product"
                >
                  Letter Head Design
                </option>
                <option
                  value="Signage Design"
                  className="ContactLSFormInput-Product"
                >
                  Signage Design
                </option>
                <option
                  value="Category2"
                  className="ContactLSFormInput-Category"
                  disabled={true}
                >
                  Digital Interaction
                </option>
                <option
                  value="Portfolio Design"
                  className="ContactLSFormInput-Product"
                >
                  Portfolio Design
                </option>
                <option
                  value="Website Design"
                  className="ContactLSFormInput-Product"
                >
                  Website Design
                </option>
                <option
                  value="Application Design"
                  className="ContactLSFormInput-Product"
                >
                  Application Design
                </option>
                <option
                  value="Presentation Design"
                  className="ContactLSFormInput-Product"
                >
                  Presentation Design
                </option>
                <option
                  value="Pitch Deck Design"
                  className="ContactLSFormInput-Product"
                >
                  Pitch Deck Design
                </option>
                <option
                  value="Category3"
                  className="ContactLSFormInput-Category"
                  disabled={true}
                >
                  Brand Marketing
                </option>
                <option
                  value="Poster Design"
                  className="ContactLSFormInput-Product"
                >
                  Poster Design
                </option>
                <option
                  value="Banner Design"
                  className="ContactLSFormInput-Product"
                >
                  Banner Design
                </option>
                <option
                  value="Flyer Design"
                  className="ContactLSFormInput-Product"
                >
                  Flyer Design
                </option>
                <option
                  value="Brochure Design"
                  className="ContactLSFormInput-Product"
                >
                  Brochure Design
                </option>
                <option
                  value="Catalog Design"
                  className="ContactLSFormInput-Product"
                >
                  Catalog Design
                </option>
                <option
                  value="Social Media Design"
                  className="ContactLSFormInput-Product"
                >
                  Social Media Design
                </option>
                <option value="Other">Other...</option>
              </select>
            </div>
            <div className="ContactLSForm-Content">
              <label className="ContactLSForm-Label">Message</label>
              <textarea
                className="ContactLSForm-Input"
                id="message"
                onChange={(e) => handle(e)}
                value={data.message}
                type="message"
                rows="4"
                cols="40"
                placeholder="Message, Regarding which we should connect?.."
                required
              />
            </div>
            <button className="ContactLSForm-Button">Submit</button>
          </form>
        )}
        {formState === 2 && <ContactFormFinal />}
        <ToastContainer />
      </div>
      {/* {
                            const form = document.querySelector('form')
                        } */}
    </div>
  );
};

export default ContactForm1;
