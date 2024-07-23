import GarageIcon from "@mui/icons-material/Garage";
import KingBedIcon from "@mui/icons-material/KingBed";
import ShowerIcon from "@mui/icons-material/Shower";
import StraightenIcon from "@mui/icons-material/Straighten";
import apImage from "../../assets/ap.png";
import styles from "./index.module.scss";

export default function Product() {
	return (
		<div className={styles.container}>
			<img src={apImage} alt="" className={styles.productImage} />
			<div className={styles.titleContainer}>
				<span className={styles.building}>Now Milão</span> -
				<span className={styles.name}> Apartamento de 2 quartos</span>
				<br />
				<br />
				<span className={styles.desc}>
					2 quartos com suite, varanda gourmet
				</span>
				<span className={styles.value}>R$479.000,00</span>
				<span className={styles.city}>Goiânia - GO</span>
			</div>
			<div className={styles.subInfosContainer}>
				<div className={styles.subInfo}>
					<StraightenIcon />
					<span>45m²</span>
				</div>
				<div className={styles.subInfo}>
					<KingBedIcon />
					<span>2 quartos</span>
				</div>
				<div className={styles.subInfo}>
					<ShowerIcon />
					<span>2 banheiros</span>
				</div>
				<div className={styles.subInfo}>
					<GarageIcon />
					<span>2 vagas</span>
				</div>
			</div>
		</div>
	);
}
