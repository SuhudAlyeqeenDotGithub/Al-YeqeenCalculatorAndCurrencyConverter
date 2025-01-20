import React from "react";
import Image from "next/image"; // Import next/image

const Logo: React.FC = () => {
  return <Image src="/faviLogo.png" alt="Al-Yeqeen Logo" width={200} height={200} />;
};

export default Logo;
