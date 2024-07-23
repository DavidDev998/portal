import corretorImg from "../../assets/corretor.png";
import styles from "./index.module.scss";

export default function PersonCard() {
	return (
		<div className={styles.container}>
			<img src={corretorImg} alt="" className={styles.productImage} />
			<div className={styles.titleContainer}>
				<span className={styles.name}>Roberto Carlos</span>
				<br />
				<br />
				<span className={styles.desc}>(62) 9 9999-9999</span>
			</div>
		</div>
	);
}
