import Link from "next/link";
import Logo from "../brand/logo";
import PrimaryButton from "../buttons/primaryButton";
import PaddingContainer from "../layouts/paddingContainer";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <PaddingContainer>
        {/* Navbar Container */}
        <div className="flex justify-between items-center py-4 border-b border-b-white backdrop-blur-md">
          <div>
            <Logo size="medium" />
          </div>
          <div className="flex gap-4 items-center">
            <Link
              className="text-neutral-600 hover:text-neutral-900 duration-75 transition-colors ease-out"
              href="/cities"
            >
              Cities
            </Link>
            <Link
              className="text-neutral-600 hover:text-neutral-900 duration-75 transition-colors ease-out"
              href="/experiences"
            >
              Experiences
            </Link>
            <PrimaryButton title="Sign Up" />
          </div>
        </div>
      </PaddingContainer>
    </div>
  );
};

export default Navbar;