import { Routes, Route } from 'react-router-dom'
import Home from './src/pages/Home.jsx'
import RestaurantDetails from './src/pages/RestaurantDetails.jsx'

const App = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/restaurants/:id' element={<RestaurantDetails />} />
            </Routes>
        </>
    )
}

export default App