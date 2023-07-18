import { create } from "zustand";

interface WriteNewsModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useWriteNewsModal = create<WriteNewsModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useWriteNewsModal;
