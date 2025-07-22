
import CounterSlice from './fetures/CounterSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store=configureStore(
    {
        reducer:{
            counter:CounterSlice,
        },
    }
)