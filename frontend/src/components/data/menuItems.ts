// Menu items data for DiscussMenuOverlay
interface MenuItem {
  id: string;
  icon: string;
  text: string;
}

const menuItems: MenuItem[] = [
  { id: "discuss", icon: "/Popup/2.svg", text: "Discuss" },
  { id: "duas", icon: "/Popup/1.png", text: "Duas" },
  { id: "reminders", icon: "/Popup/4.png", text: "Reminders" },
  { id: "notes", icon: "/Popup/5.png", text: "My notes" },
  { id: "wall", icon: "/Popup/7.png", text: "The wall of duas" },
  { id: "profile", icon: "/Popup/3.svg", text: "My profile" },
  { id: "interior", icon: "/Popup/6.png", text: "Interior design" },
];

export default menuItems;
