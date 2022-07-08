import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'
import HomePage from './pages/HomePage'
import PageNotFind from './pages/PageNotFind'

export function AppRoutes(){
    return (
        <Router>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/home' element={<HomePage />} />
                <Route path='/sign' element={<HomePage />} />
                <Route path='*' element={<PageNotFind />} />
            </Routes>
        </Router>
    )
}