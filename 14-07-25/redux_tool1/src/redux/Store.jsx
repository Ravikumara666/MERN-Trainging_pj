import {configureStore} from '@reduxjs/toolkit';
import reducer from '../../../redux-toolkit/src/redux/fetures/CounterSlice';
import CounteSlice from './features/CounteSlice.jsx';

const store=configureStore({
    reducer:{
        counter:CounteSlice
    },
})