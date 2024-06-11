function ScreenCover({ closeMenu, navOpen }: ScreenCoverProps) {
  return (
    <div
      className={`fixed w-full bg-black h-screen top-0 left-0 z-10 opacity-40  ${
        navOpen ? "block" : "hidden"
      }`}
      onClick={closeMenu}
    ></div>
  );
}
interface ScreenCoverProps {
  navOpen: boolean;
  closeMenu(): void;
}

export default ScreenCover;
