import { StandardButton } from "@components/ui/header/organisms/button";
import { ThemeSwitch } from "@components/ui/header/themeswitcher/ThemeSwitcher";







export default function Home() {
  return (
    <>
      <ThemeSwitch />
      <StandardButton text="Klikk her" />
    </>
  );
}
