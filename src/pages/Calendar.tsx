import { BellRing, Search, Settings, SquarePlus } from 'lucide-react'
import styles from './pages.module.scss'

export function Calendar() {
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
				<div className={styles.search}>
					<input type='text' placeholder='Search' />
					<Search className={styles.icon} />
					<div className={styles.management}>
						<button>
							<BellRing />
						</button>
						<button>
							<Settings />
						</button>
					</div>
				</div>
				<div></div>
			</main>
		</div>
	)
}
