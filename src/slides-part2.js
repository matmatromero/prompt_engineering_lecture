/**
 * Slides Part 2: Knowledge Sync, Module 4 (PART), Game 2, Module 5 (Advanced), Game 3, Conclusion
 */
export const slidesPart2 = [
  // ═══ KNOWLEDGE SYNC: ANATOMY OF A PROMPT (Slides 32-34) ═══
  {
    section: '🧠 Knowledge Sync',
    layout: 'layout-section-title',
    html: `
      <span class="module-number">🧠</span>
      <span class="section-badge sync">Knowledge Sync · 10 min</span>
      <h2>Anatomy of a Prompt</h2>
      <p class="module-desc">Before we build, let's understand the building blocks.</p>
    `
  },
  {
    section: '🧠 Knowledge Sync',
    layout: 'layout-content animate-in',
    html: `
      <span class="section-badge sync">Knowledge Sync</span>
      <h2>The 6 Building Blocks</h2>
      <div class="card-grid card-grid-3">
        <div class="accent-card"><div class="accent-bar navy"></div><div class="accent-content">
          <h3>🎭 Role</h3><p>Define <em>who</em> you need AI to be.<br><span style="color:var(--text-muted);font-size:13px">"Act as a data analyst…"</span></p>
        </div></div>
        <div class="accent-card"><div class="accent-bar sage"></div><div class="accent-content">
          <h3>👥 Audience</h3><p>Provide context and limits.<br><span style="color:var(--text-muted);font-size:13px">"For a non-technical CEO…"</span></p>
        </div></div>
        <div class="accent-card"><div class="accent-bar gold"></div><div class="accent-content">
          <h3>❓ Question</h3><p>Provide clarity and specifics.<br><span style="color:var(--text-muted);font-size:13px">"Explain 3 benefits of…"</span></p>
        </div></div>
        <div class="accent-card"><div class="accent-bar terracotta"></div><div class="accent-content">
          <h3>🎯 Relevance</h3><p>Clarify the purpose.<br><span style="color:var(--text-muted);font-size:13px">"For our Q3 strategy meeting…"</span></p>
        </div></div>
        <div class="accent-card"><div class="accent-bar steel"></div><div class="accent-content">
          <h3>📋 Format</h3><p>Create structure.<br><span style="color:var(--text-muted);font-size:13px">"As a bullet list in 200 words…"</span></p>
        </div></div>
        <div class="accent-card"><div class="accent-bar navy"></div><div class="accent-content">
          <h3>📎 Sources / Constraints</h3><p>Clarify boundaries.<br><span style="color:var(--text-muted);font-size:13px">"Using only 2024 data…"</span></p>
        </div></div>
      </div>
    `
  },

  // ═══ MODULE 4: PART FRAMEWORK (Slides 35-41) ═══
  {
    section: '📘 Module 4: PART Framework',
    layout: 'layout-section-title',
    html: `
      <span class="module-number">04</span>
      <span class="section-badge mod4">Module 4 · 30 minutes</span>
      <h2>The PART Framework</h2>
      <p class="module-desc">A structured system for crafting effective prompts every time.</p>
    `
  },
  {
    section: '📘 Module 4: PART Framework',
    layout: 'layout-content animate-in',
    html: `
      <span class="section-badge mod4">Module 4</span>
      <h2>The Anatomy of a Perfect Prompt</h2>
      <div class="two-col two-col-img">
        <div class="part-stack">
          <div class="part-item p"><div class="letter">P</div><div class="part-info"><h4>1. P — Problem</h4><p>Define and detail the exact question or topic.</p></div></div>
          <div class="part-item a"><div class="letter">A</div><div class="part-info"><h4>2. A — Audience</h4><p>Define who the output is specifically for.</p></div></div>
          <div class="part-item r"><div class="letter">R</div><div class="part-info"><h4>3. R — Role</h4><p>Clarify the persona you need the AI to play.</p></div></div>
          <div class="part-item t"><div class="letter">T</div><div class="part-info"><h4>4. T — Template</h4><p>Determine the exact format or structure.</p></div></div>
          <div class="part-item s"><div class="letter">S</div><div class="part-info"><h4>5. S — Sharpen</h4><p>Identify specific details, constraints, and data sources.</p></div></div>
        </div>
        <img src="/images/ai_lightbulb.png" class="slide-image" alt="AI Lightbulb" />
      </div>
    `
  },
  {
    section: '📘 Module 4: PART Framework',
    layout: 'layout-content animate-in',
    html: `
      <span class="section-badge mod4">Module 4</span>
      <h2>Guidance Phrases for Each Part</h2>
      <div class="card-grid card-grid-2" style="max-width:900px">
        <div class="accent-card"><div class="accent-bar terracotta"></div><div class="accent-content"><h3 style="color:var(--terracotta)">P — Problem</h3><p style="font-family:var(--font-mono);font-size:13px">"I need to… provide 5 examples of / compare and contrast / generate alternatives for…"</p></div></div>
        <div class="accent-card"><div class="accent-bar sage"></div><div class="accent-content"><h3 style="color:var(--sage)">A — Audience</h3><p style="font-family:var(--font-mono);font-size:13px">"The audience will be… customer group / sales department / executive team…"</p></div></div>
        <div class="accent-card"><div class="accent-bar navy"></div><div class="accent-content"><h3 style="color:var(--navy)">R — Role</h3><p style="font-family:var(--font-mono);font-size:13px">"Play the role of a… business consultant / branding expert / HR advisor…"</p></div></div>
        <div class="accent-card"><div class="accent-bar gold"></div><div class="accent-content"><h3 style="color:var(--gold)">T — Template</h3><p style="font-family:var(--font-mono);font-size:13px">"Format the output… in 1000 words / in a bulleted list / as a business letter…"</p></div></div>
      </div>
      <div class="accent-card" style="max-width:900px;margin-top:10px"><div class="accent-bar steel"></div><div class="accent-content"><h3 style="color:var(--steel)">S — Sharpen</h3><p style="font-family:var(--font-mono);font-size:13px">"Fine tune by… limiting findings to 2024 data / narrowing scope to Asia-Pacific / providing 3 alternative versions…"</p></div></div>
    `
  },
  {
    section: '📘 Module 4: PART Framework',
    layout: 'layout-content animate-in',
    html: `
      <span class="section-badge mod4">Module 4</span>
      <h2>PART Breakdown: Live Example</h2>
      <div class="code-block" style="max-width:850px;font-size:15px;line-height:2">
        <span class="string">"As a <span class="variable">python developer</span>, Generate a code snippet of a function printing 'Hello, World'? Please <span class="variable">explain the code step-by-step</span>. Be <span class="variable">concise and professional</span> in your responses as you are discussing this with a <span class="variable">client</span>."</span>
      </div>
      <div class="card-grid card-grid-3" style="margin-top:20px;max-width:850px">
        <div class="accent-card"><div class="accent-bar terracotta"></div><div class="accent-content" style="padding:14px 18px"><p style="font-size:12px;color:var(--text-muted);margin-bottom:4px;font-weight:700">ROLE</p><p style="margin:0;font-size:14px;color:var(--terracotta)">Python developer</p></div></div>
        <div class="accent-card"><div class="accent-bar navy"></div><div class="accent-content" style="padding:14px 18px"><p style="font-size:12px;color:var(--text-muted);margin-bottom:4px;font-weight:700">PROBLEM</p><p style="margin:0;font-size:14px;color:var(--navy)">Generate 'Hello World' function</p></div></div>
        <div class="accent-card"><div class="accent-bar sage"></div><div class="accent-content" style="padding:14px 18px"><p style="font-size:12px;color:var(--text-muted);margin-bottom:4px;font-weight:700">TEMPLATE</p><p style="margin:0;font-size:14px;color:var(--sage)">Explain step-by-step</p></div></div>
        <div class="accent-card"><div class="accent-bar gold"></div><div class="accent-content" style="padding:14px 18px"><p style="font-size:12px;color:var(--text-muted);margin-bottom:4px;font-weight:700">AUDIENCE</p><p style="margin:0;font-size:14px;color:var(--gold)">Client (non-dev)</p></div></div>
        <div class="accent-card"><div class="accent-bar steel"></div><div class="accent-content" style="padding:14px 18px"><p style="font-size:12px;color:var(--text-muted);margin-bottom:4px;font-weight:700">SHARPEN</p><p style="margin:0;font-size:14px;color:var(--steel)">Concise + Professional tone</p></div></div>
      </div>
    `
  },
  {
    section: '📘 Module 4: PART Framework',
    layout: 'layout-content animate-in',
    html: `
      <span class="section-badge mod4">Module 4</span>
      <h2>PART vs. Other Frameworks</h2>
      <div class="two-col two-col-img" style="align-items:flex-start">
        <table class="comparison-table">
          <tr><th>Framework</th><th>Components</th><th>Best For</th></tr>
          <tr><td style="color:var(--sage)">PART(S)</td><td>Problem, Audience, Role, Template, Sharpen</td><td>General business prompts</td></tr>
          <tr><td style="color:var(--navy)">RISEN</td><td>Role, Instructions, Steps, End goal, Narrowing</td><td>Multi-step workflows</td></tr>
          <tr><td style="color:var(--terracotta)">CRAFT</td><td>Context, Role, Action, Format, Target</td><td>Content creation</td></tr>
          <tr><td style="color:var(--gold)">CO-STAR</td><td>Context, Objective, Style, Tone, Audience, Response</td><td>Creative writing</td></tr>
        </table>
        <div>
          <img src="/images/gears_ideas.png" class="slide-image" alt="Frameworks" style="max-width:280px" />
          <div class="highlight-box" style="margin-top:16px">
            <p style="margin:0;font-size:14px"><strong>They all share one principle:</strong> structure your prompt with context, clarity, and constraints. PART is our go-to because it's simple, memorable, and covers all bases.</p>
          </div>
        </div>
      </div>
    `
  },

  // ═══ GUIDED EXERCISE (Slides 42-44) ═══
  {
    section: '📘 Module 4: Guided Exercise',
    layout: 'layout-content animate-in',
    html: `
      <span class="section-badge mod4">Module 4</span>
      <h2>Guided Exercise: Build a Prompt</h2>
      <div class="glass-card" style="margin-bottom: 16px;">
        <p><strong>Scenario:</strong> You need to tell your team that the new software deployment is delayed by two weeks due to a critical bug found in testing. You want to keep morale high.</p>
      </div>
      <div class="card-grid card-grid-2">
        <div class="accent-card"><div class="accent-bar terracotta"></div><div class="accent-content" style="padding:16px"><strong style="color:var(--terracotta)">P (Problem)</strong>: Explain a 2-week software deployment delay due to a critical bug.</div></div>
        <div class="accent-card"><div class="accent-bar sage"></div><div class="accent-content" style="padding:16px"><strong style="color:var(--sage)">A (Audience)</strong>: Internal development and QA team.</div></div>
        <div class="accent-card"><div class="accent-bar navy"></div><div class="accent-content" style="padding:16px"><strong style="color:var(--navy)">R (Role)</strong>: Empathetic Project Manager.</div></div>
        <div class="accent-card"><div class="accent-bar gold"></div><div class="accent-content" style="padding:16px"><strong style="color:var(--gold)">T (Template)</strong>: A short, encouraging Slack message.</div></div>
      </div>
      <div class="accent-card" style="margin-top:12px"><div class="accent-bar steel"></div><div class="accent-content" style="padding:16px"><strong style="color:var(--steel)">S (Sharpen)</strong>: Highlight that finding the bug now is a win, keep tone positive.</div></div>
    `
  },
  {
    section: '📘 Module 4: Guided Exercise',
    layout: 'layout-content animate-in',
    html: `
      <span class="section-badge mod4">Module 4</span>
      <h2>The Resulting Prompt</h2>
      <div class="two-col two-col-img">
        <div class="callout" style="max-width:100%">
          <p style="font-family:var(--font-mono);font-size:16px;line-height:1.6">
            <span style="color:var(--navy);font-weight:700">[Role]</span> Act as an empathetic Project Manager. <br><br>
            <span style="color:var(--terracotta);font-weight:700">[Problem]</span> Write a message explaining that our new software deployment is delayed by two weeks because we found a critical bug in final testing.<br><br>
            <span style="color:var(--sage);font-weight:700">[Audience]</span> Address this to the internal development and QA team.<br><br>
            <span style="color:var(--gold);font-weight:700">[Template]</span> Format this as a short, encouraging Slack message.<br><br>
            <span style="color:var(--steel);font-weight:700">[Sharpen]</span> Frame finding the bug now as a massive win for the team and keep the overall morale high.
          </p>
        </div>
        <img src="/images/ai_lightbulb.png" class="slide-image" alt="AI Outcome" />
      </div>
    `
  },
  {
    section: '📘 Module 4: Practice',
    layout: 'layout-content animate-in',
    html: `
      <span class="section-badge mod4">Module 4</span>
      <h2>Your Turn: Practice Scenarios</h2>
      <p>Pick ONE scenario. Take 3 minutes to write a prompt using the <strong>PART</strong> framework.</p>
      <div class="card-grid card-grid-3" style="margin-top:16px">
        <div class="accent-card"><div class="accent-bar navy"></div><div class="accent-content">
          <h3 style="color:var(--navy)">Scenario 1: Sales</h3>
          <p style="font-size:14px;margin-top:8px">A potential client asked for a summary of your cybersecurity product's features. They are not very technical.</p>
        </div></div>
        <div class="accent-card"><div class="accent-bar terracotta"></div><div class="accent-content">
          <h3 style="color:var(--terracotta)">Scenario 2: HR</h3>
          <p style="font-size:14px;margin-top:8px">You need to reject a job candidate who made it to the final round but wasn't selected, while encouraging them to apply again later.</p>
        </div></div>
        <div class="accent-card"><div class="accent-bar sage"></div><div class="accent-content">
          <h3 style="color:var(--sage)">Scenario 3: Engineering</h3>
          <p style="font-size:14px;margin-top:8px">You need to document a complex new API endpoint you just created so the frontend team can start using it.</p>
        </div></div>
      </div>
    `
  },

  // ═══ GAME 2: BUILD THE PERFECT PROMPT (Slides 45-46) ═══
  {
    section: '🎮 Game: Perfect Prompt',
    layout: 'layout-content animate-in',
    html: `
      <span class="section-badge game">🎮 Game Time!</span>
      <h2>Build the Perfect Prompt</h2>
      <p>You'll see a <em>bad prompt</em>. Your mission: rewrite it using the <strong>PART framework</strong>!</p>
      <div class="prompt-editor" style="margin-top:16px">
        <label>❌ The Bad Prompt</label>
        <div class="bad-prompt" id="bad-prompt-text">Tell me about marketing.</div>
        <label style="margin-top:16px">✍️ Your Improved Prompt (use PART!)</label>
        <textarea placeholder="Write your improved prompt here... Think: Problem, Audience, Role, Template, Sharpen"></textarea>
        <div style="display:flex;gap:8px;margin-top:12px">
          <button class="spin-btn" id="reveal-answer-btn" style="font-size:14px;padding:10px 24px">💡 Reveal Example Answer</button>
          <button class="timer-btn" id="next-bad-prompt">Next Prompt →</button>
        </div>
        <div class="code-block" id="improved-answer" style="display:none;margin-top:16px;border-left:3px solid var(--sage)"></div>
      </div>
    `,
    onEnter: () => {
      import('./games.js').then(m => m.initPromptBuilder());
    }
  },

  // ═══ MODULE 5: ADVANCED TECHNIQUES (Slides 44-50) ═══
  {
    section: '📘 Module 5: Advanced',
    layout: 'layout-section-title',
    html: `
      <span class="module-number">05</span>
      <span class="section-badge mod5">Module 5 · 25 minutes</span>
      <h2>Advanced Prompting Techniques</h2>
      <p class="module-desc">Level up: types of prompts, shot techniques, and chain of thought.</p>
    `
  },
  {
    section: '📘 Module 5: Prompt Types',
    layout: 'layout-content animate-in',
    html: `
      <span class="section-badge mod5">Module 5</span>
      <h2>Four Archetypes of Foundational Prompts</h2>
      <div class="two-col" style="gap:16px;margin-top:16px">
        <div class="accent-card"><div class="accent-bar navy"></div><div class="accent-content" style="padding:16px">
          <h3 style="color:var(--navy);font-size:18px">🌊 Open-ended</h3>
          <p style="font-size:13px;margin:4px 0 8px"><strong>Goal:</strong> Broad exploration and brainstorming.</p>
          <p style="font-size:13px;color:var(--navy);font-weight:600;margin-bottom:6px">Guidelines: Give the AI creative freedom but set a topic and tone.</p>
          <div class="speech-bubble navy" style="font-size:12px;padding:8px;margin-bottom:4px">"Generate 5 unconventional marketing ideas for a new coffee shop."</div>
          <div class="speech-bubble navy" style="font-size:12px;padding:8px">"Write a sci-fi story about a robot learning to paint."</div>
        </div></div>
        
        <div class="accent-card"><div class="accent-bar sage"></div><div class="accent-content" style="padding:16px">
          <h3 style="color:var(--sage);font-size:18px">🔒 Closed</h3>
          <p style="font-size:13px;margin:4px 0 8px"><strong>Goal:</strong> Seeking specific facts or constrained answers.</p>
          <p style="font-size:13px;color:var(--sage);font-weight:600;margin-bottom:6px">Guidelines: Ask direct questions. Tell it to say 'I don't know' if unsure.</p>
          <div class="speech-bubble sage" style="font-size:12px;padding:8px;margin-bottom:4px">"What is the exact population of Tokyo as of 2024?"</div>
          <div class="speech-bubble sage" style="font-size:12px;padding:8px">"Translate 'Where is the train station?' into Japanese."</div>
        </div></div>

        <div class="accent-card"><div class="accent-bar terracotta"></div><div class="accent-content" style="padding:16px">
          <h3 style="color:var(--terracotta);font-size:18px">🔀 Conditional</h3>
          <p style="font-size:13px;margin:4px 0 8px"><strong>Goal:</strong> Rule-based generation or routing.</p>
          <p style="font-size:13px;color:var(--terracotta);font-weight:600;margin-bottom:6px">Guidelines: Use IF/THEN logic. Define the triggers and expected outcomes.</p>
          <div class="speech-bubble terracotta" style="font-size:12px;padding:8px;margin-bottom:4px">"If the email is angry, draft an apology. If happy, say thanks."</div>
          <div class="speech-bubble terracotta" style="font-size:12px;padding:8px">"Classify this review: If tech issue, tag IT. If billing, tag Finance."</div>
        </div></div>

        <div class="accent-card"><div class="accent-bar gold"></div><div class="accent-content" style="padding:16px">
          <h3 style="color:var(--gold);font-size:18px">📖 Contextual</h3>
          <p style="font-size:13px;margin:4px 0 8px"><strong>Goal:</strong> Bounded by specific provided data/parameters.</p>
          <p style="font-size:13px;color:var(--gold);font-weight:600;margin-bottom:6px">Guidelines: Provide the source text. Say 'Only use the provided text'.</p>
          <div class="speech-bubble gold" style="font-size:12px;padding:8px;margin-bottom:4px">"Based ONLY on the meeting notes below, list the action items."</div>
          <div class="speech-bubble gold" style="font-size:12px;padding:8px">"Using this Q3 report, write a 2-paragraph summary for the CEO."</div>
        </div></div>
      </div>
    `
  },
  {
    section: '📘 Module 5: Prompt Types',
    layout: 'layout-content animate-in',
    html: `
      <span class="section-badge mod5">Module 5</span>
      <h2>Archetype Deep Dive: When to use which?</h2>
      <div class="two-col" style="margin-top:12px">
        <div>
          <div class="glass-card" style="padding:24px;margin-bottom:12px;border-left:4px solid var(--navy)">
            <h3 style="color:var(--navy);font-size:18px">🌊 Open-ended</h3>
            <p style="font-size:14px;margin-top:4px"><strong>Best for:</strong> Brainstorming, creative writing, exploring new ideas.</p>
            <p style="font-size:13px;color:var(--text-muted);margin-top:6px;font-family:var(--font-mono)">"Give me 10 ideas for a team building event."</p>
          </div>
          <div class="glass-card" style="padding:24px;margin-bottom:12px;border-left:4px solid var(--sage)">
            <h3 style="color:var(--sage);font-size:18px">🔒 Closed</h3>
            <p style="font-size:14px;margin-top:4px"><strong>Best for:</strong> Fact retrieval, definitions, translations.</p>
            <p style="font-size:13px;color:var(--text-muted);margin-top:6px;font-family:var(--font-mono)">"What is the formula for compound interest?"</p>
          </div>
        </div>
        <div>
          <div class="glass-card" style="padding:24px;margin-bottom:12px;border-left:4px solid var(--terracotta)">
            <h3 style="color:var(--terracotta);font-size:18px">🔀 Conditional</h3>
            <p style="font-size:14px;margin-top:4px"><strong>Best for:</strong> Workflows, data classification, decision matrices.</p>
            <p style="font-size:13px;color:var(--text-muted);margin-top:6px;font-family:var(--font-mono)">"If the sentiment is positive, tag as 'yay', else tag as 'nay'."</p>
          </div>
          <div class="glass-card" style="padding:24px;margin-bottom:12px;border-left:4px solid var(--gold)">
            <h3 style="color:var(--gold);font-size:18px">📖 Contextual</h3>
            <p style="font-size:14px;margin-top:4px"><strong>Best for:</strong> Document summarization, style matching.</p>
            <p style="font-size:13px;color:var(--text-muted);margin-top:6px;font-family:var(--font-mono)">"Using the text provided below, write a 2 sentence summary."</p>
          </div>
        </div>
      </div>
    `
  },
  {
    section: '📘 Module 5: Practice',
    layout: 'layout-content animate-in',
    html: `
      <span class="section-badge mod5">Module 5</span>
      <h2>Exercise: Name That Archetype!</h2>
      <p>Read the prompt and shout out which of the 4 archetypes it is.</p>
      
      <div class="card-grid card-grid-2" style="margin-top:20px">
        <div class="accent-card">
          <div class="accent-bar steel"></div>
          <div class="accent-content" style="padding:24px">
            <h3 style="color:var(--text-muted);font-size:14px;margin-bottom:12px">PROMPT 1</h3>
            <p style="font-family:var(--font-heading);font-size:18px;line-height:1.4">"Summarize the following email thread about the Q3 budget into three bullet points."</p>
            <p style="font-size:14px;color:var(--gold);margin-top:16px;font-weight:700">Answer: Contextual (Relies on specific provided text)</p>
          </div>
        </div>
        
        <div class="accent-card">
          <div class="accent-bar steel"></div>
          <div class="accent-content" style="padding:24px">
            <h3 style="color:var(--text-muted);font-size:14px;margin-bottom:12px">PROMPT 2</h3>
            <p style="font-family:var(--font-heading);font-size:18px;line-height:1.4">"Review these support tickets. If the issue is billing, route to finance. If technical, route to IT."</p>
            <p style="font-size:14px;color:var(--terracotta);margin-top:16px;font-weight:700">Answer: Conditional (Rule-based routing)</p>
          </div>
        </div>

        <div class="accent-card">
          <div class="accent-bar steel"></div>
          <div class="accent-content" style="padding:24px">
            <h3 style="color:var(--text-muted);font-size:14px;margin-bottom:12px">PROMPT 3</h3>
            <p style="font-family:var(--font-heading);font-size:18px;line-height:1.4">"What are some interesting ways to market a new pet rock in 2024?"</p>
            <p style="font-size:14px;color:var(--navy);margin-top:16px;font-weight:700">Answer: Open-Ended (Brainstorming/Creative)</p>
          </div>
        </div>

        <div class="accent-card">
          <div class="accent-bar steel"></div>
          <div class="accent-content" style="padding:24px">
            <h3 style="color:var(--text-muted);font-size:14px;margin-bottom:12px">PROMPT 4</h3>
            <p style="font-family:var(--font-heading);font-size:18px;line-height:1.4">"What is the exact population of Tokyo as of the most recent census?"</p>
            <p style="font-size:14px;color:var(--sage);margin-top:16px;font-weight:700">Answer: Closed (Fact retrieval)</p>
          </div>
        </div>
      </div>
    `
  },
  {
    section: '📘 Module 5: Practice',
    layout: 'layout-content animate-in',
    html: `
      <span class="section-badge mod5">Module 5</span>
      <h2>Exercise: Write the Archetypes</h2>
      <p>Take 4 minutes to focus on a single task: <strong>Planning a Meeting</strong>.</p>
      <div class="glass-card" style="margin-top:12px;margin-bottom:20px;padding:24px;border-left:4px solid var(--terracotta)">
        <p style="font-size:18px;font-weight:700;margin-bottom:8px">Your Mission:</p>
        <p>Write <strong>four distinct prompts</strong> for planning a meeting — one representing each archetype.</p>
      </div>
      <div class="two-col" style="margin-top:16px;gap:20px">
        <div>
          <div style="margin-bottom:12px"><strong style="color:var(--navy)">1. Open-Ended:</strong> Ask the AI to brainstorm or explore the task broadly.</div>
          <div style="margin-bottom:12px"><strong style="color:var(--sage)">2. Closed:</strong> Ask the AI a specific, factual question about the task.</div>
        </div>
        <div>
          <div style="margin-bottom:12px"><strong style="color:var(--terracotta)">3. Conditional:</strong> Give the AI a rule to follow when completing the task.</div>
          <div style="margin-bottom:12px"><strong style="color:var(--gold)">4. Contextual:</strong> Provide the AI with specific text/data to base the task on.</div>
        </div>
      </div>
      <div class="highlight-box" style="margin-top:20px">
        <p style="margin:0;font-size:14px">Be ready to share your favorite prompt with the group!</p>
      </div>
    `
  },
  {
    section: '📘 Module 5: Practice',
    layout: 'layout-content animate-in',
    html: `
      <span class="section-badge mod5">Module 5</span>
      <h2>Sample Answers: "Planning a Meeting"</h2>
      <p>Here is what the four archetypes look like for a single task.</p>
      <div class="two-col" style="gap:16px;margin-top:24px">
        <div class="accent-card"><div class="accent-bar navy"></div><div class="accent-content" style="padding:16px">
          <h3 style="color:var(--navy);font-size:16px">🌊 Open-ended</h3>
          <p style="font-family:var(--font-mono);font-size:14px;color:var(--text-dark);line-height:1.5;margin-top:8px">"What are some creative ways to make our weekly team sync more engaging and less boring?"</p>
        </div></div>
        <div class="accent-card"><div class="accent-bar sage"></div><div class="accent-content" style="padding:16px">
          <h3 style="color:var(--sage);font-size:16px">🔒 Closed</h3>
          <p style="font-family:var(--font-mono);font-size:14px;color:var(--text-dark);line-height:1.5;margin-top:8px">"What is the standard duration for a daily stand-up meeting in Agile methodology?"</p>
        </div></div>
        <div class="accent-card"><div class="accent-bar terracotta"></div><div class="accent-content" style="padding:16px">
          <h3 style="color:var(--terracotta);font-size:16px">🔀 Conditional</h3>
          <p style="font-family:var(--font-mono);font-size:14px;color:var(--text-dark);line-height:1.5;margin-top:8px">"If there are fewer than 3 agenda items, draft an email canceling the sync. Otherwise, draft the meeting invite."</p>
        </div></div>
        <div class="accent-card"><div class="accent-bar gold"></div><div class="accent-content" style="padding:16px">
          <h3 style="color:var(--gold);font-size:16px">📖 Contextual</h3>
          <p style="font-family:var(--font-mono);font-size:14px;color:var(--text-dark);line-height:1.5;margin-top:8px">"Using the rough notes I pasted below, organize them into a formal meeting agenda with time slots."</p>
        </div></div>
      </div>
    `
  },
  {
    section: '📘 Module 5: Practice',
    layout: 'layout-content animate-in',
    html: `
      <span class="section-badge mod5">Module 5</span>
      <h2>Your Turn: Write Your Own!</h2>
      <div class="two-col two-col-img" style="margin-top:16px">
        <div>
          <div class="glass-card">
            <h3 style="font-size:18px;color:var(--text-dark);margin-bottom:8px">Pick one task you do every week:</h3>
            <ul style="padding-left:20px;margin-bottom:0">
              <li>Writing a specific type of report</li>
              <li>Responding to customer inquiries</li>
              <li>Planning out a project sprint</li>
              <li>Summarizing research or meeting notes</li>
            </ul>
          </div>
          <div class="glass-card" style="margin-top:20px;border-left:4px solid var(--gold);background:rgba(235,186,60,0.1)">
            <h3 style="color:var(--gold);font-size:20px;margin-bottom:8px">Instruction</h3>
            <p style="margin:0;font-size:18px;font-weight:700">Write a distinct prompt for <u>ALL FOUR</u> archetypes for your chosen task.</p>
          </div>
          <p style="margin-top:20px;font-size:14px;color:var(--text-muted)">⏳ You have 5 minutes. We will share out our best examples afterward!</p>
          
          <button class="spin-btn" id="toggle-example-btn" style="margin-top:20px;font-size:14px;padding:8px 16px" onclick="const ans=document.getElementById('challenge-answer'); if(ans.style.display==='none'){ans.style.display='block';this.innerHTML='🙈 Hide Example';}else{ans.style.display='none';this.innerHTML='💡 Stuck? Reveal an Example';}">💡 Stuck? Reveal an Example</button>
          
          <div id="challenge-answer" style="display:none;margin-top:16px" class="glass-card">
            <p style="font-weight:700;color:var(--navy);margin-bottom:8px;font-size:14px">Example: Responding to Inquiries</p>
            <ul style="font-size:13px;padding-left:16px;margin:0;color:var(--text-dark);line-height:1.4">
              <li><strong>🌊 Open:</strong> "Draft 3 friendly ways to tell a customer their order is delayed."</li>
              <li><strong>🔒 Closed:</strong> "What is our standard SLA for responding to angry customers?"</li>
              <li><strong>🔀 Cond:</strong> "If the customer asks for a refund, use the 'Apology' template. Otherwise, use 'Standard'."</li>
              <li><strong>📖 Cont:</strong> "Using the policy document below, draft a response explaining why we cannot accept this return."</li>
            </ul>
          </div>
        </div>
        <img src="/images/gears_ideas.png" class="slide-image" alt="Writing Ideas" style="max-height:300px" />
      </div>
    `
  },
  {
    section: '📘 Module 5: Zero-Shot',
    layout: 'layout-content animate-in',
    html: `
      <span class="section-badge mod5">Module 5</span>
      <h2>Zero-Shot Prompting</h2>
      <div class="two-col two-col-img" style="margin-top:20px;gap:24px">
        <div>
          <div class="glass-card" style="border-left:4px solid var(--navy)">
            <h3 style="color:var(--navy);font-size:18px;margin-bottom:8px">Why use it?</h3>
            <p style="font-size:14px;margin-bottom:0;color:var(--text-dark)">For simple, straightforward tasks where the AI already has enough general knowledge to succeed without any examples.</p>
          </div>
          <div class="glass-card" style="border-left:4px solid var(--purple);margin-top:16px">
            <h3 style="color:var(--purple);font-size:18px;margin-bottom:8px">Integration with PART</h3>
            <p style="font-size:14px;margin-bottom:0;color:var(--text-dark)">Zero-shot relies entirely on your <strong>Problem</strong>, <strong>Role</strong>, and <strong>Instructions</strong> being instantly clear. If your setup is vague, Zero-Shot will fail.</p>
          </div>
          <div class="highlight-box" style="margin-top:16px;border-color:var(--gold)">
            <p style="margin:0;font-size:14px;color:var(--gold);font-weight:700">Best for: Brainstorming, summarization, and general Q&A.</p>
          </div>
        </div>
        <div>
          <h3 style="font-size:16px;margin-bottom:12px;color:var(--text-muted)">Example (No hints given to AI):</h3>
          <div class="code-block" style="font-size:13px;padding:20px;line-height:1.5">
            <strong>Role:</strong> Act as an expert marketer.<br>
            <strong>Problem:</strong> I need a tagline for a new coffee brand called 'Awake'.<br>
            <strong>Template:</strong> Provide 5 catchy taglines.<br>
            <em>(AI generates output immediately)</em>
          </div>
        </div>
      </div>
    `
  },
  {
    section: '📘 Module 5: One-Shot',
    layout: 'layout-content animate-in',
    html: `
      <span class="section-badge mod5">Module 5</span>
      <h2>One-Shot Prompting</h2>
      <div class="two-col" style="margin-top:16px;gap:24px">
        <div>
          <div class="glass-card" style="border-left:4px solid var(--sage)">
            <h3 style="color:var(--sage);font-size:18px;margin-bottom:8px">Why use it?</h3>
            <p style="font-size:14px;margin-bottom:0;color:var(--text-dark)">When you need the AI to match a very specific <strong>format</strong>, <strong>tone</strong>, or <strong>structure</strong> that is hard to describe with just instructions.</p>
          </div>
          <div class="glass-card" style="border-left:4px solid var(--purple);margin-top:16px">
            <h3 style="color:var(--purple);font-size:18px;margin-bottom:8px">Integration with PART</h3>
            <p style="font-size:14px;margin-bottom:0;color:var(--text-dark)">One-Shot acts as the ultimate <strong>Template (T)</strong>. Instead of explaining the template, you literally show one perfect example of the expected output.</p>
          </div>
        </div>
        <div>
          <div class="code-block" style="font-size:13px;padding:20px;line-height:1.5">
            <strong>[PART Instructions...]</strong> Convert customer reviews into sentiment scores.<br><br>
            <strong>Example 1 (The 'One Shot'):</strong><br>
            Review: "The app crashed twice today." -> Sentiment: NEGATIVE<br><br>
            <strong>Now do this one:</strong><br>
            Review: "I love the new UI update!" -> Sentiment: <span class="comment">█</span>
          </div>
        </div>
      </div>
    `
  },
  {
    section: '📘 Module 5: Practice',
    layout: 'layout-content animate-in',
    html: `
      <span class="section-badge mod5">Module 5</span>
      <h2>Your Turn: Zero vs. One-Shot</h2>
      <div class="two-col" style="margin-top:16px;gap:20px">
        <div>
          <div class="glass-card" style="border-left:4px solid var(--navy)">
            <h3 style="color:var(--navy);font-size:18px;margin-bottom:8px">Challenge 1: Zero-Shot</h3>
            <p style="font-size:14px;margin-bottom:12px">Task: Write a prompt to ask the AI to translate a sentence from English to French.</p>
            <p style="font-size:14px;font-weight:700">Write a Zero-Shot prompt using PART elements.</p>
          </div>
          <button class="spin-btn" style="margin-top:16px;font-size:13px;padding:8px 16px" onclick="document.getElementById('zs-ans').style.display='block'; this.style.display='none'">💡 Show Example</button>
          <div id="zs-ans" style="display:none;margin-top:12px;font-family:var(--font-mono);font-size:12px;padding:12px;background:var(--bg-card);border:1px solid rgba(0,0,0,0.1);border-radius:6px">
            "You are a fluent translator. Translate the following English text into formal French: 'Where is the library?'"
          </div>
        </div>
        <div>
          <div class="glass-card" style="border-left:4px solid var(--sage)">
            <h3 style="color:var(--sage);font-size:18px;margin-bottom:8px">Challenge 2: One-Shot</h3>
            <p style="font-size:14px;margin-bottom:12px">Task: Translate to French, but output in JSON format: {"original": "...", "translated": "..."}</p>
            <p style="font-size:14px;font-weight:700">Write a One-Shot prompt replacing the Template text with an example.</p>
          </div>
          <button class="spin-btn" style="margin-top:16px;font-size:13px;padding:8px 16px" onclick="document.getElementById('os-ans').style.display='block'; this.style.display='none'">💡 Show Example</button>
          <div id="os-ans" style="display:none;margin-top:12px;font-family:var(--font-mono);font-size:12px;padding:12px;background:var(--bg-card);border:1px solid rgba(0,0,0,0.1);border-radius:6px">
            "Translate English to French.<br>
            Input: 'Hello'<br>
            Output: {'original': 'Hello', 'translated': 'Bonjour'}<br><br>
            Input: 'Where is the library?'<br>
            Output: "
          </div>
        </div>
      </div>
    `
  },
  {
    section: '📘 Module 5: Few-Shot',
    layout: 'layout-content animate-in',
    html: `
      <span class="section-badge mod5">Module 5</span>
      <h2>Few-Shot Prompting</h2>
      <div class="two-col" style="margin-top:16px;gap:24px">
        <div>
          <div class="glass-card" style="border-left:4px solid var(--terracotta)">
            <h3 style="color:var(--terracotta);font-size:18px;margin-bottom:8px">Why use it?</h3>
            <p style="font-size:14px;margin-bottom:0;color:var(--text-dark)">Provide 3-5 examples to teach the model a complex, nuanced <strong>pattern</strong> or classification logic that cannot be easily explained in words alone.</p>
          </div>
          <div class="glass-card" style="border-left:4px solid var(--purple);margin-top:16px">
            <h3 style="color:var(--purple);font-size:18px;margin-bottom:8px">Integration with PART</h3>
            <p style="font-size:14px;margin-bottom:0;color:var(--text-dark)">Replaces long, confusing <strong>Action/Template</strong> rules with clear demonstrations. Great for establishing a strict <strong>Tone (Audience/Role)</strong> across different inputs.</p>
          </div>
        </div>
        <div>
          <div class="code-block" style="font-size:13px;padding:20px;line-height:1.5">
            <strong>[PART Setup...]</strong> Classify the urgency of IT tickets.<br><br>
            Ticket: "Printer jammed." -> Urgency: LOW<br>
            Ticket: "Server crashed, whole company offline!" -> Urgency: CRITICAL<br>
            Ticket: "Need a new mouse." -> Urgency: LOW<br>
            Ticket: "CEO can't access email." -> Urgency: HIGH<br><br>
            Ticket: "Wi-Fi is down on the 3rd floor." -> Urgency: <span class="comment">█</span>
          </div>
        </div>
      </div>
    `
  },
  {
    section: '📘 Module 5: Chain of Thought',
    layout: 'layout-content animate-in',
    html: `
      <span class="section-badge mod5">Module 5</span>
      <h2>Chain of Thought (CoT)</h2>
      <div class="two-col" style="margin-top:16px;gap:24px">
        <div>
          <div class="glass-card" style="border-left:4px solid var(--gold)">
            <h3 style="color:var(--gold);font-size:18px;margin-bottom:8px">Why use it?</h3>
            <p style="font-size:14px;margin-bottom:0;color:var(--text-dark)">Forces the AI to print out its internal reasoning steps. This significantly reduces math/logic errors and prevents hallucinated conclusions.</p>
          </div>
          <div class="glass-card" style="border-left:4px solid var(--purple);margin-top:16px">
            <h3 style="color:var(--purple);font-size:18px;margin-bottom:8px">Integration with PART</h3>
            <p style="font-size:14px;margin-bottom:0;color:var(--text-dark)">Use it as the ultimate <strong>Sharpen (S)</strong> technique. Simply append the phrase <em>"Explain your reasoning step by step before answering"</em> to the end of any complex PART prompt.</p>
          </div>
        </div>
        <div>
          <h3 style="font-size:16px;margin-bottom:12px;color:var(--text-muted)">Analysis Example</h3>
          <div class="code-block" style="font-size:13px;padding:20px;line-height:1.5">
            <strong>Prompt:</strong> "Evaluate this contract. <strong>Think step by step before giving a final rating.</strong>"<br><br>
            <strong>AI Output:</strong><br>
            <span style="color:var(--text-muted)">
            Step 1: The contract lacks a termination clause.<br>
            Step 2: The liability cap is extremely high ($10M).<br>
            Step 3: Missing confidentiality terms.</span><br>
            <strong>Conclusion: Risk Rating is HIGH.</strong>
          </div>
        </div>
      </div>
    `
  },
  {
    section: '📘 Module 5: Practice',
    layout: 'layout-content animate-in',
    html: `
      <span class="section-badge mod5">Module 5</span>
      <h2>Your Turn: Shot Techniques & CoT</h2>
      <div class="two-col" style="margin-top:16px;gap:20px">
        <div>
          <div class="glass-card" style="border-left:4px solid var(--navy)">
            <h3 style="color:var(--navy);font-size:18px;margin-bottom:8px">Challenge 1: Few-Shot</h3>
            <p style="font-size:14px;margin-bottom:12px">Task: You want the AI to extract Company Names and Stock Tickers from news headlines.</p>
            <p style="font-size:14px;font-weight:700">Write a Few-Shot prompt providing exactly 3 examples of this formatting.</p>
          </div>
          <button class="spin-btn" style="margin-top:16px;font-size:13px;padding:8px 16px" onclick="document.getElementById('few-shot-ans').style.display='block'; this.style.display='none'">💡 Show Example</button>
          <div id="few-shot-ans" style="display:none;margin-top:12px;font-family:var(--font-mono);font-size:12px;padding:12px;background:var(--bg-card);border:1px solid rgba(0,0,0,0.1);border-radius:6px">
            Headline: Apple releases new iPhone -> Apple (AAPL)<br>
            Headline: Microsoft acquires gaming studio -> Microsoft (MSFT)<br>
            Headline: Tesla stock surges -> Tesla (TSLA)<br>
            Headline: Alphabet announces earnings ->
          </div>
        </div>
        <div>
          <div class="glass-card" style="border-left:4px solid var(--gold)">
            <h3 style="color:var(--gold);font-size:18px;margin-bottom:8px">Challenge 2: Chain of Thought</h3>
            <p style="font-size:14px;margin-bottom:12px">Task: You need the AI to decide if a customer is eligible for a refund based on a complex 4-rule policy.</p>
            <p style="font-size:14px;font-weight:700">Write the instructional ending of this prompt to enforce CoT.</p>
          </div>
          <button class="spin-btn" style="margin-top:16px;font-size:13px;padding:8px 16px" onclick="document.getElementById('cot-ans').style.display='block'; this.style.display='none'">💡 Show Example</button>
          <div id="cot-ans" style="display:none;margin-top:12px;font-family:var(--font-mono);font-size:12px;padding:12px;background:var(--bg-card);border:1px solid rgba(0,0,0,0.1);border-radius:6px">
            "Before giving your final Yes/No decision, explain your reasoning step-by-step. Go through each of the 4 policy rules and evaluate if the customer meets it."
          </div>
        </div>
      </div>
    `
  },
  {
    section: '📘 Module 5: Practice',
    layout: 'layout-content animate-in',
    html: `
      <span class="section-badge mod5">Module 5</span>
      <h2>Exercise: The Shot Evolution</h2>
      <p style="margin-bottom:12px;font-size:16px">To truly understand the difference between the baseline techniques, let's apply all four to a single task.</p>
      
      <div class="glass-card" style="border-left:4px solid var(--purple)">
        <h3 style="color:var(--purple);font-size:18px;margin-bottom:8px">🎯 The Scenario</h3>
        <p style="font-size:15px;color:var(--text-dark)">You are building an AI tool to automatically categorize incoming support tickets as either a <strong>Bug Report</strong>, a <strong>Feature Request</strong>, or a <strong>Billing Issue</strong>.</p>
        <p style="font-size:14px;color:var(--text-dark);margin-top:8px;font-weight:600">Write 4 separate prompts for this exact same task:</p>
        <div class="card-grid card-grid-2" style="margin-top:12px;gap:12px">
          <div style="background:rgba(255,255,255,0.5);padding:10px;border-radius:4px;font-size:13px"><strong>1. Zero-Shot:</strong> Just the instructions.</div>
          <div style="background:rgba(255,255,255,0.5);padding:10px;border-radius:4px;font-size:13px"><strong>2. One-Shot:</strong> Instructions + 1 clear example.</div>
          <div style="background:rgba(255,255,255,0.5);padding:10px;border-radius:4px;font-size:13px"><strong>3. Few-Shot:</strong> Instructions + 3 diverse examples.</div>
          <div style="background:rgba(255,255,255,0.5);padding:10px;border-radius:4px;font-size:13px"><strong>4. Chain of Thought:</strong> Ask the AI to reason out the category.</div>
        </div>
      </div>
      
      <div class="highlight-box" style="margin-top:16px;border-color:var(--gold)">
        <p style="margin:0;font-size:14px;font-weight:700">⏳ Take 5 minutes. Compare how the prompt structure changes as you move from Zero-Shot up to CoT!</p>
      </div>
    `
  },
  {
    section: '📘 Module 5: Practice',
    layout: 'layout-content animate-in',
    html: `
      <span class="section-badge mod5">Module 5</span>
      <h2>Bringing It All Together</h2>
      <p style="margin-bottom:16px">We've learned <strong>Archetypes</strong>, the <strong>PART Framework</strong>, and <strong>Shot/CoT Strategies</strong>. Now combine them!</p>
      
      <div class="glass-card" style="border-left:4px solid var(--magenta)">
        <h3 style="color:var(--magenta);font-size:20px;margin-bottom:8px">🏆 The Ultimate Prompt Challenge</h3>
        <p style="font-size:16px;color:var(--text-dark)"><strong>Scenario:</strong> You are launching a new internal tool at your company. You need to write an announcement email to the team.</p>
        <ul style="font-size:15px;margin-top:12px;margin-bottom:0;color:var(--text-dark)">
          <li style="margin-bottom:6px"><strong>Requirement 1:</strong> Use the <strong>PART</strong> framework (Define Role, Audience, Action, Template).</li>
          <li style="margin-bottom:6px"><strong>Requirement 2:</strong> Use a <strong>Contextual Archetype</strong> (Provide some bullet points about the tool's features to base the email on).</li>
          <li style="margin-bottom:6px"><strong>Requirement 3:</strong> Use <strong>One-Shot</strong> OR <strong>Few-Shot</strong> to ensure the tone is excited but professional.</li>
        </ul>
      </div>
      
      <div class="highlight-box" style="margin-top:20px;border-color:var(--navy);background:rgba(67,97,238,0.1)">
        <p style="margin:0;font-size:14px;font-weight:700">⏳ Time: 8 minutes. We will share these as a group. The best prompt wins bragging rights!</p>
      </div>
    `
  },
  {
    section: '📘 Module 5: API Integration',
    layout: 'layout-content animate-in',
    html: `
      <span class="section-badge mod5">Module 5</span>
      <h2>Beyond Chat: API Integration</h2>
      <div class="two-col">
        <div>
          <p style="margin-bottom:16px">Prompt engineering isn't limited to chat interfaces. It's integrated into development pipelines via APIs to power applications.</p>
          <div class="card-grid card-grid-2">
            <div class="accent-card"><div class="accent-bar navy"></div><div class="accent-content"><strong style="color:var(--navy)">Vertex AI</strong><br><span style="font-size:13px;color:var(--text-muted)">Google Cloud Models</span></div></div>
            <div class="accent-card"><div class="accent-bar sage"></div><div class="accent-content"><strong style="color:var(--sage)">OpenAI API</strong><br><span style="font-size:13px;color:var(--text-muted)">GPT-4 Integration</span></div></div>
          </div>
          <div class="highlight-box" style="margin-top:16px">
            <p style="margin:0"><strong>The takeaway:</strong> The prompting principles you learned today apply exactly the same when writing code.</p>
          </div>
        </div>
        <div class="code-block" style="margin:0;font-size:12px;padding:24px">
          <span class="keyword">import</span> <span class="variable">vertexai</span><br>
          <span class="keyword">from</span> <span class="variable">vertexai.generative_models</span> <span class="keyword">import</span> <span class="function">GenerativeModel</span><br><br>
          <span class="comment"># Initialize the environment</span><br>
          <span class="variable">vertexai</span>.<span class="function">init</span>(<span class="variable">project</span>=<span class="string">"YOUR_PROJECT_ID"</span>)<br><br>
          <span class="variable">prompt</span> = <span class="string">"Write a story about a magic backpack."</span><br><br>
          <span class="variable">model</span> = <span class="function">GenerativeModel</span>(<span class="string">"gemini-pro"</span>)<br>
          <span class="variable">responses</span> = <span class="variable">model</span>.<span class="function">generate_content</span>(<span class="variable">prompt</span>, <span class="variable">stream</span>=<span class="keyword">True</span>)<br><br>
          <span class="keyword">for</span> <span class="variable">response</span> <span class="keyword">in</span> <span class="variable">responses</span>:<br>
          &nbsp;&nbsp;&nbsp;&nbsp;<span class="function">print</span>(<span class="variable">response</span>)
        </div>
      </div>
    `
  },

  // ═══ GAME 3: PROMPT BATTLE (Slides 51-52) ═══
  {
    section: '🎮 Game: Prompt Battle',
    layout: 'layout-content animate-in',
    html: `
      <span class="section-badge game">🎮 Final Game!</span>
      <h2>Prompt Battle</h2>
      <p>Two teams. Same goal. Different approaches. The class votes on the winner!</p>
      <div class="glass-card" style="max-width:800px;margin-top:12px">
        <h3>📋 The Challenge</h3>
        <p>Both teams must craft a prompt that gets AI to write a <em>compelling product launch email</em> for a new AI-powered note-taking app. One team uses <strong>Zero-Shot</strong>, the other uses <strong>Few-Shot + CoT</strong>.</p>
      </div>
      <div class="vote-container" style="margin-top:20px">
        <button class="vote-btn team-a" id="vote-team-a">
          <div class="team-name">⚡ Team Alpha</div>
          <div style="font-size:13px;color:var(--text-muted);margin-bottom:12px">Zero-Shot Approach</div>
          <div class="vote-count" id="count-a">0</div>
          <div style="font-size:12px;color:var(--text-muted);margin-top:4px">votes</div>
        </button>
        <button class="vote-btn team-b" id="vote-team-b">
          <div class="team-name">🔥 Team Beta</div>
          <div style="font-size:13px;color:var(--text-muted);margin-bottom:12px">Few-Shot + CoT</div>
          <div class="vote-count" id="count-b">0</div>
          <div style="font-size:12px;color:var(--text-muted);margin-top:4px">votes</div>
        </button>
      </div>
      <div style="text-align:center;margin-top:12px">
        <button class="timer-btn" id="reset-votes">↺ Reset Votes</button>
      </div>
    `,
    onEnter: () => {
      import('./games.js').then(m => m.initVoting());
    }
  },

  // ═══ REFLECTIVE CONCLUSION (Slides 53-55) ═══
  {
    section: '🌟 Conclusion',
    layout: 'layout-content animate-in',
    html: `
      <span class="section-badge" style="background:var(--gold);color:white">Reflection</span>
      <h2>5 Key Takeaways</h2>
      <div class="part-stack" style="max-width:800px">
        <div class="part-item p"><div class="letter" style="font-size:20px">1</div><div class="part-info"><h4>Structure is Success</h4><p>Always let the LLM know its PART — Problem, Audience, Role, Template, Sharpen.</p></div></div>
        <div class="part-item a"><div class="letter" style="font-size:20px">2</div><div class="part-info"><h4>Technique is Context-Dependent</h4><p>Use Zero, One, or Few Shot based on the complexity of your goal.</p></div></div>
        <div class="part-item r"><div class="letter" style="font-size:20px">3</div><div class="part-info"><h4>Logic over Luck</h4><p>Use Chain of Thought for complex reasoning — "explain step by step."</p></div></div>
        <div class="part-item t"><div class="letter" style="font-size:20px">4</div><div class="part-info"><h4>Human in the Loop</h4><p>LLMs can hallucinate. Verification is always critical. Never trust blindly.</p></div></div>
        <div class="part-item s"><div class="letter" style="font-size:20px">5</div><div class="part-info"><h4>Iteration is Key</h4><p>Prompting is art + science — trial, error, and refinement. Just like human communication.</p></div></div>
      </div>
    `
  },
  {
    section: '🌟 Conclusion',
    layout: 'layout-content animate-in',
    html: `
      <span class="section-badge" style="background:var(--gold);color:white">Reflection</span>
      <h2>Your Prompt Engineering Journey</h2>
      <div class="two-col two-col-img">
        <div>
          <div class="glass-card" style="padding:36px">
            <p style="font-size:22px;color:var(--text-dark);font-family:var(--font-heading);font-weight:700;margin-bottom:14px">"What will you prompt differently starting tomorrow?"</p>
            <p style="font-size:16px;color:var(--text-muted)">Take 2 minutes. Write down one specific task you'll use prompt engineering for at work this week.</p>
          </div>
          <div class="highlight-box" style="margin-top:18px">
            <p style="margin:0"><strong>Remember:</strong> You've learned frameworks, techniques, and boundaries. The next step is <em>practice</em>. Every interaction with AI is a chance to sharpen your skills.</p>
          </div>
        </div>
        <img src="/images/ai_layers.png" class="slide-image" alt="AI Layers" />
      </div>
    `
  },
  {
    section: '🌟 Thank You',
    layout: 'layout-title',
    html: `
      <img src="/images/network_abstract.png" class="title-bg" alt="" />
      <div class="slide-label">Workshop Complete 🎉</div>
      <h1>Thank You!</h1>
      <p class="subtitle">You're now equipped with the foundations of Prompt Engineering. Go build something amazing.</p>
      <div style="margin-top:28px;display:flex;gap:10px;flex-wrap:wrap">
        <span class="pill navy">PART Framework ✓</span>
        <span class="pill terracotta">Shot Techniques ✓</span>
        <span class="pill gold">Chain of Thought ✓</span>
        <span class="pill sage">Real-world Ready ✓</span>
      </div>
      <p style="margin-top:36px;font-size:16px;color:var(--text-muted)">Facilitator: Matthew Romero</p>
    `
  },
];
