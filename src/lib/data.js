import { Settings, ThumbsDown } from "lucide-react";
import { RxDashboard } from "react-icons/rx";
import { FiEdit3 } from "react-icons/fi";
import { TbMessage2Heart } from "react-icons/tb";
import { PiHandbagSimple } from "react-icons/pi";
import { BsInfoSquare } from "react-icons/bs";
import { MdLogout } from "react-icons/md";

// side bar
export const sidebarList = [
  {
    id: 1,
    title: "Dashboard",
    link: "/profile",
    icon: <RxDashboard className="text-[22px]" />,
  },
  {
    id: 2,
    title: "Edit Biodata",
    link: "/profile/edit-biodata",
    icon: <FiEdit3 className="text-[23px]" />,
  },
  {
    id: 3,
    title: "Favorites List",
    link: "/profile/favorites-list",
    link1: "",
    icon: <TbMessage2Heart className="text-[23px]" />,
  },
  {
    id: 4,
    title: "List of dislikes",
    link: "/profile/list-of-dislikes",
    link1: "",
    icon: <ThumbsDown className="text-[22px]" />,
  },
  {
    id: 5,
    title: "My Purchases",
    link: "/profile/my-purchases",
    link1: "",
    icon: <PiHandbagSimple className="text-[24px]" />,
  },
  {
    id: 6,
    title: "Support & Reports",
    link: "/profile/support-reports",
    link1: "",
    icon: <BsInfoSquare className="text-[21px]" />,
  },
  {
    id: 7,
    title: "Settings",
    link: "/profile/settings",
    link1: "",
    icon: <Settings className="" />,
  },

  {
    id: 8,
    title: "Logout",
    link: "/",
    icon: <MdLogout className="text-[23px]" />,
  },
];

// Edit biodata tab list
export const editBiodata = [
  {
    id: 1,
    title: "Personal Information",
    value: "personal_information",
  },
  {
    id: 2,
    title: "Address",
    value: "address",
  },
  {
    id: 3,
    title: "Education Qualification",
    value: "education",
  },

  {
    id: 4,
    title: "Personal Information",
    value: "personal",
  },
  {
    id: 5,
    title: "Occupational Information",
    value: "occupational",
  },
  {
    id: 6,
    title: "Marriage Related Information",
    value: "marriage",
  },
  {
    id: 7,
    title: "Professional Memberships or Affiliations",
    value: "member",
  },
  {
    id: 8,
    title: "Expected Life Partner",
    value: "expected",
  },
  {
    id: 9,
    title: "Pledge",
    value: "pledge",
  },
  {
    id: 10,
    title: "Contact",
    value: "contact",
  },
];

export const addCompanyTabList = [
  {
    id: 1,
    title: "Company Name and Logo",
    value: "name",
  },
  {
    id: 2,
    title: "Introduction",
    value: "intro",
  },
  {
    id: 3,
    title: "Mission Statement",
    value: "mission",
  },
  {
    id: 4,
    title: "History",
    value: "history",
  },
  {
    id: 5,
    title: "Founders/Key Executives",
    value: "executives",
  },
  {
    id: 6,
    title: "Location and Facilities",
    value: "location",
  },
  {
    id: 7,
    title: "Products or Services",
    value: "product",
  },
  {
    id: 8,
    title: "Target Market",
    value: "market",
  },
  {
    id: 9,
    title: "Competitive Advantage",
    value: "advantage",
  },
  {
    id: 10,
    title: "Financial Overview",
    value: "overview",
  },
  {
    id: 11,
    title: "Milestones and Achievements",
    value: "milestones",
  },
  {
    id: 12,
    title: "Partnerships or Affiliations",
    value: "partnerships",
  },
  {
    id: 13,
    title: "Social Responsibility Initiatives",
    value: "responsibility",
  },
  {
    id: 14,
    title: "Future Goals and Outlook",
    value: "goals",
  },
  {
    id: 15,
    title: "Contact Information",
    value: "contact",
  },
];
