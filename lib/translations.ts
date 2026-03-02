export type Lang = "en" | "es" | "ja";

export interface NavT {
  links: { label: string; href: string }[];
}

export interface HeroT {
  eyebrow: string;
  tagline: string;
  letItFlow: string;
  readStory: string;
  seeWork: string;
}

export interface PhilosophyT {
  eyebrow: string;
  heading1: string;
  heading2: string;
  paragraphs: string[];
  facts: { label: string; value: string }[];
  caption: string;
}

export interface TimelineT {
  eyebrow: string;
  heading1: string;
  heading2: string;
  chapters: { number: string; title: string; body: string }[];
}

export interface SkillsT {
  eyebrow: string;
  heading: string;
  groups: { title: string; items: string[] }[];
}

export interface ProjectsT {
  eyebrow: string;
  heading: string;
  subheading: string;
  noRepos: string;
  allRepos: string;
  forks: string;
}

export interface ContactT {
  eyebrow: string;
  heading: string;
  intro: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  messagePlaceholder: string;
  submit: string;
  sending: string;
  success: string;
  error: string;
}

export interface Translations {
  nav: NavT;
  hero: HeroT;
  philosophy: PhilosophyT;
  timeline: TimelineT;
  skills: SkillsT;
  projects: ProjectsT;
  contact: ContactT;
}

export const translations: Record<Lang, Translations> = {
  en: {
    nav: {
      links: [
        { label: "Source", href: "#philosophy" },
        { label: "Journey", href: "#timeline" },
        { label: "Work", href: "#projects" },
        { label: "Connect", href: "#contact" },
      ],
    },
    hero: {
      eyebrow: "川 · Kawa Development",
      tagline: "Security Engineer · Software Developer · Costa Rica",
      letItFlow: "Let it flow",
      readStory: "Read the story",
      seeWork: "See the work",
    },
    philosophy: {
      eyebrow: "The Source",
      heading1: "川 means river.",
      heading2: "It also means let go.",
      paragraphs: [
        "I picked the name Kawa because a river doesn't fight its path. It flows around obstacles, carves through rock over time, and always finds its way forward. That's how I've tried to approach my career.",
        "I started in web development — building financial applications, learning how the web works from the inside. Then I saw the other side: how those same systems get broken. That curiosity pulled me into security, and I never looked back.",
        "Nine years later I've worked incident response under pressure, automated threat detection pipelines, guided enterprise teams through OWASP hardening, and kept building side projects on nights and weekends because I genuinely love making things.",
        "Kawa is the thread that ties all of it together — the mindset of staying in motion, letting go of what doesn't serve the journey, and trusting that the current knows where it's going.",
      ],
      facts: [
        { label: "Based in", value: "Heredia, Costa Rica" },
        { label: "Current role", value: "Technical Support Engineer · Torq" },
        { label: "Experience", value: "9+ years in AppSec & Software Development" },
        { label: "Specialty", value: "Application Security · API Security · Automation" },
        { label: "Studying", value: "Web Development & Design · Universidad Fidelitas" },
        { label: "Philosophy", value: "Let it flow — keep building, keep learning" },
      ],
      caption: "Andres Bejarano · Heredia, CR",
    },
    timeline: {
      eyebrow: "The Journey",
      heading1: "Three chapters,",
      heading2: "one river.",
      chapters: [
        {
          number: "I",
          title: "The Builder",
          body: "It started with curiosity about how things are made. Early on I was building web applications — real ones, in production, for real banks. That experience gave me something most security people don't have: I understood the code before I learned to break it. I knew what it felt like to ship something and care about whether it worked. That foundation never left.",
        },
        {
          number: "II",
          title: "The Pivot",
          body: "At some point I stopped just building and started asking a different question — how does this break? That question pulled me into application security and never let go. I spent years in the trenches: code reviews, penetration testing, vulnerability management, and incident response under real pressure. The kind of incidents where something is on fire and you're the one who has to put it out. That's where the craft got serious.",
        },
        {
          number: "III",
          title: "The Current",
          body: "Today I work at Torq — a security hyperautomation startup that has grown into a unicorn, recently valued at $1.2B. Being part of that journey has meant operating at the intersection of security and automation at enterprise scale. Designing workflows that detect and respond to threats autonomously. Working with Fortune 100 teams. Watching a bold idea become a platform that runs millions of security operations every day. The river is moving fast — and I'm in it.",
        },
      ],
    },
    skills: {
      eyebrow: "The Toolkit",
      heading: "Skills & tools",
      groups: [
        {
          title: "Security",
          items: [
            "Application Security (AppSec)",
            "API Security (REST, GraphQL, gRPC)",
            "Penetration Testing",
            "Incident Response",
            "Threat Detection & Mitigation",
            "Vulnerability Management",
            "OWASP Top 10 / API Top 10",
            "Secure SDLC & Code Review",
            "OAuth2 · JWT",
            "Fortify Suite",
          ],
        },
        {
          title: "Development",
          items: [
            "Python",
            "JavaScript / TypeScript",
            "Next.js · React",
            "HTML · CSS · Tailwind",
            "SQL · PostgreSQL",
            "JSON Parsing & Automation",
            "REST API Integration",
            "Git · GitHub",
            "AI-assisted development workflows (Cursor, Claude Code)",
          ],
        },
        {
          title: "Platforms & Tools",
          items: [
            "Torq (Security Automation)",
            "Linux · macOS · Windows",
            "Cloud-native Environments",
            "Vercel · Neon",
            "Governance & Compliance",
            "Security Monitoring",
            "Intrusion Detection",
          ],
        },
      ],
    },
    projects: {
      eyebrow: "Built Along the Way",
      heading: "Recent work",
      subheading: "Projects pulled live from GitHub. Side work, experiments, things built out of curiosity.",
      noRepos: "No repositories found.",
      allRepos: "All repositories on GitHub →",
      forks: "forks",
    },
    contact: {
      eyebrow: "Connect",
      heading: "Let's talk.",
      intro: "Whether it's a security question, a collaboration, or just a conversation — the river is always open.",
      namePlaceholder: "Your name",
      emailPlaceholder: "Your email",
      messagePlaceholder: "Your message",
      submit: "Send message →",
      sending: "Sending...",
      success: "Message sent. I'll be in touch.",
      error: "Something went wrong. Try again.",
    },
  },

  es: {
    nav: {
      links: [
        { label: "Origen", href: "#philosophy" },
        { label: "Trayecto", href: "#timeline" },
        { label: "Trabajo", href: "#projects" },
        { label: "Contacto", href: "#contact" },
      ],
    },
    hero: {
      eyebrow: "川 · Kawa Development",
      tagline: "Ingeniero de Seguridad · Desarrollador · Costa Rica",
      letItFlow: "Déjalo fluir",
      readStory: "Leer la historia",
      seeWork: "Ver el trabajo",
    },
    philosophy: {
      eyebrow: "El Origen",
      heading1: "川 significa río.",
      heading2: "También significa soltar.",
      paragraphs: [
        "Elegí el nombre Kawa porque un río no lucha contra su camino. Fluye alrededor de los obstáculos, abre paso entre la roca con el tiempo y siempre encuentra la manera de avanzar. Así es como he intentado acercarme a mi carrera.",
        "Comencé en desarrollo web — construyendo aplicaciones financieras, aprendiendo cómo funciona la web desde adentro. Luego vi el otro lado: cómo esos mismos sistemas se rompen. Esa curiosidad me llevó a la seguridad, y no he mirado atrás.",
        "Nueve años después he trabajado en respuesta a incidentes bajo presión, automatizado pipelines de detección de amenazas, guiado equipos empresariales en hardening OWASP, y seguido construyendo proyectos personales en las noches y fines de semana porque genuinamente me encanta crear cosas.",
        "Kawa es el hilo que une todo — la mentalidad de mantenerse en movimiento, soltar lo que no sirve al camino, y confiar en que la corriente sabe hacia dónde va.",
      ],
      facts: [
        { label: "Ubicación", value: "Heredia, Costa Rica" },
        { label: "Rol actual", value: "Ingeniero de Soporte Técnico · Torq" },
        { label: "Experiencia", value: "9+ años en AppSec y Desarrollo de Software" },
        { label: "Especialidad", value: "Seguridad de Aplicaciones · Seguridad de API · Automatización" },
        { label: "Estudiando", value: "Desarrollo y Diseño Web · Universidad Fidelitas" },
        { label: "Filosofía", value: "Déjalo fluir — sigue construyendo, sigue aprendiendo" },
      ],
      caption: "Andres Bejarano · Heredia, CR",
    },
    timeline: {
      eyebrow: "El Trayecto",
      heading1: "Tres capítulos,",
      heading2: "un río.",
      chapters: [
        {
          number: "I",
          title: "El Constructor",
          body: "Todo comenzó con la curiosidad de cómo se hacen las cosas. Desde temprano estaba construyendo aplicaciones web — reales, en producción, para bancos reales. Esa experiencia me dio algo que la mayoría de personas en seguridad no tienen: entendí el código antes de aprender a romperlo. Sabía lo que se siente al lanzar algo y preocuparme de que funcionara. Esa base nunca se fue.",
        },
        {
          number: "II",
          title: "El Giro",
          body: "En algún punto dejé de solo construir y empecé a hacerme una pregunta diferente — ¿cómo falla esto? Esa pregunta me llevó a la seguridad de aplicaciones y nunca me soltó. Pasé años en las trincheras: revisiones de código, pruebas de penetración, gestión de vulnerabilidades y respuesta a incidentes bajo presión real. El tipo de incidentes donde algo está en llamas y tú eres quien tiene que apagarlo. Ahí fue donde el oficio se volvió serio.",
        },
        {
          number: "III",
          title: "La Corriente",
          body: "Hoy trabajo en Torq — una startup de hyperautomatización de seguridad que ha crecido hasta convertirse en un unicornio, recientemente valorada en $1.2 mil millones. Ser parte de ese recorrido ha significado operar en la intersección de seguridad y automatización a escala empresarial. Diseñando flujos de trabajo que detectan y responden a amenazas de forma autónoma. Trabajando con equipos de Fortune 100. Viendo una idea audaz convertirse en una plataforma que ejecuta millones de operaciones de seguridad cada día. La corriente fluye rápido — y yo estoy en ella.",
        },
      ],
    },
    skills: {
      eyebrow: "El Arsenal",
      heading: "Habilidades y herramientas",
      groups: [
        {
          title: "Seguridad",
          items: [
            "Seguridad de Aplicaciones (AppSec)",
            "Seguridad de API (REST, GraphQL, gRPC)",
            "Pruebas de Penetración",
            "Respuesta a Incidentes",
            "Detección y Mitigación de Amenazas",
            "Gestión de Vulnerabilidades",
            "OWASP Top 10 / API Top 10",
            "SDLC Seguro y Revisión de Código",
            "OAuth2 · JWT",
            "Fortify Suite",
          ],
        },
        {
          title: "Desarrollo",
          items: [
            "Python",
            "JavaScript / TypeScript",
            "Next.js · React",
            "HTML · CSS · Tailwind",
            "SQL · PostgreSQL",
            "Parsing JSON y Automatización",
            "Integración de API REST",
            "Git · GitHub",
            "Flujos de trabajo de desarrollo asistido por IA (Cursor, Claude Code)",
          ],
        },
        {
          title: "Plataformas y Herramientas",
          items: [
            "Torq (Automatización de Seguridad)",
            "Linux · macOS · Windows",
            "Entornos Cloud-native",
            "Vercel · Neon",
            "Gobernanza y Cumplimiento",
            "Monitoreo de Seguridad",
            "Detección de Intrusiones",
          ],
        },
      ],
    },
    projects: {
      eyebrow: "Construido en el Camino",
      heading: "Trabajo reciente",
      subheading: "Proyectos tomados en vivo de GitHub. Trabajo paralelo, experimentos, cosas construidas por curiosidad.",
      noRepos: "No se encontraron repositorios.",
      allRepos: "Todos los repositorios en GitHub →",
      forks: "forks",
    },
    contact: {
      eyebrow: "Contacto",
      heading: "Hablemos.",
      intro: "Ya sea una pregunta de seguridad, una colaboración o simplemente una conversación — el río siempre está abierto.",
      namePlaceholder: "Tu nombre",
      emailPlaceholder: "Tu email",
      messagePlaceholder: "Tu mensaje",
      submit: "Enviar mensaje →",
      sending: "Enviando...",
      success: "Mensaje enviado. Estaré en contacto.",
      error: "Algo salió mal. Intenta de nuevo.",
    },
  },

  ja: {
    nav: {
      links: [
        { label: "原点", href: "#philosophy" },
        { label: "歩み", href: "#timeline" },
        { label: "作品", href: "#projects" },
        { label: "連絡", href: "#contact" },
      ],
    },
    hero: {
      eyebrow: "川 · Kawa Development",
      tagline: "セキュリティエンジニア · ソフトウェア開発者 · コスタリカ",
      letItFlow: "流れに任せて",
      readStory: "ストーリーを読む",
      seeWork: "作品を見る",
    },
    philosophy: {
      eyebrow: "原点",
      heading1: "川は流れる。",
      heading2: "手放すことでもある。",
      paragraphs: [
        "Kawaという名前を選んだのは、川が自らの道に逆らわないから。障害を迂回し、時間をかけて岩を削り、常に前へ進む方法を見つける。それが私のキャリアへのアプローチです。",
        "ウェブ開発から始めました——金融アプリを構築し、内側からウェブの仕組みを学んだ。そしてもう一方の側面を目にした：同じシステムがどのように壊されるか。その好奇心がセキュリティの世界へと引き込み、振り返ることはなかった。",
        "9年後、私はプレッシャーの中でインシデントレスポンスを担い、脅威検知パイプラインを自動化し、エンタープライズチームにOWASPハードニングを指導し、本当にものを作ることが好きだから夜や週末にもサイドプロジェクトを作り続けています。",
        "Kawaはそのすべてをつなぐ糸——動き続け、旅に必要のないものを手放し、川の流れが向かう先を信じるという姿勢です。",
      ],
      facts: [
        { label: "拠点", value: "コスタリカ・エレディア" },
        { label: "現職", value: "テクニカルサポートエンジニア · Torq" },
        { label: "経験", value: "AppSecとソフトウェア開発に9年以上" },
        { label: "専門", value: "アプリセキュリティ · APIセキュリティ · 自動化" },
        { label: "学習中", value: "ウェブ開発とデザイン · フィデリタス大学" },
        { label: "哲学", value: "流れに任せて——作り続け、学び続ける" },
      ],
      caption: "アンドレス・ベハラノ · エレディア、コスタリカ",
    },
    timeline: {
      eyebrow: "歩み",
      heading1: "三つの章、",
      heading2: "一つの川。",
      chapters: [
        {
          number: "I",
          title: "構築者",
          body: "好奇心から始まりました——ものがどのように作られるかへの好奇心が。早い段階から、本物のWebアプリを——本番環境で動く、本物の銀行向けのものを——構築していた。その経験は多くのセキュリティエンジニアが持っていないものを与えてくれました：破り方を学ぶ前に、コードを理解していた。何かを出荷して、それが正しく動くかを気にするとはどういうことか知っていた。その基盤は今も変わらない。",
        },
        {
          number: "II",
          title: "転換点",
          body: "あるとき、ただ構築することをやめ、別の問いを立て始めました——これはどのように壊れるのか？その問いがアプリケーションセキュリティへと引き込み、離してくれなかった。コードレビュー、ペネトレーションテスト、脆弱性管理、そして本物のプレッシャーの下でのインシデントレスポンスと、長年最前線で過ごした。何かが炎上して、自分が消さなければならない類の。そこで技術が本物になった。",
        },
        {
          number: "III",
          title: "現在の流れ",
          body: "今、私はTorqで働いています——ユニコーンに成長し、最近12億ドルと評価されたセキュリティハイパーオートメーションスタートアップです。その旅の一部であることは、エンタープライズスケールでセキュリティと自動化の交差点で動くことを意味してきた。脅威を自律的に検知し応答するワークフローを設計する。Fortune 100のチームと働く。大胆なアイデアが毎日何百万ものセキュリティオペレーションを処理するプラットフォームになるのを見る。川は速く流れています——私はその中にいます。",
        },
      ],
    },
    skills: {
      eyebrow: "ツールキット",
      heading: "スキルとツール",
      groups: [
        {
          title: "セキュリティ",
          items: [
            "アプリケーションセキュリティ (AppSec)",
            "APIセキュリティ (REST, GraphQL, gRPC)",
            "ペネトレーションテスト",
            "インシデントレスポンス",
            "脅威の検知と軽減",
            "脆弱性管理",
            "OWASP Top 10 / API Top 10",
            "セキュアSDLCとコードレビュー",
            "OAuth2 · JWT",
            "Fortify Suite",
          ],
        },
        {
          title: "開発",
          items: [
            "Python",
            "JavaScript / TypeScript",
            "Next.js · React",
            "HTML · CSS · Tailwind",
            "SQL · PostgreSQL",
            "JSONパースと自動化",
            "REST API統合",
            "Git · GitHub",
            "AI支援開発ワークフロー（Cursor、Claude Code）",
          ],
        },
        {
          title: "プラットフォームとツール",
          items: [
            "Torq（セキュリティ自動化）",
            "Linux · macOS · Windows",
            "クラウドネイティブ環境",
            "Vercel · Neon",
            "ガバナンスとコンプライアンス",
            "セキュリティモニタリング",
            "侵入検知",
          ],
        },
      ],
    },
    projects: {
      eyebrow: "道のりで作ったもの",
      heading: "最近の作品",
      subheading: "GitHubからライブで取得したプロジェクト。サイドワーク、実験、好奇心から生まれたもの。",
      noRepos: "リポジトリが見つかりません。",
      allRepos: "GitHubで全リポジトリを見る →",
      forks: "フォーク",
    },
    contact: {
      eyebrow: "連絡",
      heading: "話しましょう。",
      intro: "セキュリティの質問でも、コラボレーションでも、ただの会話でも——川はいつでも開いています。",
      namePlaceholder: "お名前",
      emailPlaceholder: "メールアドレス",
      messagePlaceholder: "メッセージ",
      submit: "送信する →",
      sending: "送信中...",
      success: "送信しました。後ほどご連絡します。",
      error: "エラーが発生しました。もう一度お試しください。",
    },
  },
};
