"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { SubmitButton } from "@/components/SubmitButton";
import { sendEmail } from "@/lib/sendEmail";
import { toast } from "react-hot-toast";
import { contactData } from "@/data/data";

interface ContactProps {
  delay?: number;
}

export function Contact({ delay = 0 }: ContactProps) {
  return (
    <section id="contact">
      <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
        <BlurFade delay={delay}>
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter">
              Get in Touch
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Please contact me at{" "}
              {contactData.emails.map((entry, i) => (
                <span key={entry.mailto}>
                  {i > 0 ? " or " : null}
                  <a className="underline" href={`mailto:${entry.mailto}`}>
                    {entry.display}
                  </a>
                </span>
              ))}
              , or through this form.
            </p>
          </div>
        </BlurFade>

        <BlurFade delay={delay + 0.01}>
          <form
            action={async (formData) => {
              const { error } = await sendEmail(formData);

              if (error) {
                toast.error(error);
                return;
              }

              toast.success("Email sent successfully!");
            }}
            className="mt-6 flex flex-col w-[min(100%,38rem)] mx-auto"
          >
            <input
              className="h-14 px-4 rounded-lg border border-input bg-gray-50 dark:bg-white/5 transition-all"
              name="senderEmail"
              type="email"
              required
              maxLength={500}
              placeholder="Your email"
            />
            <textarea
              className="h-52 my-3 rounded-lg border border-input bg-gray-50 dark:bg-white/5 p-4 transition-all"
              name="message"
              placeholder="Your message"
              required
              maxLength={5000}
            />
            <SubmitButton />
          </form>
        </BlurFade>
      </div>
    </section>
  );
}
