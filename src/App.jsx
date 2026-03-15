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
    note: 'Real-time updates, dev posts, and degen energy',
  },
  {
    label: 'X Community',
    href: 'https://x.com/i/communities/1889471888226652546',
    note: 'Exclusive chats and holder vibes',
  },
  {
    label: 'Telegram',
    href: 'https://t.me/turtonspeed',
    note: 'Live voice, memes, and community raids',
  },
]

const timeline = [
  {
    title: 'Launch and Dormancy (Early-Mid 2024)',
    copy: 'Born on Solana as a fun, ironic memecoin, then went quiet for 10 long months while the world chased flashier animals.',
  },
  {
    title: 'Degen Revival (February 2025)',
    copy: 'Passionate holders rediscovered the gem, formed a tight-knit squad, and breathed life back into $TURT with raids and unbreakable belief.',
  },
  {
    title: 'Momentum Build (2025 to Now)',
    copy: 'Trading volume surged, liquidity strengthened, and the turtle evolved from joke to community powerhouse with eyes on bigger utilities ahead.',
  },
]

export default function App() {
  return (
    <div data-theme="night" className="min-h-screen bg-slate-950 text-slate-100">
      <div className="aurora-bg" aria-hidden="true" />

      <header className="sticky top-0 z-30 border-b border-base-content/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="navbar mx-auto max-w-6xl px-4 sm:px-6">
          <a href="#top" className="text-xl font-bold tracking-tight">
            Turtle on Speed
          </a>
          <div className="ml-auto hidden gap-2 md:flex">
            <a href="#story" className="btn btn-ghost btn-sm">Story</a>
            <a href="#journey" className="btn btn-ghost btn-sm">Journey</a>
            <a href="#buy" className="btn btn-ghost btn-sm">Buy</a>
            <a href="#socials" className="btn btn-ghost btn-sm">Socials</a>
            <a href="#trust" className="btn btn-ghost btn-sm">Trust</a>
          </div>
          <a href="#buy" className="btn btn-primary btn-sm ml-2 md:ml-4">Buy $TURT</a>
        </div>
      </header>

      <main id="top" className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-6 sm:px-6 sm:py-10">
        <section className="fade-in-up grid gap-6 rounded-3xl border border-primary/20 bg-base-100/50 p-5 shadow-2xl shadow-primary/10 lg:grid-cols-2 lg:p-8">
          <div className="space-y-5">
            <div className="badge badge-secondary badge-outline">$TURT on Solana</div>
            <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Speedy Turtle.<br />
              Moon Mission Activated.
            </h1>
            <p className="max-w-xl text-lg text-slate-300">
              From 10 months of dormancy to degen revival, $TURT is the
              slow-burn memecoin that&apos;s finally hitting warp speed on Solana.
            </p>
            <div className="flex flex-wrap gap-3">
              <a className="btn btn-primary btn-lg" href="#buy">Buy $TURT</a>
              <a className="btn btn-outline btn-lg" href="#socials">Join Community</a>
            </div>
          </div>
          <div className="rounded-2xl border border-info/40 bg-base-300/40 p-3">
            <img
              src="/assets/hero.png"
              alt="Turtle on Speed hero art"
              className="h-full min-h-[280px] w-full rounded-xl object-contain"
            />
          </div>
        </section>

        <section id="story" className="fade-in-up card border border-secondary/20 bg-base-100/50 shadow-xl">
          <div className="card-body gap-5">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-secondary">Story</p>
            <h2 className="text-3xl font-extrabold sm:text-4xl">The Legend of the Speedy Turtle</h2>
            <p className="text-base leading-relaxed text-slate-300">
              Once upon a blockchain, a regular turtle got dosed with rocket fuel
              and dreamed of the moon. Launched quietly by a determined dev,
              $TURT slept through the noise for nearly a year: ignored,
              underrated, unbreakable. Then a crew of crypto degens rediscovered
              the contract, saw the irony, and rallied hard: slow animal, fast
              gains. Now it&apos;s not just a meme, it&apos;s a movement powered by
              diamond hands, memes, and pure turtle tenacity.
            </p>
            <div className="rounded-2xl border border-secondary/30 bg-base-300/40 p-2">
              <img src="/assets/story.png" alt="Story artwork for Turtle on Speed" className="h-[320px] w-full rounded-xl object-contain" />
            </div>
          </div>
        </section>

        <section id="journey" className="fade-in-up card border border-accent/20 bg-base-100/50 shadow-xl">
          <div className="card-body gap-5">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">Our Journey</p>
            <h2 className="text-3xl font-extrabold sm:text-4xl">The Timeline</h2>
            <p className="text-slate-300">
              From forgotten launch to rising momentum, here&apos;s how the turtle woke up and started sprinting.
            </p>
            <div className="rounded-2xl border border-accent/30 bg-base-300/40 p-2">
              <img src="/assets/journey.png" alt="Journey artwork for Turtle on Speed timeline" className="h-[320px] w-full rounded-xl object-contain" />
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {timeline.map((item) => (
                <article key={item.title} className="rounded-2xl border border-base-content/20 bg-base-300/50 p-4">
                  <h3 className="text-lg font-bold leading-tight">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="buy" className="fade-in-up card border border-primary/20 bg-base-100/50 shadow-xl">
          <div className="card-body gap-5">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Buy</p>
            <h2 className="text-3xl font-extrabold sm:text-4xl">Grab Your $TURT, Fast and Safe</h2>
            <p className="text-slate-300">
              Stick to official links only. Never trust random DMs, fake sites, or shady ads.
            </p>
            <ul className="list-disc space-y-1 pl-5 text-slate-300 marker:text-primary">
              <li>Check the live chart on DexScreener or CoinGecko.</li>
              <li>Swap SOL for $TURT on Raydium or Meteora (contract address below).</li>
              <li>Verify the token address matches before confirming.</li>
            </ul>
            <div className="grid gap-4 md:grid-cols-2">
              {buyLinks.map((item) => (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="group rounded-2xl border border-primary/30 bg-primary/10 p-5 transition hover:-translate-y-1 hover:bg-primary/20">
                  <p className="text-xl font-bold">{item.label}</p>
                  <p className="mt-1 text-sm text-slate-300">{item.note}</p>
                  <p className="mt-4 text-sm font-semibold text-primary">Open link</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="socials" className="fade-in-up card border border-info/20 bg-base-100/50 shadow-xl">
          <div className="card-body gap-5">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-info">Socials</p>
            <h2 className="text-3xl font-extrabold sm:text-4xl">Join our speedy moon mission</h2>
            <p className="text-slate-300">
              Dive in for memes, alpha drops, raids, and the fastest-growing turtle army on Solana.
            </p>
            <div className="rounded-2xl border border-info/30 bg-base-300/40 p-2">
              <img src="/assets/community.png" alt="Community artwork for Turtle on Speed" className="h-[320px] w-full rounded-xl object-contain" />
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {socialLinks.map((item) => (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="rounded-2xl border border-info/30 bg-info/10 p-5 transition hover:-translate-y-1 hover:bg-info/20">
                  <p className="text-lg font-bold">{item.label}</p>
                  <p className="mt-1 text-sm text-slate-300">{item.note}</p>
                  <p className="mt-4 text-sm font-semibold text-info">Open channel</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="trust" className="fade-in-up card border border-warning/30 bg-base-100/50 shadow-xl">
          <div className="card-body gap-5">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-warning">Trust and Safety</p>
            <h2 className="text-3xl font-extrabold sm:text-4xl">Official Contract</h2>
            <div className="rounded-2xl border border-warning/30 bg-base-300/40 p-2">
              <img src="/assets/badge.jpg" alt="TURT badge art" className="h-[180px] w-full rounded-xl object-contain" />
            </div>
            <code className="block overflow-x-auto rounded-xl border border-warning/30 bg-slate-950/70 p-4 text-sm text-warning">
              F14hCmEKjcaXobNE2fMdRX9EcetC2oNuiZVjpce1iohE
            </code>
            <p className="text-slate-300">
              Only use links from this official site. Scammers love impersonating turtles.
            </p>
            <p className="text-sm text-slate-400">
              $TURT is a memecoin for entertainment and vibes only. Not financial advice, no guarantees of gains, DYOR, and never invest more than you can afford to lose.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
