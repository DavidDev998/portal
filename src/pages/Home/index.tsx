import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import ContactCard from "../../components/contactCard";
import Navbar from "../../components/navbar";
import NavbarMobile from "../../components/navbarMobile";
import Product from "../../components/product";
import styles from "./home.module.scss";

export default function Home() {
	console.log(window.innerWidth);
	return (
		<div className={styles.container}>
			{window.innerWidth > 1080 ? <Navbar /> : <NavbarMobile />}
			<div className={styles.bannerContainer}>
				<video
					id="background-video"
					loop
					autoPlay
					muted
					className={styles.video}
				>
					<source
						src="https://videos.pexels.com/video-files/854325/854325-hd_1280_720_25fps.mp4"
						type="video/mp4"
					/>
				</video>
				<div className={styles.videoContent}>
					<h1 className={styles.homeTitle}>
						Explore, escolha, viva, seu próximo lar está aqui.
					</h1>
					<div className={styles.searchContainer}>
						<form
							onSubmit={(ev) => {
								ev.preventDefault();
								const productContainer =
									document.getElementById(
										"productsContainer",
									);
								productContainer?.scrollIntoView({
									behavior: "smooth",
								});
							}}
						>
							<input type="text" className={styles.searchInput} />
						</form>
						<Button className={styles.btnNavbar}>
							<SearchIcon className={styles.navIcon} />
						</Button>
					</div>
				</div>
			</div>
			<div id="productsContainer" className={styles.productsContainer}>
				<Product />
				<Product />
				<Product />
				<Product />
			</div>
			<div className={styles.contactContainer}>
				<h2>Contatos</h2>
				<ContactCard />
			</div>
			<div className={styles.footer}>
				<span>
					@2024 Home Imobiliária. Todos os direitos reservados
				</span>
				<span>
					Desenvolvido por <a>A&E Development</a>
				</span>
			</div>
		</div>
	);
}
