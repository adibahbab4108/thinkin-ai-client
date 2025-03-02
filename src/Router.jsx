import { Route, Routes } from 'react-router';
import AppLayout from './layouts/AppLayout';
const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<AppLayout />}>
            
            </Route>
        </Routes>
    );
};

export default Router;