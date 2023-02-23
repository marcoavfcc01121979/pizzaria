// import styles from "../../styles/Home.module.scss";

import Head from "next/head";
import styles from "../../styles/Home.module.scss";
import Image from "next/image";
import logoImg from "../../public/logo.svg";
import { Input } from "../components/ui/input";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pizzaria - Faça seu login</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Pizzaria" />

        <div className={styles.login}>
          <form>
            <Input placeholder="Digite seu email" type="text" />
            <Input placeholder="Digite sua senha" type="password" />
          </form>
        </div>
      </div>
    </>
  );
}
