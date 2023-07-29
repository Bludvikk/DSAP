// useNewsModal.ts
import { create } from "zustand";

interface NewsModal {
  isOpen: boolean;
  newsItemId: number | null;
  onOpenForNew: () => void; // Function to open the modal for new news items
  onOpenForUpdate: (newsItemId: number) => void; // Function to open the modal for updating news items
  onClose: () => void;
}

const useNewsModal = create<NewsModal>((set) => ({
  isOpen: false,
  newsItemId: null,
  onOpenForNew: () => set({ isOpen: true, newsItemId: null }), // Set newsItemId to null for new items
  onOpenForUpdate: (newsItemId) => set({ isOpen: true, newsItemId }), // Set the provided newsItemId for updates
  onClose: () => set({ isOpen: false, newsItemId: null }),
}));

export default useNewsModal;
