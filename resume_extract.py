from pathlib import Path
from pypdf import PdfReader
pdf_path = Path('Prabhat_Final.pdf')
reader = PdfReader(str(pdf_path))
print('pages', len(reader.pages))
for i, p in enumerate(reader.pages):
    text = p.extract_text() or ''
    print(f'--- PAGE {i+1} ---')
    print(text[:6000])
    print()
