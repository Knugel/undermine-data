import React from 'react';
import { Store } from '../interfaces';

const Context = React.createContext<Store>({ behaviors: [], entities: [], dataObjects: [] });

export default Context;
