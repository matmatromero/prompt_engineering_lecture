/**
 * Slides Part 1: Welcome, Module 1, Module 2, Game 1, Break, Module 3
 */
export const slidesPart1 = [
  // ═══ WELCOME & ICEBREAKER (Slides 0-4) ═══
  {
    section: '🎬 Welcome',
    layout: 'layout-title',
    html: `
      <img src="/images/network_abstract.png" class="title-bg" alt="" />
      <div class="slide-label">Workshop · 8:00 AM – 12:00 PM</div>
      <h1>Mastery of<br>Prompt Engineering</h1>
      <p class="subtitle">From zero to crafting powerful AI prompts — in one session.</p>
      <div style="margin-top:28px;display:flex;gap:10px;flex-wrap:wrap">
        <span class="pill navy">4 Hours</span>
        <span class="pill terracotta">Hands-On</span>
        <span class="pill gold">Beginner-Friendly</span>
      </div>
    `
  },
  {
    section: '🎬 Welcome',
    layout: 'layout-content animate-in',
    html: `
      <span class="section-badge">Welcome</span>
      <h2>Your Facilitator</h2>
      <div class="two-col two-col-img" style="margin-top:16px">
        <div>
          <div class="glass-card" style="max-width:520px">
            <h3 style="font-size:24px; color:var(--navy)">Matthew Romero</h3>
            <p style="margin-top:8px">Today's mission: transform how you interact with AI — from basic questions to precision-crafted prompts that drive real business value.</p>
          </div>
          <div style="margin-top:24px">
            <h3 style="margin-bottom:12px">Today's Agenda</h3>
            <div class="step-flow">
              <div class="step">Foundations</div><span class="arrow">→</span>
              <div class="step">Prompt Eng.</div><span class="arrow">→</span>
              <div class="step">Use Cases</div><span class="arrow">→</span>
              <div class="step">PART Framework</div><span class="arrow">→</span>
              <div class="step">Advanced</div><span class="arrow">→</span>
              <div class="step">Practice!</div>
            </div>
          </div>
        </div>
        <img src="/images/gears_ideas.png" class="slide-image" alt="Prompt Engineering Concepts" />
      </div>
    `
  },
  {
    section: '🎬 Welcome',
    layout: 'layout-content animate-in',
    html: `
      <span class="section-badge">Welcome</span>
      <h2>Why This Matters — Right Now</h2>
      <div class="stat-row">
        <div class="stat-card"><div class="stat-number">$391B</div><div class="stat-label">Global AI Market<br>Value in 2025</div></div>
        <div class="stat-card"><div class="stat-number">750M</div><div class="stat-label">Apps Running<br>on LLMs</div></div>
        <div class="stat-card"><div class="stat-number">78%</div><div class="stat-label">Of Organizations<br>Using AI</div></div>
        <div class="stat-card"><div class="stat-number">50%</div><div class="stat-label">Of Digital Work<br>Automated by LLMs</div></div>
      </div>
      <div class="highlight-box" style="margin-top:20px">
        <p style="margin:0;text-align:center"><strong>Prompt Engineering is as important today as learning to code was a decade ago.</strong></p>
      </div>
    `
  },
  {
    section: '🎬 Icebreaker',
    layout: 'layout-content animate-in',
    html: `
      <span class="section-badge game">⚡ Icebreaker</span>
      <h2>Quick Question for Everyone</h2>
      <div class="two-col two-col-img" style="margin-top:8px">
        <div>
          <div class="glass-card" style="padding:36px">
            <p style="font-size:24px;color:var(--text-dark);font-family:var(--font-heading);font-weight:700;margin-bottom:14px">"What's the most interesting thing you've asked an AI?"</p>
            <p style="font-size:16px;color:var(--text-muted)">Share with the person next to you — 2 minutes.</p>
          </div>
          <div class="highlight-box" style="margin-top:16px">
            <p style="margin:0"><strong>Fun fact:</strong> Roughly 1 in 6 people worldwide use generative AI tools. By the end of today, you'll be using them like a pro.</p>
          </div>
        </div>
        <img src="/images/ai_robot.png" class="slide-image" alt="AI Robot" />
      </div>
    `
  },
  {
    section: '🎬 Learning Objectives',
    layout: 'layout-content animate-in',
    html: `
      <span class="section-badge">Objectives</span>
      <h2>What You'll Learn Today</h2>
      <div class="two-col" style="margin-top:12px">
        <div class="glass-card">
          <h3 style="color:var(--navy);margin-bottom:12px">🎯 Core Skills</h3>
          <ul>
            <li>Understand what a prompt is and the mechanics of Prompt Engineering</li>
            <li>Distinguish the capabilities of Large Language Models</li>
            <li>Identify professional use cases across departments</li>
            <li>Recognize limitations and boundaries of LLMs</li>
          </ul>
        </div>
        <div class="glass-card">
          <h3 style="color:var(--terracotta);margin-bottom:12px">🚀 Advanced Skills</h3>
          <ul>
            <li>Differentiate between Open, Closed, Conditional & Contextual prompts</li>
            <li>Construct prompts using the <em>PART</em> framework</li>
            <li>Apply <em>Zero/Few Shot</em> and <em>Chain of Thought</em> techniques</li>
            <li>Integrate prompting into dev workflows (VertexAI)</li>
          </ul>
        </div>
      </div>
    `
  },

  // ═══ MODULE 1: FOUNDATIONS (Slides 5-13) ═══
  {
    section: '📘 Module 1: Foundations',
    layout: 'layout-section-title',
    html: `
      <span class="module-number">01</span>
      <span class="section-badge">Module 1 · 45 minutes</span>
      <h2>Foundations of Generative AI & LLMs</h2>
      <p class="module-desc">Before we engineer prompts, we need to understand the technology behind the magic.</p>
    `
  },
  {
    section: '📘 Module 1: Foundations',
    layout: 'layout-content animate-in',
    html: `
      <span class="section-badge">Module 1</span>
      <h2>Key Definitions</h2>
      <div class="two-col two-col-img" style="margin-top:10px">
        <table class="comparison-table">
          <tr><th>Term</th><th>Definition</th><th>Analogy</th></tr>
          <tr>
            <td>Generative AI</td>
            <td>AI that creates <em>new content</em> — text, images, music, video — by identifying patterns in existing data.</td>
            <td>🎨 A Creative Artist</td>
          </tr>
          <tr>
            <td>Large Language Model</td>
            <td>An advanced AI that understands and generates <em>human-like text</em> based on extensive training data.</td>
            <td>📚 A Vast Library</td>
          </tr>
        </table>
        <img src="/images/ai_layers.png" class="slide-image" alt="AI Technology Layers" />
      </div>
    `
  },
  {
    section: '📘 Module 1: Foundations',
    layout: 'layout-content animate-in',
    html: `
      <span class="section-badge">Module 1</span>
      <h2>The Relationship</h2>
      <div class="two-col two-col-img" style="margin-top:10px">
        <div>
          <div class="glass-card">
            <p style="font-size:17px;color:var(--text-dark)"><strong>Think of the "Sidebar" concept:</strong></p>
            <p style="margin-top:8px">Generative AI is the <em>broad umbrella</em> that covers images, video, audio, and text. LLMs are the <em>text specialists</em> — a specific subset focused on language tasks.</p>
          </div>
          <div class="step-flow" style="margin-top:24px;justify-content:flex-start">
            <div class="step" style="border-color:var(--sage)">🌐 Generative AI</div>
            <span class="arrow">⊃</span>
            <div class="step" style="border-color:var(--navy)">📝 LLMs (Text)</div>
            <span class="arrow">⊃</span>
            <div class="step" style="border-color:var(--gold)">💬 ChatGPT</div>
          </div>
          <p style="margin-top:20px;color:var(--text-muted);font-size:14px">Other GenAI: DALL·E (images), Suno (music), Runway (video), ElevenLabs (voice)</p>
        </div>
        <img src="/images/network_abstract.png" class="slide-image" alt="Network Pattern" />
      </div>
    `
  },
  {
    section: '📘 Module 1: Foundations',
    layout: 'layout-content animate-in',
    html: `
      <span class="section-badge">Module 1</span>
      <h2>How LLMs Actually Work</h2>
      <div class="two-col">
        <div>
          <div class="accent-card">
            <div class="accent-bar navy"></div>
            <div class="accent-content">
              <h3>🧠 Training</h3>
              <p>The model reads billions of text documents — books, websites, code — and learns patterns about how language works. It doesn't memorize; it learns <em>relationships between words</em>.</p>
            </div>
          </div>
          <div class="accent-card" style="margin-top:12px">
            <div class="accent-bar terracotta"></div>
            <div class="accent-content">
              <h3>🎯 Inference</h3>
              <p>When you give it a prompt, it predicts the most probable <em>next token</em> (word/piece), one at a time, building a coherent response.</p>
            </div>
          </div>
        </div>
        <div>
          <div class="accent-card">
            <div class="accent-bar sage"></div>
            <div class="accent-content">
              <h3>🔑 Key Insight</h3>
              <p>It's a <em>probability engine</em>, not a search engine. It generates responses — it doesn't look things up. This is why the quality of your <strong>input</strong> determines the quality of the <strong>output</strong>.</p>
            </div>
          </div>
          <div class="highlight-box" style="margin-top:12px">
            <p style="margin:0;font-size:15px"><strong>Think:</strong> "Garbage in, garbage out" becomes <strong>"Great prompt in, great response out."</strong></p>
          </div>
        </div>
      </div>
    `
  },
  {
    section: '📘 Module 1: Foundations',
    layout: 'layout-content animate-in',
    html: `
      <span class="section-badge">Module 1</span>
      <h2>Introducing ChatGPT</h2>
      <div class="card-grid card-grid-2">
        <div class="accent-card"><div class="accent-bar navy"></div><div class="accent-content"><h3>👨‍💻 Developer</h3><p>OpenAI — Released November 30, 2022. Now one of the fastest-adopted technologies in history.</p></div></div>
        <div class="accent-card"><div class="accent-bar terracotta"></div><div class="accent-content"><h3>⚡ Dynamic</h3><p>Responses are generated on the fly based on your input. It is <em>not</em> copy-pasting from the internet.</p></div></div>
        <div class="accent-card"><div class="accent-bar sage"></div><div class="accent-content"><h3>🌍 Versatile</h3><p>Supports 95+ languages, adapts to conversation styles and topics, from casual to formal.</p></div></div>
        <div class="accent-card"><div class="accent-bar gold"></div><div class="accent-content"><h3>🔄 Contextual</h3><p>Remembers the conversation context within a session — each message builds on previous ones.</p></div></div>
      </div>
    `
  },
  {
    section: '📘 Module 1: Foundations',
    layout: 'layout-content animate-in',
    html: `
      <span class="section-badge">Module 1</span>
      <h2>The "Smart Speaker" Analogy</h2>
      <div class="two-col two-col-img">
        <div>
          <div class="callout">
            <p>"Prompting is like asking your smart speaker to play a song. Say 'play music' and you get a random result. Say 'play lo-fi jazz instrumentals for studying' and you get exactly what you need."</p>
            <div class="callout-author">— The phrasing of your input directly determines the relevance of AI's response.</div>
          </div>
          <div class="card-grid card-grid-3" style="margin-top:20px">
            <div class="accent-card"><div class="accent-bar terracotta"></div><div class="accent-content" style="text-align:center"><p style="font-size:28px;margin-bottom:4px">😐</p><h3>Vague</h3><p style="font-family:var(--font-mono);font-size:13px;color:var(--terracotta)">"Play music"</p></div></div>
            <div class="accent-card"><div class="accent-bar gold"></div><div class="accent-content" style="text-align:center"><p style="font-size:28px;margin-bottom:4px">🙂</p><h3>Better</h3><p style="font-family:var(--font-mono);font-size:13px;color:var(--gold)">"Play jazz"</p></div></div>
            <div class="accent-card"><div class="accent-bar sage"></div><div class="accent-content" style="text-align:center"><p style="font-size:28px;margin-bottom:4px">🤩</p><h3>Great</h3><p style="font-family:var(--font-mono);font-size:13px;color:var(--sage)">"Play lo-fi jazz for studying"</p></div></div>
          </div>
        </div>
        <img src="/images/smart_speaker.png" class="slide-image" alt="Smart Speaker" />
      </div>
    `
  },
  {
    section: '📘 Module 1: Foundations',
    layout: 'layout-content animate-in',
    html: `
      <span class="section-badge">Module 1</span>
      <h2>Other LLMs You Should Know</h2>
      <div class="card-grid card-grid-3">
        <div class="accent-card"><div class="accent-bar navy"></div><div class="accent-content"><h3>🔷 Gemini</h3><p><em>Google DeepMind</em><br>Multimodal — handles text, images, audio, video. Powers Google products.</p></div></div>
        <div class="accent-card"><div class="accent-bar sage"></div><div class="accent-content"><h3>🟣 Claude</h3><p><em>Anthropic</em><br>Known for safety, long context (200K tokens), and nuanced reasoning.</p></div></div>
        <div class="accent-card"><div class="accent-bar terracotta"></div><div class="accent-content"><h3>🦙 Llama</h3><p><em>Meta</em><br>Open-source. Free to use and customize. Popular for enterprise self-hosting.</p></div></div>
        <div class="accent-card"><div class="accent-bar gold"></div><div class="accent-content"><h3>🌐 Copilot</h3><p><em>Microsoft</em><br>Integrated into Office 365, VS Code. Uses GPT under the hood.</p></div></div>
        <div class="accent-card"><div class="accent-bar steel"></div><div class="accent-content"><h3>🟢 Mistral</h3><p><em>Mistral AI</em><br>European-built, high performance relative to size. Great multilingual support.</p></div></div>
        <div class="accent-card"><div class="accent-bar navy"></div><div class="accent-content"><h3>🔶 DeepSeek</h3><p><em>DeepSeek</em><br>Strong open model from China. Competitive with top proprietary models.</p></div></div>
      </div>
    `
  },
  {
    section: '📘 Module 1: Foundations',
    layout: 'layout-content animate-in',
    html: `
      <span class="section-badge">Module 1</span>
      <h2>Module 1 Recap ✓</h2>
      <div class="two-col two-col-img" style="margin-top:8px">
        <div>
          <div class="glass-card" style="max-width:700px">
            <ul>
              <li><strong>Generative AI</strong> creates new content; <strong>LLMs</strong> are the text-focused subset</li>
              <li>LLMs are <em>probability engines</em> — they predict the next most likely word</li>
              <li><strong>ChatGPT</strong> is one of many LLMs; Gemini, Claude, Llama are others</li>
              <li>Your <em>prompt quality</em> directly controls the response quality</li>
            </ul>
          </div>
          <div class="highlight-box" style="max-width:700px;margin-top:16px">
            <p style="margin:0"><strong>Key takeaway:</strong> Understanding the tool is step one. Now let's learn how to talk to it effectively.</p>
          </div>
        </div>
        <img src="/images/ai_lightbulb.png" class="slide-image" alt="AI Lightbulb" style="max-width:300px" />
      </div>
    `
  },

  // ═══ MODULE 2: DEFINING PROMPT ENGINEERING (Slides 14-19) ═══
  {
    section: '📘 Module 2: Prompt Engineering',
    layout: 'layout-section-title',
    html: `
      <span class="module-number">02</span>
      <span class="section-badge mod2">Module 2 · 30 minutes</span>
      <h2>Defining Prompt Engineering</h2>
      <p class="module-desc">The art and science of talking to AI.</p>
    `
  },
  {
    section: '📘 Module 2: Prompt Engineering',
    layout: 'layout-content animate-in',
    html: `
      <span class="section-badge mod2">Module 2</span>
      <h2>What is a Prompt?</h2>
      <div class="two-col two-col-img">
        <div>
          <div class="glass-card">
            <p style="font-size:20px;color:var(--text-dark)">A <em>prompt</em> is the text input — the question or command — you provide to an AI model to trigger a response.</p>
          </div>
          <h3 style="margin-top:24px;margin-bottom:12px">Prompts Come in All Shapes</h3>
          <div style="display:flex;flex-direction:column;gap:12px">
            <div class="accent-card"><div class="accent-bar navy"></div><div class="accent-content" style="padding:16px"><p style="font-size:12px;color:var(--text-muted);margin-bottom:2px">INSTRUCTIONAL</p><p style="font-family:var(--font-mono);font-size:14px;color:var(--navy)">"Summarize the text."</p></div></div>
            <div class="accent-card"><div class="accent-bar terracotta"></div><div class="accent-content" style="padding:16px"><p style="font-size:12px;color:var(--text-muted);margin-bottom:2px">ABSTRACT</p><p style="font-family:var(--font-mono);font-size:14px;color:var(--terracotta)">"What is the meaning of life?"</p></div></div>
            <div class="accent-card"><div class="accent-bar gold"></div><div class="accent-content" style="padding:16px"><p style="font-size:12px;color:var(--text-muted);margin-bottom:2px">LOCALIZED</p><p style="font-family:var(--font-mono);font-size:14px;color:var(--gold)">"Ano-ano magandang puntahan sa Cebu?"</p></div></div>
          </div>
        </div>
        <img src="/images/ai_lightbulb.png" class="slide-image" alt="AI Idea" />
      </div>
    `
  },
  {
    section: '📘 Module 2: Prompt Engineering',
    layout: 'layout-content animate-in',
    html: `
      <span class="section-badge mod2">Module 2</span>
      <h2>The Engineering Task</h2>
      <div class="two-col two-col-wide">
        <div>
          <div class="glass-card">
            <p style="font-size:18px;color:var(--text-dark)"><strong>Prompt Engineering</strong> is the iterative process of designing and refining prompts until the AI's response meets your expectations for <em>relevance</em> and <em>quality</em>.</p>
          </div>
          <div class="highlight-box" style="margin-top:20px">
            <p style="margin:0"><strong>It's more art than science</strong> — like human communication, it requires trial, error, and iteration. Proven frameworks guide you.</p>
          </div>
        </div>
        <div style="display:flex;flex-direction:column;gap:10px;margin-top:10px">
          <div class="accent-card"><div class="accent-bar navy"></div><div class="accent-content" style="padding:16px"><strong style="color:var(--navy)">1. Write Prompt</strong><br><span style="font-size:13px;color:var(--text-muted)">Craft your initial instruction</span></div></div>
          <div class="accent-card"><div class="accent-bar terracotta"></div><div class="accent-content" style="padding:16px"><strong style="color:var(--terracotta)">2. Get Response</strong><br><span style="font-size:13px;color:var(--text-muted)">See how the AI interprets it</span></div></div>
          <div class="accent-card"><div class="accent-bar sage"></div><div class="accent-content" style="padding:16px"><strong style="color:var(--sage)">3. Evaluate</strong><br><span style="font-size:13px;color:var(--text-muted)">Check accuracy and formatting</span></div></div>
          <div class="accent-card"><div class="accent-bar gold"></div><div class="accent-content" style="padding:16px"><strong style="color:var(--gold)">4. Refine & Repeat</strong><br><span style="font-size:13px;color:var(--text-muted)">Adjust parameters and try again</span></div></div>
        </div>
      </div>
    `
  },
  {
    section: '📘 Module 2: Prompt Engineering',
    layout: 'layout-content animate-in',
    html: `
      <span class="section-badge mod2">Module 2</span>
      <h2>Why Prompt Engineering Matters</h2>
      <div class="two-col two-col-img">
        <div>
          <div class="stat-card" style="margin-bottom:16px"><div class="stat-number">$505B</div><div class="stat-label">Prompt Engineering Market Value (2025)</div></div>
          <div class="stat-card" style="margin-bottom:16px"><div class="stat-number">$6.5T</div><div class="stat-label">Projected Market by 2034 (32.9% CAGR)</div></div>
          <div class="stat-card"><div class="stat-number">200+</div><div class="stat-label">Documented Prompting Techniques</div></div>
        </div>
        <div>
          <div class="callout">
            <p>"A study by OpenAI, Microsoft, Google, Princeton, and Stanford analyzed over 1,500 papers and catalogued 200+ distinct prompting techniques."</p>
          </div>
          <img src="/images/gears_ideas.png" class="slide-image" alt="Gears Idea" style="margin-top:20px;max-width:300px;opacity:0.9" />
        </div>
      </div>
    `
  },
  {
    section: '📘 Module 2: Prompt Engineering',
    layout: 'layout-content animate-in',
    html: `
      <span class="section-badge mod2">Module 2</span>
      <h2>The Vague vs. Specific Effect</h2>
      <div class="two-col">
        <div class="accent-card">
          <div class="accent-bar terracotta"></div>
          <div class="accent-content">
            <p style="font-size:12px;color:var(--text-muted);margin-bottom:6px;font-weight:700">❌ VAGUE PROMPT</p>
            <div class="code-block" style="margin:8px 0">
              <span class="string">"Tell me about marketing."</span>
            </div>
            <p style="margin-top:12px;font-size:14px">AI might ramble for paragraphs about marketing history, digital vs. traditional, etc.</p>
          </div>
        </div>
        <div class="accent-card">
          <div class="accent-bar sage"></div>
          <div class="accent-content">
            <p style="font-size:12px;color:var(--text-muted);margin-bottom:6px;font-weight:700">✅ SPECIFIC PROMPT</p>
            <div class="code-block" style="margin:8px 0">
              <span class="string">"As a marketing strategist, list 5 social media tactics for a B2B SaaS startup targeting CTOs. Format as a numbered list."</span>
            </div>
            <p style="margin-top:12px;font-size:14px">AI gives a focused, actionable, well-formatted response.</p>
          </div>
        </div>
      </div>
    `
  },

  // ═══ GAME 1: PROMPT ROULETTE (Slides 20-21) ═══
  {
    section: '🎮 Game: Prompt Roulette',
    layout: 'layout-content animate-in',
    html: `
      <span class="section-badge game">🎮 Game Time!</span>
      <h2>Prompt Roulette</h2>
      <p>Spin the wheel to get a random topic. Then craft the <em>best possible prompt</em> for it in 60 seconds!</p>
      <div class="two-col" style="margin-top:16px">
        <div class="spinner-container">
          <div class="spinner-wheel"><canvas id="spinner-canvas"></canvas></div>
          <button class="spin-btn" id="spin-btn">🎰 SPIN!</button>
          <div class="spinner-result" id="spinner-result"></div>
        </div>
        <div>
          <div class="glass-card">
            <h3>📋 Rules</h3>
            <ul>
              <li>Spin the wheel for a random topic</li>
              <li>You have <strong>60 seconds</strong> to write a prompt</li>
              <li>The more specific, the better!</li>
              <li>Share your best prompt with the class</li>
            </ul>
          </div>
          <div style="text-align:center;margin-top:16px">
            <div class="countdown" id="timer-display">1:00</div>
            <div style="display:flex;gap:8px;justify-content:center">
              <button class="timer-btn" id="timer-start">▶ Start</button>
              <button class="timer-btn" id="timer-reset">↺ Reset</button>
            </div>
          </div>
        </div>
      </div>
    `,
    onEnter: () => {
      import('./games.js').then(m => { m.initSpinner(); m.initTimer(); });
    }
  },

  // ═══ BREAK (Slide 22) ═══
  {
    section: '☕ Break',
    layout: 'layout-break',
    html: `
      <div class="break-icon">☕</div>
      <h2 style="font-family:var(--font-heading);font-size:48px;margin-bottom:12px">Break Time</h2>
      <p style="font-size:20px;color:var(--text-body)">15 minutes — stretch, grab a coffee, check your messages.</p>
      <p style="font-size:16px;color:var(--text-muted);margin-top:12px">We'll continue with <em>Use Cases & Boundaries</em> when you're back.</p>
    `
  },

  // ═══ MODULE 3: USE CASES & BOUNDARIES (Slides 23-31) ═══
  {
    section: '📘 Module 3: Use Cases',
    layout: 'layout-section-title',
    html: `
      <span class="module-number">03</span>
      <span class="section-badge mod3">Module 3 · 35 minutes</span>
      <h2>Use Cases & Boundaries</h2>
      <p class="module-desc">Where LLMs shine — and where they can mislead you.</p>
    `
  },
  {
    section: '📘 Module 3: Use Cases',
    layout: 'layout-content animate-in',
    html: `
      <span class="section-badge mod3">Module 3</span>
      <h2>5 Categories of Professional Use</h2>
      <div class="card-grid card-grid-3">
        <div class="accent-card"><div class="accent-bar navy"></div><div class="accent-content"><h3>📨 Comms & Reporting</h3><p>Email drafting, meeting summaries, report writing, feedback summaries, document summaries</p></div></div>
        <div class="accent-card"><div class="accent-bar terracotta"></div><div class="accent-content"><h3>📝 Content Development</h3><p>FAQ generation, business plans, product descriptions, articles, creative storytelling</p></div></div>
        <div class="accent-card"><div class="accent-bar sage"></div><div class="accent-content"><h3>📊 Data & Analysis</h3><p>Dataset analysis, market research, survey creation, data-driven decision support</p></div></div>
        <div class="accent-card"><div class="accent-bar gold"></div><div class="accent-content"><h3>✨ Enhancement Tools</h3><p>Editing help, jargon translation, branding & taglines, research assistance</p></div></div>
        <div class="accent-card"><div class="accent-bar steel"></div><div class="accent-content"><h3>⚙️ Technical Support</h3><p>Language translation, code generation & debugging, macro creation, IT support</p></div></div>
      </div>
    `
  },
  {
    section: '📘 Module 3: Use Cases',
    layout: 'layout-content animate-in',
    html: `
      <span class="section-badge mod3">Module 3</span>
      <h2>Real-world Examples by Department</h2>
      <div class="two-col">
        <div>
          <div class="accent-card"><div class="accent-bar navy"></div><div class="accent-content"><h3>💼 Sales</h3><p>"Draft a follow-up email to a prospect who attended our webinar but didn't respond to the initial outreach."</p></div></div>
          <div class="accent-card" style="margin-top:10px"><div class="accent-bar terracotta"></div><div class="accent-content"><h3>👥 HR</h3><p>"Create 5 behavioral interview questions for a senior software engineer role focused on leadership."</p></div></div>
          <div class="accent-card" style="margin-top:10px"><div class="accent-bar gold"></div><div class="accent-content"><h3>💰 Finance</h3><p>"Summarize this quarterly earnings report into 5 key bullet points for the board presentation."</p></div></div>
        </div>
        <div>
          <div class="accent-card"><div class="accent-bar sage"></div><div class="accent-content"><h3>📢 Marketing</h3><p>"Generate 10 Instagram caption ideas for our new eco-friendly water bottle launch, targeting Gen Z."</p></div></div>
          <div class="accent-card" style="margin-top:10px"><div class="accent-bar steel"></div><div class="accent-content"><h3>💻 Engineering</h3><p>"Review this Python function for potential security vulnerabilities and suggest fixes with explanations."</p></div></div>
          <div class="accent-card" style="margin-top:10px"><div class="accent-bar navy"></div><div class="accent-content"><h3>📞 Support</h3><p>"Create a troubleshooting decision tree for customers experiencing login failures."</p></div></div>
        </div>
      </div>
    `
  },
  {
    section: '📘 Module 3: Boundaries',
    layout: 'layout-content animate-in',
    html: `
      <span class="section-badge mod3">Module 3</span>
      <h2>The Four Boundaries of AI Interaction</h2>
      <p>Every AI-generated response must pass these four checks:</p>
      <div class="card-grid card-grid-4" style="margin-top:16px">
        <div class="accent-card"><div class="accent-bar navy"></div><div class="accent-content" style="text-align:center"><p style="font-size:40px;margin-bottom:8px">🎯</p><h3>Accuracy</h3><p>Ensure outputs align with trustworthy, up-to-date sources.</p></div></div>
        <div class="accent-card"><div class="accent-bar sage"></div><div class="accent-content" style="text-align:center"><p style="font-size:40px;margin-bottom:8px">⚖️</p><h3>Bias & Fairness</h3><p>Confirm the AI maintains a fair and balanced point of view.</p></div></div>
        <div class="accent-card"><div class="accent-bar gold"></div><div class="accent-content" style="text-align:center"><p style="font-size:40px;margin-bottom:8px">🔗</p><h3>Relevance</h3><p>Verify the generated answer directly addresses the specific prompt.</p></div></div>
        <div class="accent-card"><div class="accent-bar steel"></div><div class="accent-content" style="text-align:center"><p style="font-size:40px;margin-bottom:8px">⚖️</p><h3>Ethical & Legal</h3><p>Evaluate compliance with legal standards, particularly in regulated industries.</p></div></div>
      </div>
    `
  },
  {
    section: '📘 Module 3: Hallucination',
    layout: 'layout-content animate-in',
    html: `
      <span class="section-badge mod3">Module 3</span>
      <h2>The Danger of Hallucinations</h2>
      <div class="two-col two-col-img">
        <div>
          <div class="accent-card">
            <div class="accent-bar navy"></div>
            <div class="accent-content">
              <h3>Definition</h3>
              <p>A phenomenon where an AI model generates outputs that are entirely fabricated and not grounded in reality or the training data.</p>
            </div>
          </div>
          <div class="accent-card" style="margin-top:12px">
            <div class="accent-bar terracotta"></div>
            <div class="accent-content">
              <h3 style="color:var(--terracotta)">The Golden Rule</h3>
              <p>Always validate the responses of the LLM.</p>
            </div>
          </div>
          <div class="accent-card" style="margin-top:12px">
            <div class="accent-bar sage"></div>
            <div class="accent-content">
              <h3 style="color:var(--sage)">The Target Standard</h3>
              <p>An effective LLM interaction should always strive to be Helpful, Honest, and Harmless (The HHH Rule).</p>
            </div>
          </div>
        </div>
        <img src="/images/ai_robot.png" class="slide-image" alt="AI Robot" />
      </div>
    `
  },
  {
    section: '📘 Module 3: AI Behavior',
    layout: 'layout-content animate-in',
    html: `
      <span class="section-badge mod3">Module 3</span>
      <h2>The AI Behavioral Mantra</h2>
      <p>For any deployment, an LLM should always be:</p>
      <div class="card-grid card-grid-3" style="margin-top:20px">
        <div class="accent-card"><div class="accent-bar navy"></div><div class="accent-content" style="text-align:center;padding:32px 24px">
          <p style="font-size:48px;margin-bottom:12px">🤝</p>
          <h3 style="font-size:22px;color:var(--navy)">Helpful</h3>
          <p>Provide useful, actionable responses that genuinely address the user's needs.</p>
        </div></div>
        <div class="accent-card"><div class="accent-bar terracotta"></div><div class="accent-content" style="text-align:center;padding:32px 24px">
          <p style="font-size:48px;margin-bottom:12px">💎</p>
          <h3 style="font-size:22px;color:var(--terracotta)">Honest</h3>
          <p>Acknowledge limitations, say "I don't know" when appropriate, avoid fabrication.</p>
        </div></div>
        <div class="accent-card"><div class="accent-bar sage"></div><div class="accent-content" style="text-align:center;padding:32px 24px">
          <p style="font-size:48px;margin-bottom:12px">🛡️</p>
          <h3 style="font-size:22px;color:var(--sage)">Harmless</h3>
          <p>Never produce content that could cause harm, discrimination, or legal issues.</p>
        </div></div>
      </div>
    `
  },
];
