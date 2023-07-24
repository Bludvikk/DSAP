import { create } from "zustand";

interface ConventionStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useWriteConventionModal = create<ConventionStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useWriteConventionModal;
