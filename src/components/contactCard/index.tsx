import localeImg from "../../assets/locale.png";
import styles from "./index.module.scss";

export default function ContactCard() {
	return (
		<div className={styles.container}>
			<div className={styles.locale}>
				<img src={localeImg} alt="" />
			</div>
			<div className={styles.infos}>
				<span>Home - Matriz</span>
				<span>Goiânia - GO</span>
				<span>(62) 9 9999-9999</span>
			</div>
		</div>
	);
}
