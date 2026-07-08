# RELIQUARY

**Field Instrument 072**

RELIQUARY is a complete hardware project archive system. It helps collect project files, classify artifacts, record design snapshots, model file relationships, identify missing documentation, preserve hardware memory, assess publish readiness, and generate GitHub-ready package files.

## Current version

FI-072 RELIQUARY v5.3.0 — Module Clarity Pass

## Added in v5.3.0

- Added a module clarity layer across the full application
- Each major module now explains what question it answers
- Each module now includes guidance for what belongs there and what does not belong there
- Each module now includes suggested next actions so the user knows what to do first
- Extended the Hardware Memory clarity pattern to Project Library, Archive Readiness, Artifact Cabinet, Design Snapshots, Repo Scanner, Artifact Lineage, Reports, Diagnostics, and Templates / Demos
- Kept the v5.2.1 Hardware Memory navigation fix intact
- Updated the visible app marker to v5.3.0

## Recently fixed

### v5.2.1

- Corrected the Hardware Memory navigation route so the Hardware Memory button opens the Hardware Memory module instead of falling back to Archive Readiness

### v5.2.0

- Reframed Hardware Memory as the place for shop wisdom around the project
- Added rating buttons and reuse notes for memory records
- Added Hardware Memory records to report exports as `hardware-memory.md`

## Use

Open `index.html` in a browser. The app is static and does not require a backend.

## Author

M.B. Parks, Green Shoe Garage, 2026
