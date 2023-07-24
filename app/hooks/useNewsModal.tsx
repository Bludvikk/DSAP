import { create } from "zustand";

interface NewsModal {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useNewsModal = create<NewsModal>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useNewsModal;
