"use client";

import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ReactNode } from "react";

interface GenericModalProps {
  isOpen: boolean;
  title: string;
  children: ReactNode;
  onClose: () => void;
}

export function GenericModal({ isOpen, title, children, onClose }: GenericModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white rounded-lg shadow-lg max-w-5xl w-full">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogClose className="absolute top-2 right-2 cursor-pointer">✕</DialogClose>
        </DialogHeader>
        <div>{children}</div>
      </DialogContent>
    </Dialog>
  );
}
