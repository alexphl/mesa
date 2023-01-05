import {
  Cog6ToothIcon,
  UserCircleIcon,
  ChartPieIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/solid";

const NavPane = (props: { OverlayController: any }) => {
  const [overlayIsOpen, setOverlayIsOpen] = props.OverlayController;

  return (
    <nav className="fixed grid h-screen grid-rows-[50px_5fr_50px] grid-cols-1 gap-8 p-6 lg:p-10 text-neutral-300 transition-all">
      <div className="aspect-square w-14 cursor-pointer rounded-3xl bg-black/[0.3] p-3 shadow-lg transition-all hover:scale-105 ">
        <UserCircleIcon />
      </div>

      <div className="flex flex-col place-content-evenly self-end rounded-3xl bg-black/[0.3] shadow-lg hover:scale-105">
        <div className="w-14 cursor-pointer rounded-3xl p-3 transition-all hover:scale-105 hover:text-white">
          <PlusCircleIcon />
        </div>

        <div className="w-14 cursor-pointer rounded-3xl p-3 transition-all hover:scale-105 hover:text-white">
          <ChartPieIcon />
        </div>
      </div>

      <div
        className="aspect-square w-14 cursor-pointer rounded-3xl bg-black/[0.3] p-3 text-neutral-300 shadow-lg transition-all hover:scale-105 hover:text-white"
        onClick={() => setOverlayIsOpen(true)}
      >
        <Cog6ToothIcon />
      </div>
    </nav>
  );
};

export default NavPane;
