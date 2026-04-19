"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader } from "@/components/ui/card";
interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  period: string;
  description?: readonly string[];
  skills?: readonly string[];
}

export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  period,
  description,
  skills,
}: ResumeCardProps) => {
  return (
    <div className="block">
      <Card className="flex">
        <div className="flex-none">
          <Avatar className="border size-12 m-auto bg-muted-background dark:bg-foreground">
            <AvatarImage
              src={logoUrl}
              alt={altText}
              className="object-contain"
            />
            <AvatarFallback>{altText[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-grow ml-4 items-center flex-col">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="font-semibold leading-none text-xs sm:text-sm">
                {title}
              </h3>
              <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                {period}
              </div>
            </div>
            {subtitle && <div className="font-sans text-xs">{subtitle}</div>}
          </CardHeader>
          {description && description.length > 0 && (
            <ul className="mt-0 mb-3 pr-4 text-xs sm:text-sm list-disc list-outside ml-4 space-y-1 text-muted-foreground">
              {description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          )}
          {skills && skills.length > 0 && (
            <div className="mb-3 ml-4">
              <div className="flex flex-wrap gap-2">
                <span className="text-xs sm:text-sm font-medium text-foreground">
                  Technologies:
                </span>
                {skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-1 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-800/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};
