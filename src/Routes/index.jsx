import Header from '../components/Header';
import { Agents, Articles, NorFound, Contacts, Ideas, Overview, Settings, Subscription, Tickets } from '../pages'
import { Routes, Route } from 'react-router-dom'

function Routers() {
    return (
        <div className='w-[80%] p-[30px] routers'>
            <Header />
            <Routes>
                <Route path='*' element={<NorFound />} />
                <Route path='/' element={<Overview />} />
                <Route path='/tickets' element={<Tickets />} />
                <Route path='/ideas' element={<Ideas />} />
                <Route path='/contacts' element={<Contacts />} />
                <Route path='/agents' element={<Agents />} />
                <Route path='/articles' element={<Articles />} />
                <Route path='/settings' element={<Settings />} />
                <Route path='/subcription' element={<Subscription />} />
            </Routes>
        </div>
    )
}

export default Routers;