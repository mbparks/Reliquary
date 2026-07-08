# RELIQUARY

**Field Instrument 072**

RELIQUARY is a complete hardware project archive system. It helps collect project files, classify artifacts, record design snapshots, model file relationships, identify missing documentation, preserve hardware memory, assess publish readiness, and generate GitHub-ready package files.

## Current version

FI-072 RELIQUARY v5.3.2 — Module Header Layout Fix

## Fixed in v5.3.2

- Fixed module header overlap caused by the large title sharing a horizontal grid row with guidance cards
- Changed module headers to a vertical structure: large title first, explanatory question below, guidance cards underneath
- Reduced the large title scale slightly so long module names fit cleanly
- Kept the consistent module header treatment introduced in v5.3.1

## Fixed in v5.3.1

- Made every module use the same large visual header pattern at the top of the module
- Moved the large title treatment into the module clarity layer instead of leaving it only inside Project Library and Hardware Memory
- Demoted older internal hero blocks so they no longer compete with the module header
- Added `module-headers-v531.css` for the shared module header treatment
- Kept the v5.3.0 module guidance cards and v5.2.1 Hardware Memory navigation fix intact

## Added in v5.3.0

- Added a module clarity layer across the full application
- Each major module now explains what question it answers
- Each module now includes guidance for what belongs there and what does not belong there
- Each module now includes suggested next actions so the user knows what to do first
- Extended the Hardware Memory clarity pattern to Project Library, Archive Readiness, Artifact Cabinet, Design Snapshots, Repo Scanner, Artifact Lineage, Reports, Diagnostics, and Templates / Demos

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
