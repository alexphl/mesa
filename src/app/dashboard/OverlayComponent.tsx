import SettingsPane from "./SettingsPane";
import FocusTrap from "focus-trap-react";
import { RemoveScroll } from "react-remove-scroll";

const OverlayComponent = (props: {controller: any}) => {
  let [isOpen, setIsOpen] = props.controller;

  return (
    <>
      {isOpen && (
        <RemoveScroll>
          <FocusTrap>
            <div className="fixed z-50 flex h-screen w-screen cursor-pointer place-content-center place-items-center">
              <div
                className="fixed h-screen w-screen bg-zinc-800/[0.7] backdrop-blur-sm"
                onClick={() => setIsOpen(false)}
              />

              <div className="absolute z-[51] h-5/6 w-screen cursor-default shadow-lg md:w-[800px]">
                <SettingsPane />
              </div>
            </div>
          </FocusTrap>
        </RemoveScroll>
      )}
    </>
  );
};

export default OverlayComponent;
