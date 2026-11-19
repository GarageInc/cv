import { useCallback } from 'react';
import { resumeData } from './data/resumeData';
import type { ResumeProfile } from './data/profileData';

function App({ profile }: { profile?: ResumeProfile }) {
  const projects = profile
    ? [...resumeData.projects, ...profile.projects]
    : resumeData.projects;
  // Uses the browser's own print-to-PDF pipeline so the exported file contains
  // real, selectable text. Canvas-based exporters (html2pdf/html2canvas) emit a
  // rasterized image, which applicant tracking systems parse as a blank page.
  const exportPDF = useCallback(() => {
    window.print();
  }, []);

  return (
    <>
      <header className="header" role="banner">
        <a href="#top" className="header-logo" aria-label="Back to top">
          {profile?.initials ?? 'CV'}
        </a>
        <nav className="header-nav" aria-label="Resume sections">
          <a href="#summary">Summary</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          {profile && <a href="#contact">Contact</a>}
        </nav>
        <button
          onClick={exportPDF}
          className="export-btn"
          aria-label="Download resume as PDF"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          PDF
        </button>
      </header>

      <main className="resume-page">
        {/* Document Header */}
        <div className="doc-header" id="top">
          <h1>{profile?.name ?? 'Curriculum Vitae'}</h1>
          <p className="doc-title">{resumeData.title}</p>
          {profile && <address className="doc-contacts">
            <a href={`mailto:${profile.contact.email}`}>{profile.contact.email}</a>
            <span className="separator">|</span>
            <span>{profile.location}</span>
            <span className="separator">|</span>
            <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer">{profile.contact.linkedin.replace('https://www.', '')}</a>
            <span className="separator">|</span>
            <a href={profile.contact.github} target="_blank" rel="noopener noreferrer">{profile.contact.github.replace('https://', '')}</a>
            <span className="separator">|</span>
            <a href={profile.contact.telegram} target="_blank" rel="noopener noreferrer">{profile.contact.telegram.replace('https://', '')}</a>
          </address>}
          <button
            onClick={exportPDF}
            className="doc-export-btn"
            aria-label="Export resume as PDF"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="12" y1="18" x2="12" y2="12" />
              <polyline points="9 15 12 18 15 15" />
            </svg>
            Export Resume in PDF
          </button>
          {profile && (
            <a className="doc-anonymous-link" href={`${import.meta.env.BASE_URL}anonymous/`}>
              Anonymous CV
            </a>
          )}
        </div>

        {/* Professional Summary */}
        <section className="doc-section" id="summary">
          <h2 className="doc-section-title">Professional Summary</h2>
          {resumeData.summary.map((para, i) => (
            <p key={i} className="doc-summary">{para}</p>
          ))}
        </section>

        {/* Key Achievements */}
        <div className="achievements-grid">
          {resumeData.achievements.map((a, i) => (
            <div key={i} className="achievement-card">
              <span className="achievement-metric">{a.metric}</span>
              <span className="achievement-label">{a.label}</span>
            </div>
          ))}
        </div>

        {/* Work Experience */}
        <section className="doc-section" id="experience">
          <h2 className="doc-section-title">Work Experience</h2>
          {resumeData.experience.map((exp, i) => (
            <article key={i} className="exp-entry">
              <div className="exp-company-row">
                <span className="exp-company">{exp.company}</span>
                {exp.totalDuration && (
                  <span className="exp-duration">{exp.totalDuration}</span>
                )}
              </div>
              {exp.roles.map((role, j) => (
                <div key={j} className="exp-role">
                  <div className="exp-role-row">
                    <span className="exp-role-title">{role.title}</span>
                    <span className="exp-role-period">{role.period}</span>
                  </div>
                  {role.location && (
                    <span className="exp-role-location">{role.location}</span>
                  )}
                  <ul className="exp-role-highlights">
                    {role.highlights.map((h, k) => (
                      <li key={k}>{h}</li>
                    ))}
                  </ul>
                  {role.stack && (
                    <p className="exp-stack">
                      <strong>Stack:</strong> {role.stack}
                    </p>
                  )}
                </div>
              ))}
            </article>
          ))}
        </section>

        {/* Selected Projects */}
        <section className="doc-section" id="projects">
          <h2 className="doc-section-title">Selected Products Shipped</h2>
          <ul className="doc-highlights">
            {projects.map((p, i) => (
              <li key={i}>
                <a href={p.url} target="_blank" rel="noopener noreferrer">
                  <strong>{p.name}</strong>
                </a>
                {' — '}
                {p.description}
              </li>
            ))}
          </ul>
        </section>

        {/* Technical Skills */}
        <section className="doc-section" id="skills">
          <h2 className="doc-section-title">Technical Skills</h2>
          <div className="skills-table">
            {resumeData.skills.map((group, i) => (
              <div key={i} className="skill-row">
                <span className="skill-category">{group.category}</span>
                <span className="skill-list">
                  {group.skills.map((s, k) => (
                    <span key={k} className="skill-chip">{s}</span>
                  ))}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="doc-section" id="education">
          <h2 className="doc-section-title">Education</h2>
          <div className="edu-row">
            <span className="edu-institution">{resumeData.education.institution}</span>
            <span className="edu-period">{resumeData.education.period}</span>
          </div>
          <p className="edu-degree">{resumeData.education.degree}</p>
          <div className="lang-row">
            <div className="lang-list">
              {resumeData.languages.map((lang, i) => (
                <div key={i} className="lang-item">
                  <span className="lang-name">{lang.name}:</span>
                  <span className="lang-level">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        {profile && <section className="doc-section" id="contact">
          <h2 className="doc-section-title">Contact Information</h2>
          <address className="contact-list">
            <div className="contact-item">
              <span className="contact-item-label">Email</span>
              <a href={`mailto:${profile.contact.email}`} className="contact-item-value">{profile.contact.email}</a>
            </div>
            <div className="contact-item">
              <span className="contact-item-label">Telegram</span>
              <a href={profile.contact.telegram} target="_blank" rel="noopener noreferrer" className="contact-item-value">@{profile.contact.telegram.split('/').pop()}</a>
            </div>
            <div className="contact-item">
              <span className="contact-item-label">LinkedIn</span>
              <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer" className="contact-item-value">{profile.contact.linkedin.replace('https://www.', '')}</a>
            </div>
            <div className="contact-item">
              <span className="contact-item-label">GitHub</span>
              <a href={profile.contact.github} target="_blank" rel="noopener noreferrer" className="contact-item-value">{profile.contact.github.replace('https://', '')}</a>
            </div>
          </address>
        </section>}
      </main>

      <footer className="footer">
        <p>{profile ? `© ${new Date().getFullYear()} ${profile.name}` : 'Curriculum Vitae'}</p>
      </footer>
    </>
  );
}

export default App;
