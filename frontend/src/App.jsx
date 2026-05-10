import { useMemo, useState } from 'react'
import './App.css'

const mom = {
  name: '老妈',
  childName: '博宏',
  heroLine: '谢谢你每一次默默的付出、每一顿温暖的饭、每一个深夜的牵挂，也谢谢你把平凡的日子变成安心的家。',
  letter: [
    '亲爱的老妈：',
    '有些话，我平时总忘了说，或者不好意思说出口。可我回头想想，我生命里那些真正美好的部分，好像都是从你这里开始的。',
    '你教会我，温柔不是软弱，是知道生活不容易，还愿意好好对人。你让我看见，遇到难事不用怕，只要一步一步往前走，总能过去。也让我明白，爱一个人，都藏在很多很小、很实在的事情里——比如你记住的每一个喜好，每一个为我亮着的灯。',
    '这个小网页，其实装不下我心里全部的感谢。它只是想认认真真地告诉你：你为我做过的每一件事，我都看见了；你给过我的爱，我其实记得，比你以为的多得多。',
    '老妈，母亲节快乐。'
  ]
}

const memories = [
  {
    title: '你的温柔',
    image: '/photos/IMG_8481.JPG'
  },
  {
    title: '家的感觉',
    image: '/photos/WechatIMG179112.jpg'
  },
  {
    title: '日常里的暖',
    image: '/photos/WechatIMG179113.jpg'
  },
  {
    title: '一直在身边',
    image: '/photos/WechatIMG179115.jpg'
  }
]

const thankYous = [
  '离家前的行李箱，你总是帮我塞得连一条缝隙都不剩，仿佛想把所有的爱都装进去带走。',
  '虽然今天不能陪你吃晚饭，但我的爱隔着山海，准时抵达。',
  '缓慢又笨拙的路上，谢谢你陪我长大。',
  '这辈子最幸运的事就是有你这样的妈妈。'
]

const timeline = [
  { label: '第一位老师', detail: '你教我怎样认真生活，怎样温柔地对待这个世界。' },
  { label: '最安心的地方', detail: '很多难过的时刻，只要听到你的声音，就会变得没那么难。' },
  { label: '最好的榜样', detail: '你爱人的方式，慢慢变成了我心里最珍贵的标准。' }
]

function App() {
  const [letterOpen, setLetterOpen] = useState(false)

  const daysLoved = useMemo(() => {
    const start = new Date('2004-05-05T00:00:00')
    const today = new Date()
    return Math.max(1, Math.floor((today - start) / 86400000)).toLocaleString()
  }, [])

  return (
    <main className="page">
      <nav className="nav" aria-label="主导航">
        <a className="brand" href="#top" aria-label="母亲节主页">
          <span className="brand-mark" aria-hidden="true" />
          <span>给{mom.name}</span>
        </a>
        <div className="nav-links">
          <a href="#letter">信</a>
          <a href="#memories">回忆</a>
          <a href="#thanks">感谢</a>
        </div>
      </nav>

      <section id="top" className="hero">
        <div className="hero-image" aria-hidden="true" />
        <div className="hero-content">
          <p className="kicker">2026 母亲节</p>
          <h1>{mom.name}，母亲节快乐</h1>
          <p>{mom.heroLine}</p>
          <a className="hero-button" href="#letter">打开这封信</a>
        </div>
      </section>

      <section className="stats-band" aria-label="用数字写给妈妈的小情书">
        <div>
          <span className="stat-number">第{daysLoved}天</span>
          <span className="stat-label">当你的儿子</span>
        </div>
        <div>
          <span className="stat-number">∞</span>
          <span className="stat-label">个想感谢你的理由</span>
        </div>
        <div>
          <span className="stat-number">1</span>
          <span className="stat-label">个无论多少次都会选择的妈妈</span>
        </div>
      </section>

      <section id="letter" className="letter-section">
        <div className="section-heading">
          <p className="kicker">我想说的话</p>
          <h2>给老妈的一封信</h2>
        </div>

        <button
          className={`envelope ${letterOpen ? 'open' : ''}`}
          onClick={() => setLetterOpen(true)}
          aria-expanded={letterOpen}
        >
          <span className="envelope-flap" />
          <span className="seal">妈</span>
          <span className="envelope-text">{letterOpen ? '信已经打开了' : '点一下打开'}</span>
        </button>

        {letterOpen && (
          <article className="letter-paper" aria-live="polite">
            {mom.letter.map((line) => (
              <p key={line}>{line}</p>
            ))}
            <footer>爱你的{mom.childName}</footer>
          </article>
        )}
      </section>

      <section id="memories" className="memories-section">
        <div className="section-heading">
          <p className="kicker">属于我们的片段</p>
          <h2>最喜欢的时光</h2>
        </div>
        <div className="memory-grid">
          {memories.map((memory, index) => (
            <figure className="memory" key={memory.title}>
              <img src={memory.image} alt="" />
              <figcaption>
                <span>{String(index + 1).padStart(2, '0')}</span>
                {memory.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="thanks" className="thanks-section">
        <div className="section-heading">
          <p className="kicker">从你身上学到的事</p>
          <h2>是你的爱塑造了我</h2>
        </div>
        <div className="thanks-grid">
          {thankYous.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      <section className="timeline-section" aria-label="一段小小的时间线">
        {timeline.map((item) => (
          <article key={item.label}>
            <span>{item.label}</span>
            <p>{item.detail}</p>
          </article>
        ))}
      </section>

      <footer className="footer">
        <p>用爱给{mom.name}做的网站</p>
        <span>2026 母亲节</span>
      </footer>
    </main>
  )
}

export default App
