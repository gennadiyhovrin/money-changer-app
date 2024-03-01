import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';



export const useApplicationStore = create()(
  devtools(
    persist(
      (_set) => ({
        history: [],
      }),
      {
        name: 'application-storage',
        storage: createJSONStorage(() => localStorage),
        partialize(state) {
          const { history } = state;
          return { history };
        },
      },
    ),
  ),
);
