import {observer} from 'mobx-react-lite';
import React from 'react';
import {GlobalRouter} from './routers/GlobalRouter';

export const App = observer(() => <GlobalRouter />);
