// ─── i18n Engine ──────────────────────────────────────────────────────────────
// Vanilla JS — zero deps. Uses data-i18n attributes on elements.
// Usage: window.I18n.setLang('en')

const TRANSLATIONS = {
  pt: {
    // Nav
    'nav.search':           'SEARCH',
    'nav.search.shortcut':  'CTRL+K',

    // Hero
    'hero.tagline':         '[ DESENVOLVEDOR BACK-END ]',
    'hero.desc':            'Construindo infraestruturas robustas, focando em escalabilidade e performance. Mais do que código, resolvo gargalos reais.',

    // Marquee
    'marquee.1': 'DESENVOLVIMENTO BACK-END',
    'marquee.2': 'TRABALHO EM EQUIPE',
    'marquee.3': 'SISTEMAS ESCALÁVEIS',
    'marquee.4': 'APRENDIZADO RÁPIDO',

    // Dashboard
    'dashboard.title':      'IMPACTO\nOPERACIONAL',
    'dashboard.subtitle':   'Eficiência Computacional',
    'dashboard.desc':       'Substituição de monólitos gargalados por ecossistemas distribuídos. Otimização de I/O, cache agressivo com Redis e mensageria via Kafka.',
    'dashboard.focus':      'SISTEMAS DISTRIBUÍDOS & BACK-END',

    // Arsenal / Projects
    'arsenal.title':        'MEUS PROJETOS',
    'arsenal.desc':         'Aplicações desenhadas para suportar alto volume e resolver problemas do mundo real.',
    'arsenal.explore':      'EXPLORAR PROJETO',
    'arsenal.wip':          'EM DESENVOLVIMENTO',

    // Project descriptions
    'proj.raftkv.name':     'RAFT K-V STORE',
    'proj.raftkv.desc':     'Banco de dados distribuído construído do zero implementando o algoritmo de consenso Raft para consistência forte.',
    'proj.gigamq.name':     'GIGA MESSAGE QUEUE',
    'proj.gigamq.desc':     'Message Broker in-memory projetado para altíssimo throughput (100k+ req/s), utilizando Goroutines e Channels avançados.',
    'proj.saga.name':       'SAGA COMMERCE',
    'proj.saga.desc':       'Ecossistema de e-commerce rodando em microsserviços. Implementa o padrão Saga via Apache Kafka para lidar com pagamentos e estoque.',
    'proj.cloud.name':      'GIGA CLOUD INFRA',
    'proj.cloud.desc':      'Infraestrutura Serverless de alta disponibilidade com escalonamento automático e latência global otimizada.',
    'proj.aura.name':       'AURA BALANCER',
    'proj.aura.desc':       'Balanceador de carga customizado e ultra veloz escrito em C++ puro. Roteamento eficiente sem frameworks adicionais.',
    'proj.skate.name':      'SKATETECH APP',
    'proj.skate.desc':      'Plataforma mobile para skatistas mapearem picos e compartilharem linhas, com UX fluida e geolocalização em tempo real.',
    'proj.showroom.name':   'SHOWROOM VELOCIDADE',
    'proj.showroom.desc':   'WaaS (Website as a Service) para concessionárias. Foco em performance extrema (100/100 Lighthouse) e conversão via WhatsApp.',

    // Architecture
    'arch.title':           'SYSTEM\nTOPOLOGY',
    'arch.step1.title':     '01. INGRESS GATEWAY',
    'arch.step1.desc':      'Roteamento de alta performance suportando 15k+ req/sec. Camada de rate limiting em Redis e terminação TLS.',
    'arch.step2.title':     '02. EVENT STREAMING',
    'arch.step2.desc':      'Cluster Apache Kafka isolando picos transacionais. Ingestão assíncrona garantindo zero perda de dados em falhas severas.',
    'arch.step3.title':     '03. WORKER NODES',
    'arch.step3.desc':      'Pool de microsserviços autônomos consumindo partições em paralelo. Escalabilidade horizontal automática baseada em latência.',

    // Bento / About
    'bento.title':          'UM POUCO\nSOBRE MIM',
    'bento.academic.tag':   'ESTUDANTE DE CIÊNCIA DA COMPUTAÇÃO',
    'bento.academic.title': 'UNIVERSIDADE MACKENZIE',
    'bento.academic.desc':  'Aprofundando os fundamentos da computação de forma sólida, enquanto pratico o desenvolvimento e pesquisa em back-end no meu próprio laboratório.',
    'bento.lead.tag':       'COMUNICAÇÃO E EMPATIA',
    'bento.lead.title':     'LIDERANÇA NATURAL',
    'bento.lead.desc':      'Sei ouvir, aprendo rápido (Fast-learner) e gosto de pessoas. Como capitão no E-sports universitário, aprendi a liderar grupos e resolver problemas difíceis juntos, sem gerar atritos e com muita colaboração.',
    'bento.rnd.tag':        'MÃO NA MASSA',
    'bento.rnd.title':      'RESOLVER PROBLEMAS REAIS',
    'bento.rnd.desc':       'Meu foco não é só escrever linhas de código. É construir sistemas que funcionam de forma inteligente e resolver as dores práticas de uma empresa ou produto.',

    // Timeline
    'timeline.title':       'CAREER\nPATH',

    // Vault
    'vault.title':          'NÚCLEO\nDE DADOS',

    // Footer CTA
    'footer.cta':           'LET\'S BUILD\nSOMETHING.',

    // Theater
    'theater.back':         '← VOLTAR AO SISTEMA',
    'theater.github':       'INICIAR BUILD / VER CÓDIGO NO GITHUB',
    'theater.wip':          '[ DIAGRAMA DE ARQUITETURA EM BREVE ]',
    'theater.standby':      'SYSTEM STANDBY... AWAITING DEPLOYMENT',

    // Command palette
    'cmd.placeholder':      'O que você está procurando? (Projetos, Skills...)',
    'cmd.item1':            'Laboratório de Pesquisa',
    'cmd.item2':            'Fundações & Cultura',
    'cmd.item3':            'Linha do Tempo',
    'cmd.item4':            '» Abrir Terminal UNIX',
  },

  en: {
    // Nav
    'nav.search':           'SEARCH',
    'nav.search.shortcut':  'CTRL+K',

    // Hero
    'hero.tagline':         '[ BACK-END DEVELOPER ]',
    'hero.desc':            'Building robust infrastructures focused on scalability and performance. More than code — I solve real bottlenecks.',

    // Marquee
    'marquee.1': 'BACK-END DEVELOPMENT',
    'marquee.2': 'TEAM COLLABORATION',
    'marquee.3': 'SCALABLE SYSTEMS',
    'marquee.4': 'FAST LEARNER',

    // Dashboard
    'dashboard.title':      'OPERATIONAL\nIMPACT',
    'dashboard.subtitle':   'Computational Efficiency',
    'dashboard.desc':       'Replacing bottlenecked monoliths with distributed ecosystems. I/O optimization, aggressive Redis caching and Kafka-based messaging.',
    'dashboard.focus':      'DISTRIBUTED SYSTEMS & BACK-END',

    // Arsenal / Projects
    'arsenal.title':        'MY PROJECTS',
    'arsenal.desc':         'Applications designed to handle high volume and solve real-world problems.',
    'arsenal.explore':      'EXPLORE PROJECT',
    'arsenal.wip':          'IN DEVELOPMENT',

    // Project descriptions
    'proj.raftkv.name':     'RAFT K-V STORE',
    'proj.raftkv.desc':     'Distributed key-value store built from scratch implementing the Raft consensus algorithm for strong consistency.',
    'proj.gigamq.name':     'GIGA MESSAGE QUEUE',
    'proj.gigamq.desc':     'In-memory Message Broker designed for ultra-high throughput (100k+ req/s) using advanced Goroutines and Channels.',
    'proj.saga.name':       'SAGA COMMERCE',
    'proj.saga.desc':       'Microservices-based e-commerce ecosystem. Implements the Saga pattern via Apache Kafka to handle payments and inventory.',
    'proj.cloud.name':      'GIGA CLOUD INFRA',
    'proj.cloud.desc':      'High-availability Serverless infrastructure with automatic scaling and optimized global latency.',
    'proj.aura.name':       'AURA BALANCER',
    'proj.aura.desc':       'Ultra-fast custom load balancer written in pure C++. Efficient routing with no additional frameworks.',
    'proj.skate.name':      'SKATETECH APP',
    'proj.skate.desc':      'Mobile platform for skaters to map spots and share lines, with fluid UX and real-time geolocation.',
    'proj.showroom.name':   'SHOWROOM VELOCIDADE',
    'proj.showroom.desc':   'WaaS (Website as a Service) for car dealerships. Extreme performance (100/100 Lighthouse) and WhatsApp-first conversion.',

    // Architecture
    'arch.title':           'SYSTEM\nTOPOLOGY',
    'arch.step1.title':     '01. INGRESS GATEWAY',
    'arch.step1.desc':      'High-performance routing supporting 15k+ req/sec. Redis rate-limiting layer and TLS termination.',
    'arch.step2.title':     '02. EVENT STREAMING',
    'arch.step2.desc':      'Apache Kafka cluster isolating transactional spikes. Async ingestion guaranteeing zero data loss on severe failures.',
    'arch.step3.title':     '03. WORKER NODES',
    'arch.step3.desc':      'Pool of autonomous microservices consuming partitions in parallel. Automatic horizontal scaling based on latency.',

    // Bento / About
    'bento.title':          'A BIT\nABOUT ME',
    'bento.academic.tag':   'COMPUTER SCIENCE STUDENT',
    'bento.academic.title': 'MACKENZIE UNIVERSITY',
    'bento.academic.desc':  'Building solid CS fundamentals at university while doing hands-on back-end research and development in my own lab.',
    'bento.lead.tag':       'COMMUNICATION & EMPATHY',
    'bento.lead.title':     'NATURAL LEADERSHIP',
    'bento.lead.desc':      'I listen well, learn fast, and enjoy working with people. As team captain in university E-sports, I led groups through hard problems — collaboratively, without friction.',
    'bento.rnd.tag':        'HANDS ON',
    'bento.rnd.title':      'SOLVING REAL PROBLEMS',
    'bento.rnd.desc':       'My focus is not just writing lines of code. It\'s building systems that work intelligently and solving the practical pain points of a business or product.',

    // Timeline
    'timeline.title':       'CAREER\nPATH',

    // Vault
    'vault.title':          'DATA\nCORE',

    // Footer CTA
    'footer.cta':           'LET\'S BUILD\nSOMETHING.',

    // Theater
    'theater.back':         '← BACK TO SYSTEM',
    'theater.github':       'START BUILD / VIEW CODE ON GITHUB',
    'theater.wip':          '[ ARCHITECTURE DIAGRAM COMING SOON ]',
    'theater.standby':      'SYSTEM STANDBY... AWAITING DEPLOYMENT',

    // Command palette
    'cmd.placeholder':      'What are you looking for? (Projects, Skills...)',
    'cmd.item1':            'Project Lab',
    'cmd.item2':            'Foundations & Culture',
    'cmd.item3':            'Timeline',
    'cmd.item4':            '» Open UNIX Terminal',
  }
};

// ─── Engine ───────────────────────────────────────────────────────────────────

window.I18n = (() => {
  let currentLang = localStorage.getItem('portfolio-lang') || 'pt';

  function t(key) {
    return TRANSLATIONS[currentLang][key] || TRANSLATIONS['pt'][key] || key;
  }

  function applyLang() {
    document.documentElement.lang = currentLang === 'pt' ? 'pt-BR' : 'en';

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = t(key);
      // Support newlines via <br> in innerHTML
      el.innerHTML = val.replace(/\n/g, '<br>');
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
    });

    // Update toggle button state
    const btn = document.getElementById('lang-toggle-btn');
    if (btn) {
      btn.querySelector('.lang-active').textContent  = currentLang.toUpperCase();
      btn.querySelector('.lang-inactive').textContent = currentLang === 'pt' ? 'EN' : 'PT';
    }

    // Notify other modules (e.g. GSAP text splits that need re-splitting)
    window.dispatchEvent(new CustomEvent('langchange', { detail: { lang: currentLang } }));
  }

  function setLang(lang) {
    if (lang !== 'pt' && lang !== 'en') return;
    currentLang = lang;
    localStorage.setItem('portfolio-lang', lang);
    applyLang();
  }

  function toggle() {
    setLang(currentLang === 'pt' ? 'en' : 'pt');
  }

  function init() {
    applyLang();
    const btn = document.getElementById('lang-toggle-btn');
    if (btn) btn.addEventListener('click', toggle);
  }

  return { init, setLang, toggle, t, get lang() { return currentLang; } };
})();
