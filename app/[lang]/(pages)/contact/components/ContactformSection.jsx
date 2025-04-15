import Image from "next/image";
import CallToActionButton, { SendCTA } from "../../atoms/Buttons";
import {
  ThemedH1,
  ResponsiveThemedH2,
  ResponsiveThemedP,
  ThemedP,
} from "../../atoms/ResponsiveText";
import { useState } from "react";
import { InputWithLabel } from "./InputWithLabel";
import { ThemedH1 } from "@components/atoms/ThemedText";

export const ContactformSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setShowModal(true);

    const fetchPromise = fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // cache: "no-cache",
      body: JSON.stringify(formData),
    });

    try {
      const response = await fetchPromise;
      const data = await response.json();
      console.log(data); // handle response, catch errors
    } catch (error) {
      console.error("Error:", error);
      console.log("Full response:", response);
      // Handle error scenarios here
    }
  };

  const resetForm = () => {
    setShowModal(false);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="grid justify-center items-center min-h-[calc(100vh-144px)]">
      {!showModal && (
        <>
          <div className="animate-PageAppearRight">
            <ThemedH1 className="mb-4">
              {language === "Norwegian" ? "Kontaktskjema" : "Contact form"}
            </ThemedH1>
            <ThemedP className="mb-4">
              {language === "Norwegian"
                ? "Vennligst fyll ut skjemaet under og vi vil komme tilbake til deg så snart som mulig."
                : "Please fill out the form below and we will get back to you as soon as possible."}
            </ThemedP>
            <form className="w-full max-w-lg" onSubmit={handleSubmit}>
              <InputWithLabel
                formData={formData}
                setFormData={setFormData}
                type="text"
                name="name"
                placeholder={
                  language === "Norwegian" ? "Ditt navn" : "Your name"
                }
              >
                {language === "Norwegian" ? "Navn" : "Name"}
              </InputWithLabel>

              <InputWithLabel
                formData={formData}
                setFormData={setFormData}
                type="email"
                name="email"
                placeholder={
                  language === "Norwegian"
                    ? "Din email adresse"
                    : "Your email address"
                }
              >
                Email
              </InputWithLabel>

              <InputWithLabel
                formData={formData}
                setFormData={setFormData}
                type="textarea"
                name="message"
                placeholder={
                  language === "Norwegian" ? "Din melding" : "Your message"
                }
              >
                {language === "Norwegian" ? "Melding" : "Message"}
              </InputWithLabel>

              
              <SendCTA type="submit">
                Send
              </SendCTA>
            </form>
          </div>
        </>
      )}
      {showModal && (
        <div
          className={`flex items-center rounded-xl justify-center ${
            theme === "light"
              ? "bg-Villo-light-white20"
              : "bg-Villo-dark-black50"
          } `}
        >
          <div className="relative flex flex-col items-center justify-center gap-8 p-8 bg-Villo-black rounded-3xl">
            <ResponsiveThemedH2 className="text-center">
              {language === "Norwegian"
                ? "Takk for at du tok kontakt!"
                : "Thank you for reaching out!"}
            </ResponsiveThemedH2>
            <div className="text-center">
              <ResponsiveThemedP className="">
                {language === "Norwegian"
                  ? "Du vil snart få svar på henvendelsen din."
                  : "You will soon receive a reply to your inquiry."}
              </ResponsiveThemedP>
              <ResponsiveThemedP className="">
                {language === "Norwegian"
                  ? "La oss lage noe fantastisk!"
                  : "Let's make something awesome!"}
              </ResponsiveThemedP>
            </div>
            <Image
              className="animate-pulse"
              src={
                theme === "light"
                  ? "/logo/WindLogoNoTextLightMode.svg"
                  : "/logo/WindLogoNoTextDarkMode.svg"
              }
              width={200}
              height={200}
              alt="loading..."
            />
            <CallToActionButton onClick={resetForm}>
              {language === "Norwegian" ? "Flotters!" : "Roger that!"}
            </CallToActionButton>
          </div>
        </div>
      )}
    </div>
  );
};
