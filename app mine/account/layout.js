import SideNavigation from "../_components/SideNavigation";

export default function Layout({ children }) {
  return (
    <div className="grid grid-cols-[18rem_1fr] h-full gap-12">
      <div>
        <SideNavigation />
      </div>
      <div className="py-1">{children}</div>
    </div>
  );
}
