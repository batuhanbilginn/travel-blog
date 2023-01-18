"use client";
import { useState } from "react";

interface PrimaryButtonProps {
  title: string;
}

const PrimaryButton = ({ title }: PrimaryButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button className="bg-neutral-900 py-2 px-3 rounded-md text-white font-medium hover:bg-neutral-700 transition-colors duration-75 ease-out">
      {title}
    </button>
  );
};

export default PrimaryButton;
