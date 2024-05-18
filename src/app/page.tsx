"use client";
import Image from "next/image";
import styles from "./sass/layouts/_layouts.module.scss";
import Link from "next/link";
import { TwitchEmbed } from "react-twitch-embed";

import hero from '../../public/hero.png';
import icon from '../../public/icon.svg';
import logo from '../../public/logo.svg';
import rogue from '../../public/rogue_crest.png';
import paladin from '../../public/paladin_crest.png';
import mage from '../../public/mage_crest.png';
import deathknight from '../../public/death_knight_crest.png';
import shaman from '../../public/shaman_crest.png';
import warlock from '../../public/warlock_crest.png';
import druid from '../../public/druid_crest.png';
import priest from '../../public/priest_crest.png';
import warrior from '../../public/warrior_crest.png';
import hunter from '../../public/hunter_crest.png';
import discord from '../../public/discord-icon.svg';
import raiderio from '../../public/raiderio-icon.svg';


export default function Home() {
  return (
    <main>
      <header className={styles.masthead + ' section'}>
        <div className={styles.wrapper + ' container ph'}>
          <Link href="/">
            <Image
              src={icon}
              alt="Magnitude Logo"
              className={styles.brand}
              width={40}
              height={60}
              priority
            />
          </Link>

          <div className={styles.buttons}>
            <a href="https://discord.gg/AaCcf5K6PB" target="blank" className="button">
              <Image
              src={discord}
              alt="discord"
              width={40}
              height={20}
              priority
            /> Join the team</a>
          </div>
        </div> 
      </header>


      <section className={styles.hero + ' section section-pv'}>
        <Image src={hero} alt="Cataclysm Banner" width="1920" height="600" />
        <div className={styles.overlay}></div>

        <div className={styles.intro + ' container ph'}>
        <Image src={logo} alt="Magnitude Logo" width="250" height="160" />
        </div>
      </section>

      <section className={styles.progress + ' section section-pb'}>
        <div className={styles.wrapper + ' container ph pv textcenter'}>
          <h2>Raid Progress</h2>
          <div className="col col-3">
            <div className={styles.raid}>
              <p>Blackwing Descent</p>
              <div className={styles.count}><span className={styles.normal}>0/6</span>10N</div>
            </div>
            <div className={styles.raid}>
              <p>Throne of the Four Winds</p>
              <div className={styles.count}><span className={styles.normal}>0/2</span>10N</div>
            </div>
            <div className={styles.raid}>
              <p>The Bastion of Twilight</p>
              <div className={styles.count}><span className={styles.normal}>0/4</span>10N</div>
            </div>
          </div>
        </div>
      </section>

      <section className={'section section-pb'}>
        <div className="container ph">
          <h2 className="textcenter">The Team</h2>
          <div className="col col-3">
            <div className={styles.player}>
              <Image
                src={rogue}
                alt=""
                className={styles.icon}
                width={75}
                height={75}
                priority
              />
              <div className={styles.text}>
                <div>
                  <h3 className="rogue">Religoth</h3>
                  <p>Raid Leader</p>
                </div>
                <div className={styles.links}>
                  <a href="https://classic.raider.io/characters/eu/golemagg/Religoth" target="blank">
                    <Image
                      src={raiderio}
                      alt=""
                      width={16}
                      height={16}
                      priority
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.player}>
              <Image
                src={paladin}
                alt=""
                className={styles.icon}
                width={75}
                height={75}
                priority
              />
              <div className={styles.text}>
                <div>
                  <h3 className="paladin">Foxicity</h3>
                  <p>Officer</p>
                </div>
                <div className={styles.links}>
                  <a href="https://classic.raider.io/characters/eu/golemagg/Foxicity" target="blank">
                    <Image
                      src={raiderio}
                      alt=""
                      width={16}
                      height={16}
                      priority
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.player}>
              <Image
                src={mage}
                alt=""
                className={styles.icon}
                width={75}
                height={75}
                priority
              />
              <div className={styles.text}>
                <div>
                  <h3 className="mage">Floosi</h3>
                  <p>Officer</p>
                </div>
                <div className={styles.links}>
                  <a href="https://classic.raider.io/characters/eu/golemagg/Floosi" target="blank">
                    <Image
                      src={raiderio}
                      alt=""
                      width={16}
                      height={16}
                      priority
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.player}>
              <Image
                src={deathknight}
                alt=""
                className={styles.icon}
                width={75}
                height={75}
                priority
              />
              <div className={styles.text}>
                <div>
                  <h3 className="deathknight">Khemodeath</h3>
                  <p>Raider</p>
                </div>
                <div className={styles.links}>
                  <a href="https://classic.raider.io/characters/eu/golemagg/Khemodeath" target="blank">
                    <Image
                      src={raiderio}
                      alt=""
                      width={16}
                      height={16}
                      priority
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.player}>
              <Image
                src={mage}
                alt=""
                className={styles.icon}
                width={75}
                height={75}
                priority
              />
              <div className={styles.text}>
                <div>
                  <h3 className="mage">Elzorino</h3>
                  <p>Raider</p>
                </div>
                <div className={styles.links}>
                  <a href="https://classic.raider.io/characters/eu/golemagg/Elzorino" target="blank">
                    <Image
                      src={raiderio}
                      alt=""
                      width={16}
                      height={16}
                      priority
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.player}>
              <Image
                src={shaman}
                alt=""
                className={styles.icon}
                width={75}
                height={75}
                priority
              />
              <div className={styles.text}>
                <div>
                  <h3 className="shaman">Badwave</h3>
                  <p>Raider</p>
                </div>
                <div className={styles.links}>
                  <a href="https://classic.raider.io/characters/eu/golemagg/Badwave" target="blank">
                    <Image
                      src={raiderio}
                      alt=""
                      width={16}
                      height={16}
                      priority
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.player}>
              <Image
                src={warlock}
                alt=""
                className={styles.icon}
                width={75}
                height={75}
                priority
              />
              <div className={styles.text}>
                <div>
                  <h3 className="warlock">Scoottlock</h3>
                  <p>Raider</p>
                </div>
                <div className={styles.links}>
                  <a href="https://classic.raider.io/characters/eu/golemagg/Scoottlock" target="blank">
                    <Image
                      src={raiderio}
                      alt=""
                      width={16}
                      height={16}
                      priority
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.player}>
              <Image
                src={druid}
                alt=""
                className={styles.icon}
                width={75}
                height={75}
                priority
              />
              <div className={styles.text}>
                <div>
                  <h3 className="druid">Duald</h3>
                  <p>Raider</p>
                </div>
                <div className={styles.links}>
                  <a href="https://classic.raider.io/characters/eu/golemagg/Duald" target="blank">
                    <Image
                      src={raiderio}
                      alt=""
                      width={16}
                      height={16}
                      priority
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.player}>
              <Image
                src={paladin}
                alt=""
                className={styles.icon}
                width={75}
                height={75}
                priority
              />
              <div className={styles.text}>
                <div>
                  <h3 className="paladin">Krugpal</h3>
                  <p>Raider</p>
                </div>
                <div className={styles.links}>
                  <a href="https://classic.raider.io/characters/eu/golemagg/Krugpal" target="blank">
                    <Image
                      src={raiderio}
                      alt=""
                      width={16}
                      height={16}
                      priority
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.player}>
              <Image
                src={deathknight}
                alt=""
                className={styles.icon}
                width={75}
                height={75}
                priority
              />
              <div className={styles.text}>
                <div>
                  <h3 className="deathknight">Scottnicebum</h3>
                  <p>Raider</p>
                </div>
                <div className={styles.links}>
                  <a href="https://classic.raider.io/characters/eu/golemagg/Scottnicebum" target="blank">
                    <Image
                      src={raiderio}
                      alt=""
                      width={16}
                      height={16}
                      priority
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.player}>
              <Image
                src={priest}
                alt=""
                className={styles.icon}
                width={75}
                height={75}
                priority
              />
              <div className={styles.text}>
                <div>
                  <h3 className="priest">Arylana</h3>
                  <p>Raider</p>
                </div>
                <div className={styles.links}>
                  <a href="https://classic.raider.io/characters/eu/golemagg/Arylana" target="blank">
                    <Image
                      src={raiderio}
                      alt=""
                      width={16}
                      height={16}
                      priority
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.player}>
              <Image
                src={warrior}
                alt=""
                className={styles.icon}
                width={75}
                height={75}
                priority
              />
              <div className={styles.text}>
                <div>
                  <h3 className="warrior">Dønny</h3>
                  <p>Raider</p>
                </div>
                {/* <div className={styles.links}>
                  <a href="https://classic.raider.io/characters/eu/golemagg/Floosi" target="blank">
                    <Image
                      src={raiderio}
                      alt=""
                      width={16}
                      height={16}
                      priority
                    />
                  </a>
                </div> */}
              </div>
            </div>
            <div className={styles.player}>
              <Image
                src={hunter}
                alt=""
                className={styles.icon}
                width={75}
                height={75}
                priority
              />
              <div className={styles.text}>
                <div>
                  <h3 className="hunter">Xenethe</h3>
                  <p>Raider</p>
                </div>
                {/* <div className={styles.links}>
                  <a href="https://classic.raider.io/characters/eu/golemagg/Floosi" target="blank">
                    <Image
                      src={raiderio}
                      alt=""
                      width={16}
                      height={16}
                      priority
                    />
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={'section section-pb'}>
        <div className="container ph">
          <h2 className="textcenter">Streamers</h2>
         
         
          <TwitchEmbed
            channel="thekkcraft"
            darkMode
            allowFullscreen={false}
            withChat={false}
            onAuthenticate={function noRefCheck(){}}
            onVideoPause={function noRefCheck(){}}
            onVideoPlay={function noRefCheck(){}}
            onVideoReady={function noRefCheck(){}}
            width="100%"
            video=""
          />

          
        </div>
      </section>

      <footer className={styles.footer + ' section section-pv'}>
        <div className="container ph">
          <Link href="/">
            <Image
              src={icon}
              alt="Magnitude Logo"
              className={styles.brand}
              width={40}
              height={60}
              priority
            />
          </Link>
          <p>© Magnitude 2024 | All rights reserved.</p>
        </div>
      </footer>


    </main>
  );
}
