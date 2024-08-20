"use client";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "../ui/animated-modal";
import { AnimatedTooltip } from "./animated-tooltip";

export function AnimatedModalDemo() {
  return (
    <Modal>
      <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
        <span className="text-center transition duration-500">
          Info
        </span>
      </ModalTrigger>
      <ModalBody>
        <ModalContent>
          <div className="flex flex-col items-center">
            <span className="text-5xl font-bold text-center pb-4">{"¿Quien soy?"}</span>
            {/* <span className="text-md font-[200]">{"Aquí publico mis proyectos mas destacados."}</span> */}
            <AnimatedTooltip />
          </div>
        </ModalContent>
      </ModalBody>
    </Modal>
  );
}


