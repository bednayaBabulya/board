import './App.scss'

import { Sidebar } from './components/Sidebar.tsx'
import { Calendar } from './pages/Calendar.tsx'
import { Profile } from './pages/Profile.tsx'

import { Route, Routes } from 'react-router-dom'
export function App() {
	return (
		<div className='main'>
			<Sidebar />

			<Routes>
				<Route path='/' element={<Profile />} />
				<Route path='/calendar' element={<Calendar />} />
			</Routes>
		</div>
	)
}
