import HeaderComponent from "@/components/landing/HeaderComponent";
import HeroComponent from "@/components/landing/HeroComponent";
import DashboardComponent from "@/components/landing/DashboardComponent";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <HeaderComponent />
      <div className="flex flex-col flex-1">
        <div className="z-10">
          <HeroComponent />
        </div>
        <DashboardComponent />
      </div>
    </div>
  );
}
