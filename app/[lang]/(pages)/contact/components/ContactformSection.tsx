"use client";

import { useTranslations } from "next-intl";
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

export const ContactformSection = () => {
  const t = useTranslations("contactForm");
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
          <ThemedH1 className="mb-4 text-center">{t("heading")}</ThemedH1>
          <ThemedPLarge className="mb-6 text-center">
            {t("formDescription")}
          </ThemedPLarge>

          <form
            className="w-full max-w-lg mx-auto"
            onSubmit={handleSubmit}>
            <InputWithLabel
              name="name"
              label={t("nameLabel")}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
            <InputWithLabel
              name="email"
              label={t("emailLabel")}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
            <InputWithLabel
              name="message"
              label={t("messageLabel")}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              textarea
            />
            <div className="flex justify-center mt-6">
              <SendCTA type="submit">{t("sendButton")}</SendCTA>
            </div>
          </form>
        </div>
      ) : (
        <div className="w-full animate-PageAppearRight text-center">
          <ThemedH2 className="mb-4">{t("thankYouHeading")}</ThemedH2>
          <ThemedP className="mb-6">{t("thankYouMessage")}</ThemedP>
          <button onClick={resetForm} className="mt-4">
            <CallToActionButton>{t("resetButton")}</CallToActionButton>
          </button>
        </div>
      )}
    </section>
  );
};
