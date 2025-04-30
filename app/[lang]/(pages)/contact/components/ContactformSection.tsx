"use client";

import { useState } from "react";
import Image from "next/image";
import { InputWithLabel } from "./InputWithLabel";
import {
  ThemedH1,
  ThemedH2,
  ThemedP,
  ThemedPLarge,
} from "@components/atoms/ThemedText";
import CallToActionButton, { SendCTA } from "@components/atoms/Buttons";

export const ContactformSection = ({ content }) => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setShowModal(true);

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("Resend response:", data);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  const resetForm = () => {
    setShowModal(false);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      data-scroll-target
      className="px-4 grid max-w-4xl mx-auto sm:px-6 lg:px-8 min-h-[calc(100vh-144px)] place-items-center">
      {!showModal ? (
        <div className="w-full animate-PageAppearRight">
          <ThemedH1 className="mb-4 text-center">{content.heading}</ThemedH1>
          <ThemedPLarge className="mb-6 text-center">
            {content.formDescription}
          </ThemedPLarge>

          <form
            className="w-full max-w-lg mx-auto"
            onSubmit={handleSubmit}>
            <InputWithLabel
              name="name"
              type="text"
              placeholder={content.namePlaceholder}
              formData={formData}
              setFormData={setFormData}>
              {content.nameLabel}
            </InputWithLabel>

            <InputWithLabel
              name="email"
              type="email"
              placeholder={content.emailPlaceholder}
              formData={formData}
              setFormData={setFormData}>
              {content.emailLabel}
            </InputWithLabel>

            <InputWithLabel
              name="message"
              type="textarea"
              placeholder={content.messagePlaceholder}
              formData={formData}
              setFormData={setFormData}>
              {content.messageLabel}
            </InputWithLabel>

            <SendCTA type="submit">
              <ThemedP>{content.submitButton}</ThemedP>
            </SendCTA>
          </form>
        </div>
      ) : (
        <div className="flex items-center justify-center w-full">
          <div className="relative flex flex-col items-center justify-center gap-8 p-8 rounded-3xl bg-light-mist dark:bg-dark-onyx shadow-xl max-w-xl">
            <ThemedH2 className="text-center">
              {content.thankYouHeading}
            </ThemedH2>
            <div className="text-center">
              <ThemedP>{content.thankYouLine1}</ThemedP>
              <ThemedP>{content.thankYouLine2}</ThemedP>
            </div>
            <Image
              className="animate-pulse"
              src="/logo/WindLogoNoTextLightMode.svg"
              alt="loading..."
              width={200}
              height={200}
            />
            <CallToActionButton onClick={resetForm}>
              {content.confirmButton}
            </CallToActionButton>
          </div>
        </div>
      )}
    </section>
  );
};
