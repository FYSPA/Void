import HeaderComponent from "@/components/landing/HeaderComponent";
import Margin from "@/components/landing/HeroComponent";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <HeaderComponent />
      <Margin />
    </div>
  );
}
