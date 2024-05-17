import Image from "next/image";
import clsx from "clsx";
import styles from "./sass/layouts/_layouts.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header className={styles.masthead + ' section'}>
        <div className={styles.wrapper + ' container ph'}>
          <Link href="/">
            <Image
              src="/icon.png"
              alt="Magnitude Logo"
              className={styles.brand}
              width={60}
              height={60}
              priority
            />
          </Link>

          <div className={styles.buttons}>
            <a href="#" className="button">Join the team</a>
          </div>
        </div> 
      </header>


      <section className={styles.hero + ' section section-pv'}>
        <Image src="/hero.png" alt="Cataclysm Banner" width="1920" height="600" />
        <div className={styles.overlay}></div>

        <div className={styles.intro + ' container ph'}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt officiis eveniet inventore atque doloremque, iste eum aperiam deleniti molestiae, adipisci veritatis veniam explicabo labore, dolore omnis qui sed facere vero.</p>
        </div>
      </section>

      <section className={styles.roster + 'section section-pv'}>
        <div className="container ph">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum facere numquam saepe, architecto ratione mollitia consequuntur unde. Quasi eius delectus fuga non consequuntur, ex, expedita odio, nisi corporis cumque et.</p>
        </div>
      </section>


    </main>
  );
}
