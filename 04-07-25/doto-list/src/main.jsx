import { createRoot } from 'react-dom/client';
import TaskInput from './component/TaskInput';
import TaskList from './component/TaskList';
import TaskContextProvider from './context/TaskContaxt';
import DarkMode from './component/DarkMode';
import 'bootstrap/dist/css/bootstrap.css';

const root = createRoot(document.getElementById('root'));

root.render(
  <>
    <style>
      {`
        body.bg-dark input,
        body.bg-dark .card {
          background-color: #2c2c2c !important;
          color: white !important;
        }

        body.bg-dark .list-group-item {
          background-color: #444 !important;
          border-color: #666;
          color: #fff;
        }

        body.bg-dark .btn {
          border-color: #ccc;
        }
      `}
    </style>

    <TaskContextProvider>
      <DarkMode />
      <TaskInput />
      <TaskList />
    </TaskContextProvider>
  </>
);
