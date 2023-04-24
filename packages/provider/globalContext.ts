import { GlobalContextT } from 'provider';
import { createContext } from 'react';

export const GlobalContext = createContext<GlobalContextT>({} as GlobalContextT);
