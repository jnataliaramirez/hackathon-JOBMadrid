//router
import { Routes, Route, BrowserRouter } from 'react-router-dom';
//screens
import { Layout } from '../components/screen/Layout';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Layout />} />
            </Routes>
        </BrowserRouter>
    )
}