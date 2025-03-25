import { CalendarDays, MessageCircleQuestion, UserRound } from 'lucide-react'
import { Link } from 'react-router'
import styles from './sidebar.module.scss'

export function Sidebar() {
	return (
		<div className={styles.sidebar}>
			<Link to='/'>
				<button>
					<UserRound />
				</button>
			</Link>
			<div className={styles.mode}>
				<Link to='/calendar'>
					<button>
						<CalendarDays />
					</button>
				</Link>

				<button>
					<MessageCircleQuestion />
				</button>
			</div>
		</div>
	)
}
