# RELIQUARY

**Field Instrument 072**

RELIQUARY is a design artifact repository for hardware projects. It helps collect project files, record dated design snapshots, identify missing documentation, and preserve enough context to understand, rebuild, repair, publish, or resume a hardware project later.

## Current version

FI-072 RELIQUARY v4.1.0 — Release Hardening

## What RELIQUARY tracks

- Electronics artifacts such as schematics, board files, Gerbers, and fabrication exports
- Mechanical artifacts such as STL, 3MF, OBJ, PLY, F3D, F3Z, STEP, DWG, and source CAD
- Machine files such as G-code, CNC files, laser files, CAM exports, and setup notes
- Software and firmware files such as HTML, CSS, JS, INO, PY, MPY, C, CPP, and configuration files
- Documentation such as README files, BOMs, images, manuals, guides, test notes, articles, and troubleshooting records
- Knowledge base records such as reusable parts, tools, lessons learned, failures, repairs, and project notes

## Included in v4.1.0

- Project Library
- Project Dashboard
- Artifact Cabinet with search, filtering, and auto-classification
- Design Snapshot timeline
- Snapshot comparison
- Rebuild Checklist with inferred evidence
- Rebuild Confidence and Documentation Completeness scoring
- Repository Scanner for public GitHub repositories
- Manual file tree import
- Reports center
- README export
- Artifact manifest CSV export
- Project dossier HTML export
- Static public project page export
- Project JSON export
- Publish readiness screen
- Hardware Knowledge Base
- Parts, tools, lessons learned, and repair notes
- Local autosave
- Import/export JSON
- Light/dark theme

## Use

Open `index.html` in a browser. The app is a self-contained static web app and does not require a backend.

For repository scanning, paste a public GitHub repository URL and branch name, or paste a file tree manually. RELIQUARY will classify artifacts and generate rebuild-readiness gaps.

## Author

M.B. Parks, Green Shoe Garage, 2026
