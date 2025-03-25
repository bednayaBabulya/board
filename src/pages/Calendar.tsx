import { SquarePlus } from 'lucide-react'
import { useEffect, useState } from 'react'
import { SearchElement } from '../components/Search'
import styles from './pages.module.scss'

export function Calendar() {
	const [weekDays, setWeekDays] = useState<string[]>([])

	useEffect(() => {
		const daysOfWeek = [
			'Воскресенье',
			'Понедельник',
			'Вторник',
			'Среда',
			'Четверг',
			'Пятница',
			'Суббота',
		]
		const months = [
			'января',
			'февраля',
			'марта',
			'апреля',
			'мая',
			'июня',
			'июля',
			'августа',
			'сентября',
			'октября',
			'ноября',
			'декабря',
		]

		const today = new Date()
		const days = []

		for (let i = 0; i < 8 - today.getDay(); i++) {
			const currentDate = new Date()
			currentDate.setDate(today.getDate() + i)

			const dayName = daysOfWeek[currentDate.getDay()]
			const dayNumber = currentDate.getDate()
			const monthName = months[currentDate.getMonth()]

			days.push(`${dayName}, ${dayNumber} ${monthName}`)
		}

		setWeekDays(days)
	}, [])

	return (
		<div className={styles.calendarMain}>
			<aside>
				<div className={styles.projectTitle}>
					<h2>Project</h2>
					<button>
						<SquarePlus />
					</button>
				</div>
			</aside>
			<main>
				<SearchElement />
				<ul>
					{weekDays.map((day, index) => (
						<li key={index}>{day}</li>
					))}
				</ul>
			</main>
		</div>
	)
}
