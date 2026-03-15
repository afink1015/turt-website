# HDM Weekly Performance Tracker Setup

## 1) Import files
1. Create a new Google Sheet named `HDM Weekly Performance Tracker`.
2. Create tabs: `Reviewer_List`, `Team`, `Weekly_Log`, `Dashboard`.
3. File -> Import -> Upload each CSV from this folder into its matching tab:
   - `Reviewer_List.csv`
   - `Team.csv`
   - `Weekly_Log.csv`

## 2) Add formulas in Weekly_Log
In `Weekly_Log`:
- `C2`:
```gs
=IF(B2="","",IFERROR(XLOOKUP(B2,Team!B:B,Team!A:A),""))
```
- `D2`:
```gs
=IF(B2="","",IFERROR(XLOOKUP(B2,Team!B:B,Team!D:D),""))
```
- `G2`:
```gs
=IF(B2="","",E2+F2)
```
Copy `C2:D2` and `G2` down.

Add data validation on `B:B` from range `Team!B2:B`.

## 3) Build Dashboard
In `Dashboard`:
- `A1`: `Selected Week`
- `B1`: pick a Monday week date from `Weekly_Log!A:A`

Headers in `A3:I3`:
`Name | Role | Target | Tasks | Reviews | Total | Status | Feather | Email`

Formulas:
- `A4`:
```gs
=FILTER(Team!A2:A,Team!A2:A<>")
```
- `B4`:
```gs
=IF(A4="","",XLOOKUP(A4,Team!A:A,Team!D:D))
```
- `C4`:
```gs
=IF(A4="","",XLOOKUP(A4,Team!A:A,Team!F:F))
```
- `I4`:
```gs
=IF(A4="","",XLOOKUP(A4,Team!A:A,Team!B:B))
```
- `D4`:
```gs
=IF(A4="","",IFERROR(SUMIFS(Weekly_Log!E:E,Weekly_Log!A:A,$B$1,Weekly_Log!B:B,$I4),0))
```
- `E4`:
```gs
=IF(A4="","",IFERROR(SUMIFS(Weekly_Log!F:F,Weekly_Log!A:A,$B$1,Weekly_Log!B:B,$I4),0))
```
- `F4`:
```gs
=IF(A4="","",D4+E4)
```
- `G4`:
```gs
=IF(A4="","",IF(F4>=C4,"On Track",IF(F4=0,"No Output","Behind")))
```
- `H4`:
```gs
=IF(A4="","",HYPERLINK(XLOOKUP(A4,Team!A:A,Team!C:C),"Open Feather"))
```

Copy `B4:I4` down to match the team list.
Hide helper column `I`.

## 4) Formatting
1. Freeze row 1 on each tab.
2. Bold header rows.
3. Apply alternating row colors.
4. In `Dashboard!G:G` add conditional formatting:
   - `On Track` -> green
   - `Behind` -> yellow
   - `No Output` -> red
5. Suggested widths: A 180, B 220, C 100, D 90, E 90, F 90, G 110, H 120.

## 5) Weekly use
1. Pick week in `Dashboard!B1`.
2. In `Weekly_Log`, add one row per expert for that week.
3. Fill `Tasks Signed Off` and `Reviews Signed Off` only; dashboard updates automatically.
