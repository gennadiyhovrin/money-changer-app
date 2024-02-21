"use client";
import Link from "next/link";

const NavigationItem = ({
  url,
  text,
  color,
  className,
}: {
  url: string;
  text: string;
  color: string;
  className?: string;
}) => {
  return (
    <Link className={`${className} ${color}`} href={url}>
      {text}
    </Link>
  );
};

export default NavigationItem;
