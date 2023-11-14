import { create } from 'zustand';

interface useShopModalProps {
  isOpen: boolean;
  type:"create" | "select" ;
  onOpen: () => void;
  onClose: () => void;
}



export const useShopModal = create<useShopModalProps>((set) => ({
  isOpen: false, //first State
  type:'create',
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));



