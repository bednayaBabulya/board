import { BellRing, Search, Settings } from 'lucide-react'
import styles from './components.module.scss'

export function SearchElement() {
	return (
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
	)
}
