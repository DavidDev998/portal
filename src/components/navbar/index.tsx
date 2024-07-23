import PersonPinIcon from "@mui/icons-material/PersonPin";
import { Button } from "@mui/material";
import companyLogo from "../../assets/image.png";
import styles from "./index.module.scss";

export default function Navbar() {
	return (
		<div className={styles.container}>
			<img className={styles.logo} src={companyLogo} alt="" />
			<div className={styles.linksNavbar}>
				<Button className={styles.btnNavbar}>
					<span className={styles.btnNavbarText}>Nossa Empresa</span>
				</Button>
				<Button className={styles.btnNavbar}>
					<span className={styles.btnNavbarText}>
						Nossos Produtos
					</span>
				</Button>
				<Button className={styles.btnNavbar}>
					<span className={styles.btnNavbarText}>Contato</span>
				</Button>
				<Button className={styles.btnNavbar}>
					<span className={styles.btnNavbarText}>
						Anuncie seu imóvel
					</span>
				</Button>
				<Button className={styles.btnNavbar}>
					<span className={styles.btnNavbarText}>Novidades</span>
				</Button>
			</div>
			<div className={styles.iconsNavbar}>
				<Button className={styles.btnNavbar}>
					<PersonPinIcon className={styles.navIcon} />
				</Button>
			</div>
		</div>
	);
}
