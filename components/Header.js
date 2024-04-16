import styles from "./Header.module.scss";
import Container from "../components/Container";

const Header = () => {
  return (
    <header className={styles.header}>
      <Container> Logo and nav</Container>
    </header>
  );
};
export default Header;
