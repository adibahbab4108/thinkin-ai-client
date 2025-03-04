import { Route, Routes } from 'react-router';
import AppLayout from './layouts/AppLayout';
import GenerateText from './components/GenerateText';
import GenerateImage from './components/GenerateImage';
import Home from "./pages/Home"
const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<AppLayout />}>
                <Route index element={<Home />} />
                <Route path='ask' element={<GenerateText />} />
                <Route path='generate-image' element={<GenerateImage />} />
            </Route>
        </Routes>
    );
};

export default Router;