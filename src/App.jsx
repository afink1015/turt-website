import './App.css'

const buyLinks = [
  {
    label: 'DexScreener',
    href: 'https://dexscreener.com/solana/fnqrvsajrybfc23znefb4jg1zsmmmgejwqfwcnxqftkh',
    note: 'Live chart, liquidity, and market movement',
  },
  {
    label: 'Buy $TURT',
    href: 'https://raydium.io/swap/?inputMint=sol&outputMint=F14hCmEKjcaXobNE2fMdRX9EcetC2oNuiZVjpce1iohE',
    note: 'Swap on Raydium',
  },
]

const socialLinks = [
  {
    label: 'X (Twitter)',
    href: 'https://x.com/Speedy_Turt_Sol',
    note: 'Main page, updates, and community activity',
  },
  {
    label: 'X Community',
    href: 'https://x.com/i/communities/1889471888226652546',
    note: 'Join discussions, raids, and holder conversation',
  },
  {
    label: 'Telegram',
    href: 'https://t.me/turtonspeed',
    note: 'Holder chat, announcements, and lore drops',
  },
]

export default function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <p className="brand">Turtle on Speed</p>
        <nav aria-label="Section navigation">
          <a href="#story">Story</a>
          <a href="#journey">Journey</a>
          <a href="#buy">Buy</a>
          <a href="#socials">Socials</a>
          <a href="#trust">Trust</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="kicker">$TURT on Solana</p>
            <h1>Speedy Turtle. Moon Mission Activated.</h1>
            <p>
              From 10 months of dormancy to degen revival, $TURT is the
              slow-burn memecoin that&apos;s finally hitting warp speed on Solana.
            </p>
            <div className="cta-row">
              <a className="btn btn-primary" href="#buy">
                Buy $TURT
              </a>
              <a className="btn btn-ghost" href="#socials">
                Join Community
              </a>
            </div>
          </div>
          <div className="hero-art" role="img" aria-label="Turtle on Speed art placeholder">
            <img src="/assets/hero.png" alt="Turtle on Speed hero art" />
          </div>
        </section>

        <section id="story" className="panel">
          <p className="section-label">Story</p>
          <h2>The Legend of the Speedy Turtle</h2>
          <p>
            Once upon a blockchain, a regular turtle got dosed with rocket fuel
            and dreamed of the moon. Launched quietly by a determined dev,
            $TURT slept through the noise for nearly a year: ignored,
            underrated, unbreakable. Then a crew of crypto degens rediscovered
            the contract, saw the irony, and rallied hard: slow animal, fast
            gains. Now it&apos;s not just a meme, it&apos;s a movement powered by
            diamond hands, memes, and pure turtle tenacity.
          </p>
          <figure className="section-media">
            <img src="/assets/story.png" alt="Story artwork for Turtle on Speed" />
          </figure>
        </section>

        <section id="journey" className="panel">
          <p className="section-label">Our Journey</p>
          <h2>The Timeline</h2>
          <p className="section-intro">
            From forgotten launch to rising momentum, here&apos;s how the turtle woke
            up and started sprinting.
          </p>
          <figure className="section-media">
            <img src="/assets/journey.png" alt="Journey artwork for Turtle on Speed timeline" />
          </figure>
          <div className="timeline">
            <article>
              <h3>Launch and Dormancy (Early-Mid 2024)</h3>
              <p>
                Born on Solana as a fun, ironic memecoin, then went quiet for
                10 long months while the world chased flashier animals.
              </p>
            </article>
            <article>
              <h3>Degen Revival (February 2025)</h3>
              <p>
                Passionate holders rediscovered the gem, formed a tight-knit
                squad, and breathed life back into $TURT with raids and
                unbreakable belief.
              </p>
            </article>
            <article>
              <h3>Momentum Build (2025 to Now)</h3>
              <p>
                Trading volume surged, liquidity strengthened, and the turtle
                evolved from joke to community powerhouse with eyes on bigger
                utilities ahead.
              </p>
            </article>
          </div>
        </section>

        <section id="buy" className="panel">
          <p className="section-label">Buy</p>
          <h2>Grab Your $TURT, Fast and Safe</h2>
          <p className="section-intro">
            Stick to official links only. Never trust random DMs, fake sites,
            or shady ads.
          </p>
          <ul className="steps">
            <li>Check the live chart on DexScreener or CoinGecko.</li>
            <li>
              Swap SOL for $TURT on Raydium or Meteora (contract address below).
            </li>
            <li>Verify the token address matches before confirming.</li>
          </ul>
          <div className="link-grid">
            {buyLinks.map((item) => (
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="link-card">
                <h3>{item.label}</h3>
                <p>{item.note}</p>
                <span>Open link</span>
              </a>
            ))}
          </div>
        </section>

        <section id="socials" className="panel">
          <p className="section-label">Socials</p>
          <h2>Join our speedy moon mission</h2>
          <p className="section-intro">
            Dive in for memes, alpha drops, raids, and the fastest-growing
            turtle army on Solana.
          </p>
          <figure className="section-media">
            <img src="/assets/community.png" alt="Community artwork for Turtle on Speed" />
          </figure>
          <div className="link-grid">
            {socialLinks.map((item) => (
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="link-card">
                <h3>{item.label}</h3>
                <p>{item.note}</p>
                <span>Open channel</span>
              </a>
            ))}
          </div>
        </section>

        <section id="trust" className="panel trust-panel">
          <p className="section-label">Trust and Safety</p>
          <h2>Official Contract</h2>
          <figure className="section-media badge-media">
            <img src="/assets/badge.jpg" alt="TURT badge art" />
          </figure>
          <p className="contract">
            F14hCmEKjcaXobNE2fMdRX9EcetC2oNuiZVjpce1iohE
          </p>
          <p className="section-intro">
            Only use links from this official site. Scammers love impersonating
            turtles.
          </p>
          <p className="disclaimer">
            $TURT is a memecoin for entertainment and vibes only. Not financial
            advice, no guarantees of gains, DYOR, and never invest more than
            you can afford to lose.
          </p>
        </section>
      </main>
    </div>
  )
}
