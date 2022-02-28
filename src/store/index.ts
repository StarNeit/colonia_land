import { createStore, Store, createLogger } from 'vuex';

import { isDebugMode } from '@/services/environment';

import { store as app, State as AppState } from './modules/app';
// define your typings for the store state
export type State = {
  app: AppState,
}

export const store = createStore<State>({
  strict: true,
  modules: {
    app,
  },
  plugins: isDebugMode ? [createLogger({})] : [],
});

export function useStore(): Store<State> {
  return store as Store<State>;
}
