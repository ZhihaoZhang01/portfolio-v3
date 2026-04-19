"use server";

import React from "react";
import { Resend } from "resend";
import { contactData } from "@/data/data";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  if (!process.env.RESEND_API_KEY?.trim()) {
    return {
      error:
        "Email service is not configured. Add RESEND_API_KEY to .env.local (see .env.example).",
    };
  }

  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  try {
    const { data, error } = await resend.emails.send({
      from:
        process.env.RESEND_FROM ??
        "Contact Form <onboarding@resend.dev>",
      to: contactData.formInboxEmail,
      subject: "Message from contact form",
      replyTo: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    });

    if (error) {
      return { error: error.message };
    }

    return { data };
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
};
