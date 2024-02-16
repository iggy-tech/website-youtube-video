import { motion } from "framer-motion";
import Link from "next/link";

interface DropDownMenuProps {
  onClose: () => void;
}

const DropDownMenu: React.FC<DropDownMenuProps> = ({ onClose }) => {
  return (
    <motion.div
      className="
    w-screen
    h-screen
    bg-gradient-to-b 
    from-neutral-50
     to-neutral-400 
     bg-opacity-50
     text-slate-300
     p-6
     space-y-4
     absolute
     top-28
     left-0
     right-0
     z-50
     rounded-t-3xl
    "
      initial={{ opacity: 0, y: "-80%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-100%" }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex-col flex space-y-10">
        <Link href="/pricing" className=" text-black text-2xl">
          Pricing
        </Link>
        <Link href="/contact" className=" text-black text-2xl">
          Contact
        </Link>

        <Link href="/book" className=" text-black text-2xl">
          Book a call
        </Link>
      </div>
    </motion.div>
  );
};

export default DropDownMenu;
