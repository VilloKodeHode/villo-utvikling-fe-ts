"use client"

import React, { useState } from "react";
import { ThemedH2, ThemedH3, ThemedPLarge } from "@components/atoms/ThemedText";
import { ComponentProps } from "@interfaces/PageProps";

export const FAQSection = ({ content }: ComponentProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="max-w-3xl mx-auto my-16 px-4">
      <ThemedH2 className="mb-6 text-center">{content?.title}</ThemedH2>
      <ThemedPLarge className="mb-8 text-center">{content?.description}</ThemedPLarge>
      <dl className="space-y-8 glass-morphism-section p-6 rounded-lg shadow-lg">
        {content?.faq.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={item.question} className="border-b last:border-0">
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${idx}`}
                onClick={() => toggle(idx)}
                className="w-full text-left focus:outline-none flex items-center justify-between py-4"
              >
                <ThemedH3 className="font-semibold mb-0">{item.question}</ThemedH3>
                <span className="ml-2 text-3xl">{isOpen ? "−" : "+"}</span>
              </button>
              <div
                id={`faq-panel-${idx}`}
                style={{
                  maxHeight: isOpen ? 500 : 0,
                  overflow: "hidden",
                  transition: "max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
                aria-hidden={!isOpen}
              >
                <ThemedPLarge className={`ml-4 my-8 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>{item.answer}</ThemedPLarge>
              </div>
            </div>
          );
        })}
      </dl>
    </section>
  );
};
