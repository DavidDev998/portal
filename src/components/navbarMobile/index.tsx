import { PersonPinCircleOutlined } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";
import { useState } from "react";
import companyLogo from "../../assets/image.png";
import styles from "./index.module.scss";

export default function NavbarMobile() {
	const [open, setOpen] = useState(false);
	return (
		<>
			<div className={styles.container}>
				<img className={styles.logo} src={companyLogo} alt="" />
				<Button
					className={styles.hamburguer}
					onClick={() => setOpen(!open)}
				>
					<MenuIcon />
				</Button>
				{open && (
					<div className={styles.hiddenNavbar}>
						<div className={styles.linksNavbar}>
							<Button className={styles.btnNavbar}>
								<span className={styles.btnNavbarText}>
									Nossa Empresa
								</span>
							</Button>
							<Button className={styles.btnNavbar}>
								<span className={styles.btnNavbarText}>
									Nossos Produtos
								</span>
							</Button>
							<Button className={styles.btnNavbar}>
								<span className={styles.btnNavbarText}>
									Contato
								</span>
							</Button>
							<Button className={styles.btnNavbar}>
								<span className={styles.btnNavbarText}>
									Anuncie seu imóvel
								</span>
							</Button>
							<Button className={styles.btnNavbar}>
								<span className={styles.btnNavbarText}>
									Novidades
								</span>
							</Button>
						</div>
						<div className={styles.iconsNavbar}>
							<Button className={styles.btnNavbar}>
								<PersonPinCircleOutlined
									className={styles.navIcon}
								/>
							</Button>
						</div>
					</div>
				)}
			</div>
		</>
	);
}
