# Certifications PDF Files

This directory contains certificate and license PDF files for the Certifications page.

## File Naming Convention

The certificate PDFs should be named based on the certification title. The system automatically converts certification titles to file names using the following rules:

1. Convert to lowercase
2. Replace spaces and special characters with hyphens
3. Add `.pdf` extension

### Example Mappings

| Certification Title | File Name |
|---------------------|-----------|
| ISO 9001:2015 | `iso-9001-2015.pdf` |
| ISO 45001:2018 | `iso-45001-2018.pdf` |
| Boiler Repairer License | `boiler-repairer-license.pdf` |
| Boiler Erector License | `boiler-erector-license.pdf` |
| EPF Registration | `epf-registration.pdf` |
| ESI Registration | `esi-registration.pdf` |

## How It Works

- **Thumbnails**: Each certification card displays a PDF icon with the certificate title
- **Click to View**: Clicking on a card opens a full-screen modal with an embedded PDF viewer
- **Auto-mapping**: The system automatically maps certification titles to PDF file names
- **PDF Viewer**: The modal uses an iframe to display PDFs with browser's native PDF viewer

## Supported Formats

- `.pdf` (PDF format)

## Recommended PDF Specifications

- **Format**: PDF (Portable Document Format)
- **File Size**: Keep under 5MB for optimal loading
- **Quality**: Ensure PDFs are clear and readable
- **Pages**: Single or multi-page PDFs are supported

## Adding New Certificates

1. Add your certificate PDF file to this directory
2. Name it according to the certification title (see examples above)
3. The PDF will automatically appear on the Certifications page
4. Click on the card to view the full PDF in a modal with embedded viewer

## PDF Viewer Features

The embedded PDF viewer includes:
- Zoom controls
- Navigation panes
- Scrollbar
- Print functionality (via browser)
- Download option (via browser)

