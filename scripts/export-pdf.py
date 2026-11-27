"""Generate a single-column, selectable-text CV from the website data."""

import json
from pathlib import Path
import shutil
import subprocess
from xml.sax.saxutils import escape

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import HRFlowable, KeepTogether, PageBreak, Paragraph, SimpleDocTemplate, Spacer

ROOT = Path(__file__).resolve().parent.parent
DATA = json.loads(subprocess.check_output([
    'bun', '-e',
    "import { resumeData } from './src/data/resumeData.ts';"
    "import { profileData } from './src/data/profileData.ts';"
    "console.log(JSON.stringify({ resume: resumeData, profile: profileData }));",
], cwd=ROOT, text=True))

INK = colors.HexColor('#192837')
BLUE = colors.HexColor('#234f72')
MUTED = colors.HexColor('#405669')


def html(value):
    return escape(value.replace('—', '-').replace('–', '-').replace('’', "'"))


def style(name, **options):
    defaults = dict(fontName='Helvetica', fontSize=10.7, leading=14.5, textColor=INK)
    return ParagraphStyle(name, **(defaults | options))


NAME = style('name', fontName='Helvetica-Bold', fontSize=24, leading=29)
TITLE = style('title', fontSize=15, leading=20, textColor=BLUE, spaceAfter=4)
CONTACT = style('contact', fontSize=9.5, leading=13, textColor=MUTED)
BODY = style('body')
SECTION = style('section', fontName='Helvetica-Bold', fontSize=12, leading=15,
                textColor=BLUE, spaceBefore=11, spaceAfter=4, keepWithNext=True)
COMPANY = style('company', fontName='Helvetica-Bold', fontSize=12, leading=15,
                spaceBefore=10, spaceAfter=1, keepWithNext=True)
ROLE = style('role', fontSize=10, leading=13, textColor=MUTED, spaceAfter=3,
             keepWithNext=True)
BULLET = style('bullet', leftIndent=11, bulletIndent=1, spaceAfter=2)
DETAIL = style('detail', fontSize=10, leading=13, spaceAfter=2)


def heading(title):
    return Paragraph(html(title), SECTION)


def link(url, label):
    return f'<a href="{html(url)}" color="#234f72">{html(label)}</a>'


def export_pdf(path, anonymous=False):
    resume, profile = DATA['resume'], DATA['profile']
    name = 'Curriculum Vitae' if anonymous else profile['name']
    story = [Paragraph(html(name), NAME), Paragraph(html(resume['title']), TITLE)]
    if not anonymous:
        contacts = profile['contact']
        email = contacts['email']
        story.append(Paragraph(' | '.join([html(profile['location']), link('mailto:' + email, email),
                                           link(contacts['telegram'], contacts['telegram'].removeprefix('https://'))]), CONTACT))
        profiles = [link(contacts[key], contacts[key].removeprefix('https://').removeprefix('www.'))
                    for key in ('linkedin', 'github')]
        story.append(Paragraph(' | '.join(profiles), CONTACT))

    story.extend([Spacer(1, 7), HRFlowable(width='100%', thickness=1, color=BLUE),
                  heading('Professional Summary')])
    story.extend(Paragraph(html(text), BODY) for text in resume['summary'])
    story.append(heading('Technical Skills'))
    for group in resume['skills']:
        story.append(Paragraph(f'<b>{html(group["category"])}</b> &nbsp; {html(", ".join(group["skills"]))}', DETAIL))

    story.append(heading('Work Experience'))
    for entry in resume['experience']:
        if entry['company'] == 'Ankr':
            story.extend([PageBreak(), heading('Work Experience (continued)')])
        company = link(entry['url'], entry['company']) if 'url' in entry else html(entry['company'])
        block = [Paragraph(company, COMPANY)]
        for role in entry['roles']:
            block.append(Paragraph(f'{html(role["title"])} &nbsp; | &nbsp; {html(role["period"])}', ROLE))
            block.extend(Paragraph(html(text), BULLET, bulletText='•') for text in role['highlights'])
        story.append(KeepTogether(block))

    education = resume['education']
    story.extend([heading('Education'),
                  Paragraph(f'<b>{html(education["institution"])}</b> &nbsp; | &nbsp; {html(education["period"])}', DETAIL),
                  Paragraph(html(education['degree']), DETAIL), heading('Languages'),
                  Paragraph(' &nbsp; | &nbsp; '.join(html(f'{item["name"]}: {item["level"]}') for item in resume['languages']), DETAIL)])

    path.parent.mkdir(parents=True, exist_ok=True)
    document = SimpleDocTemplate(str(path), pagesize=A4, leftMargin=35, rightMargin=35,
                                 topMargin=26, bottomMargin=27, title=name + ' - ' + resume['title'],
                                 author='' if anonymous else profile['name'])
    document.build(story)
    print(f'Generated {path.relative_to(ROOT)}')


export_pdf(ROOT / 'resume.pdf')
if (ROOT / 'dist').is_dir():
    shutil.copyfile(ROOT / 'resume.pdf', ROOT / 'dist/resume.pdf')
    export_pdf(ROOT / 'dist/anonymous/resume.pdf', anonymous=True)
