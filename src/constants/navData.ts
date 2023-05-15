import RoutesConst from "./routes";

const NavData = [
  {
    title: "Home",
    path: RoutesConst.HOME,
    subNav: [],
  },
  {
    title: "Map",
    path: RoutesConst.MAP,
    subNav: [
      {
        title: "Interactive Map",
        path: RoutesConst.INTERACTIVE_MAP,
      },
      {
        title: "Unique Spot",
        path: RoutesConst.UNIQUE_SPOT,
      },
    ],
  },
  {
    title: "Community",
    path: RoutesConst.COMMUNITY,
    subNav: [],
  },
  {
    title: "Contact",
    path: RoutesConst.CONTACT,
    subNav: [],
  },
];

export default NavData;
