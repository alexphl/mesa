import SettingsPane from "./SettingsPane";

const OverlayComponent = (props: { OverlayController: any }) => {
  const [overlayIsOpen, setOverlayIsOpen] = props.OverlayController;

  return (
    <>
      {overlayIsOpen && (
        <div className="fixed z-50 flex h-screen w-screen cursor-pointer place-content-center place-items-center">
          <div
            className="fixed h-screen w-screen bg-zinc-800/[0.7] backdrop-blur-sm"
            onClick={() => setOverlayIsOpen(false)}
          />

          <div className="relative z-[51] w-screen md:w-[800px] cursor-default shadow-lg h-5/6">
            <SettingsPane />
          </div>
        </div>
      )}
    </>
  );
};

export default OverlayComponent;
