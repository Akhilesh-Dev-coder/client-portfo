import React from 'react';

const testimonialsList = [
  {
    quote: "Our Diwali ad looked better than anything we'd ever put out. KAELIX delivered fast and nailed it first try.",
    author: "Muhammed Shebeer",
    role: "Co-Founder, Feloc Peanut Butter",
    link: "https://www.feloc.in/"
  },
  {
    quote: "Everyone loves it. Great job. Can't wait to see the other videos.",
    author: "Imraan Assim",
    role: "Eternal Virtue Marketing",
    link: "https://eternalvirtue.org/"
  },
  {
    quote: "It looks terrific — great job!",
    author: "Riyas",
    role: "Bombae Social",
    link: "https://www.bombaesocial.ca/"
  },
  {
    quote: "The roof looked so real I couldn't tell it was AI. That's exactly what we wanted.",
    author: "Ansif",
    role: "Creative Head, Luxume Roofing",
    link: "https://www.luxume.in/"
  }
];

export default function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <div className="eyebrow reveal">Client Words</div>
      <h2 className="big-title reveal" style={{ fontSize: 'clamp(32px, 5vw, 56px)', marginBottom: '50px' }}>
        Trusted by ambitious brands.
      </h2>
      <div className="testi-wrap" id="testi-wrap">
        {testimonialsList.map((t, index) => (
          <div key={index} className="testi-card reveal">
            <div className="quote-mark">”</div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <div className="testi-stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="testi-quote">"{t.quote}"</div>
            </div>
            <div className="testi-author" style={{ marginTop: '24px' }}>
              <b>{t.author}</b> —{' '}
              <a 
                href={t.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: 'var(--accent)', textDecoration: 'none' }}
                onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
              >
                {t.role}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
