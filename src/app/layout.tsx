import { Outlet } from "react-router-dom";
import { LanguageSwitcher } from "../utils/LanguageSwitcher";

export function Layout() {
  return (
    <div className="app">
      <LanguageSwitcher />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
