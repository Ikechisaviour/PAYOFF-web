"use client";

interface IProps {
  title: string;
  description: string;
}

export function SettingsHeader({ title, description }: IProps) {
  return (
    <div className="border-b pb-3">
      <h3 className="scroll-m-20 text-base lg:text-lg font-semibold tracking-tight">
        {title}
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-1 text-xs lg:text-sm text-formText">
        {description}
      </p>
    </div>
  );
}
