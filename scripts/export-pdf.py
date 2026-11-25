"""Generate selectable-text PDFs from the same data used by the website."""

import json
from pathlib import Path
import shutil
import subprocess
from xml.sax.saxutils import escape

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import (
    HRFlowable, KeepTogether, PageBreak, Paragraph, SimpleDocTemplate, Spacer,
    Table, TableStyle,
)


ROOT = Path(__file__).resolve().parent.parent
DATA = json.loads(subprocess.check_output([
    'bun', '-e',
    "import { resumeData } from './src/data/resumeData.ts';"
    "import { profileData } from './src/data/profileData.ts';"
    "console.log(JSON.stringify({ resume: resumeData, profile: profileData }));",
], cwd=ROOT, text=True))
BLUE = colors.HexColor('#1e40af')
TEXT = colors.HexColor('#334155')
MUTED = colors.HexColor('#64748b')
WIDTH = A4[0] - 68


def html(value):
    for old, new in [('–', '-'), ('—', '-'), ('→', 'to'), ('\u00a0', ' ')]:
        value = value.replace(old, new)
    return escape(value)


def style(name, **options):
    defaults = dict(fontName='Helvetica', fontSize=9, leading=12, textColor=TEXT)
    return ParagraphStyle(name, **(defaults | options))


BODY = style('body', spaceAfter=5)
SECTION = style('section', fontName='Helvetica-Bold', fontSize=10, leading=13,
                textColor=BLUE, spaceBefore=10, spaceAfter=6, keepWithNext=True)
COMPANY = style('company', fontName='Helvetica-Bold', fontSize=10, leading=13,
                textColor=BLUE, spaceBefore=7, spaceAfter=3, keepWithNext=True)
BULLET = style('bullet', leftIndent=10, firstLineIndent=0, bulletIndent=0,
               spaceAfter=2)
SMALL = style('small', fontSize=7.8, leading=10, textColor=MUTED)


def paragraph(value, paragraph_style=BODY):
    return Paragraph(html(value), paragraph_style)


def heading(value):
    return Paragraph(value.upper(), SECTION)


def row(left, right, bold=False):
    title_style = style('row-title', fontName='Helvetica-Bold' if bold else 'Helvetica-Oblique')
    date_style = style('date', fontSize=8, textColor=MUTED, alignment=TA_RIGHT)
    table = Table([[paragraph(left, title_style), paragraph(right, date_style)]],
                  colWidths=[WIDTH - 130, 130])
    table.setStyle(TableStyle([
        ('LEFTPADDING', (0, 0), (-1, -1), 0),
        ('RIGHTPADDING', (0, 0), (-1, -1), 0),
        ('TOPPADDING', (0, 0), (-1, -1), 1),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 3),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
    ]))
    table.keepWithNext = True
    return table


def export_pdf(path, anonymous=False):
    resume, profile = DATA['resume'], DATA['profile']
    name = 'Curriculum Vitae' if anonymous else profile['name']
    story = [paragraph(name, style('name', fontName='Helvetica-Bold', fontSize=18,
                                   leading=23, alignment=TA_CENTER, textColor=colors.HexColor('#0f172a'))),
             paragraph(resume['title'], style('title', fontSize=9, leading=12,
                                              alignment=TA_CENTER, textColor=BLUE)), Spacer(1, 7)]
    if not anonymous:
        links = profile['contact']
        contacts = [f'<a href="mailto:{html(links["email"])}">{html(links["email"])}</a>', html(profile['location'])]
        for key in ('linkedin', 'github', 'telegram'):
            url = links[key]
            label = url.removeprefix('https://').removeprefix('www.')
            contacts.append(f'<a href="{html(url)}">{html(label)}</a>')
        story += [Paragraph(' &nbsp; | &nbsp; '.join(contacts),
                            style('contacts', fontSize=7.3, leading=10, alignment=TA_CENTER)), Spacer(1, 7)]
    story += [HRFlowable(width='100%', thickness=1.5, color=BLUE), heading('Professional Summary')]
    story += [paragraph(text) for text in resume['summary']]

    metric_style = style('metric', fontName='Helvetica-Bold', fontSize=11,
                         leading=15, textColor=BLUE, alignment=TA_CENTER)
    label_style = style('label', fontSize=7, leading=9, alignment=TA_CENTER, textColor=MUTED)
    cards = [[Paragraph(html(item['metric']), metric_style),
              Paragraph(html(item['label']), label_style)] for item in resume['achievements']]
    metrics = Table([cards], colWidths=[WIDTH / len(cards)] * len(cards))
    metrics.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), colors.HexColor('#eff4ff')),
        ('BOX', (0, 0), (-1, -1), 0.5, colors.HexColor('#dbe5ff')),
        ('INNERGRID', (0, 0), (-1, -1), 2, colors.white),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('TOPPADDING', (0, 0), (-1, -1), 8),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 8),
    ]))
    story += [Spacer(1, 5), metrics, heading('Work Experience')]
    for index, experience in enumerate(resume['experience']):
        if index == 2:
            story.append(PageBreak())
        story.append(paragraph(experience['company'], COMPANY))
        for role in experience['roles']:
            role_story = [row(role['title'], role['period'])]
            role_story += [Paragraph(html(text), BULLET, bulletText='•') for text in role['highlights']]
            if role.get('stack'):
                role_story.append(paragraph('Stack: ' + role['stack'], SMALL))
            story.append(KeepTogether(role_story))

    story.append(heading('Selected Products & Code'))
    projects = resume['projects'] + ([] if anonymous else profile['projects'])
    for project in projects:
        text = f'<b><a href="{html(project["url"])}">{html(project["name"])}</a></b> - {html(project["description"])}'
        story.append(Paragraph(text, BULLET, bulletText='•'))

    story.append(heading('Technical Skills'))
    skill_rows = [[Paragraph(f'<b>{html(group["category"])}</b>', SMALL),
                   paragraph(' · '.join(group['skills']), SMALL)] for group in resume['skills']]
    skills = Table(skill_rows, colWidths=[90, WIDTH - 90])
    skills.setStyle(TableStyle([
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('LEFTPADDING', (0, 0), (-1, -1), 0),
        ('RIGHTPADDING', (0, 0), (-1, -1), 4),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 5),
    ]))
    story += [skills, heading('Education')]
    education = resume['education']
    story += [row(education['institution'], education['period'], bold=True), paragraph(education['degree'])]
    story.append(paragraph(' · '.join(f'{item["name"]}: {item["level"]}' for item in resume['languages'])))

    path.parent.mkdir(parents=True, exist_ok=True)
    document = SimpleDocTemplate(str(path), pagesize=A4, leftMargin=34, rightMargin=34,
                                 topMargin=30, bottomMargin=30, title=name + ' - CV',
                                 author='' if anonymous else profile['name'])
    document.build(story)
    print(f'Generated {path.relative_to(ROOT)}')


export_pdf(ROOT / 'resume.pdf')
if (ROOT / 'dist').is_dir():
    shutil.copyfile(ROOT / 'resume.pdf', ROOT / 'dist/resume.pdf')
    export_pdf(ROOT / 'dist/anonymous/resume.pdf', anonymous=True)
