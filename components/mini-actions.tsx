"use client";
import { Menu } from "./menu";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Icons } from "./icons";

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

interface IProps {
  icon: keyof typeof Icons;
  name: string;
  isActive?: boolean;
  link: string;
}

const actions: Array<IProps> = [
  {
    icon: "add",
    name: "Add Fund",
    isActive: true,
    link: "/dashboard/home/add",
  },
  {
    icon: "badgeDollarSign",
    name: "Send",
    isActive: false,
    link: "/dashboard/home/send",
  },
  {
    icon: "zap",
    name: "Instant Send",
    isActive: false,
    link: "/dashboard/home/instant-send",
  },

  {
    icon: "badgeDollarSign",
    name: "Instant Receive",
    isActive: false,
    link: "/dashboard/home/instant-receive",
  },
  {
    icon: "banknote",
    name: "Cheque",
    isActive: false,
    link: "/dashboard/home/cheque",
  },
];

export function MiniActions() {
  const router = useRouter();
  const navigate = (link: string) => router.push(link);

  return (
    <motion.div
      className="mt-5 w-full overflow-x-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 no-scrollbar"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {actions.map((action) => (
        <motion.div key={action.name} variants={itemVariants}>
          <Menu onClick={() => navigate(action.link)} {...action} />
        </motion.div>
      ))}
    </motion.div>
  );
}
