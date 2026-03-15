const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');

const base = path.resolve('/Users/adamfinkelstein/Documents/New project/hdm-tracker-template');
const outPath = path.join(base, 'HDM_Weekly_Performance_Tracker.xlsx');

function sheetFromCsv(filename) {
  const data = fs.readFileSync(path.join(base, filename), 'utf8');
  const wb = XLSX.read(data, { type: 'string' });
  return wb.Sheets[wb.SheetNames[0]];
}

const workbook = XLSX.utils.book_new();

const reviewerSheet = sheetFromCsv('Reviewer_List.csv');
const teamSheet = sheetFromCsv('Team.csv');
const weeklySheet = sheetFromCsv('Weekly_Log.csv');

for (let r = 2; r <= 600; r += 1) {
  weeklySheet[`C${r}`] = { t: 'n', f: `IF(B${r}="","",IFERROR(XLOOKUP(B${r},Team!B:B,Team!A:A),""))` };
  weeklySheet[`D${r}`] = { t: 'n', f: `IF(B${r}="","",IFERROR(XLOOKUP(B${r},Team!B:B,Team!D:D),""))` };
  weeklySheet[`G${r}`] = { t: 'n', f: `IF(B${r}="","",E${r}+F${r})` };
}
weeklySheet['!ref'] = 'A1:H600';

const dashData = [
  ['Selected Week', '2026-03-09'],
  [],
  ['Name', 'Role', 'Target', 'Tasks', 'Reviews', 'Total', 'Status', 'Feather', 'Email'],
];

for (let r = 4; r <= 203; r += 1) {
  dashData.push(['', '', '', '', '', '', '', '', '']);
}

const dashboardSheet = XLSX.utils.aoa_to_sheet(dashData);

dashboardSheet.A4 = { t: 'n', f: 'FILTER(Team!A2:A,Team!A2:A<>"")' };
for (let r = 4; r <= 203; r += 1) {
  dashboardSheet[`B${r}`] = { t: 'n', f: `IF(A${r}="","",XLOOKUP(A${r},Team!A:A,Team!D:D))` };
  dashboardSheet[`C${r}`] = { t: 'n', f: `IF(A${r}="","",XLOOKUP(A${r},Team!A:A,Team!F:F))` };
  dashboardSheet[`I${r}`] = { t: 'n', f: `IF(A${r}="","",XLOOKUP(A${r},Team!A:A,Team!B:B))` };
  dashboardSheet[`D${r}`] = { t: 'n', f: `IF(A${r}="","",IFERROR(SUMIFS(Weekly_Log!E:E,Weekly_Log!A:A,$B$1,Weekly_Log!B:B,$I${r}),0))` };
  dashboardSheet[`E${r}`] = { t: 'n', f: `IF(A${r}="","",IFERROR(SUMIFS(Weekly_Log!F:F,Weekly_Log!A:A,$B$1,Weekly_Log!B:B,$I${r}),0))` };
  dashboardSheet[`F${r}`] = { t: 'n', f: `IF(A${r}="","",D${r}+E${r})` };
  dashboardSheet[`G${r}`] = { t: 'n', f: `IF(A${r}="","",IF(F${r}>=C${r},"On Track",IF(F${r}=0,"No Output","Behind")))` };
  dashboardSheet[`H${r}`] = { t: 'n', f: `IF(A${r}="","",HYPERLINK(XLOOKUP(A${r},Team!A:A,Team!C:C),"Open Feather"))` };
}
dashboardSheet['!ref'] = 'A1:I203';

dashboardSheet['!cols'] = [
  { wch: 28 },
  { wch: 12 },
  { wch: 10 },
  { wch: 10 },
  { wch: 10 },
  { wch: 10 },
  { wch: 12 },
  { wch: 16 },
  { wch: 26 },
];

teamSheet['!cols'] = [
  { wch: 28 }, { wch: 26 }, { wch: 64 }, { wch: 12 }, { wch: 14 }, { wch: 14 }, { wch: 10 }, { wch: 36 },
];
weeklySheet['!cols'] = [
  { wch: 14 }, { wch: 26 }, { wch: 28 }, { wch: 12 }, { wch: 18 }, { wch: 20 }, { wch: 14 }, { wch: 32 },
];
reviewerSheet['!cols'] = [{ wch: 24 }, { wch: 26 }, { wch: 18 }];

XLSX.utils.book_append_sheet(workbook, reviewerSheet, 'Reviewer_List');
XLSX.utils.book_append_sheet(workbook, teamSheet, 'Team');
XLSX.utils.book_append_sheet(workbook, weeklySheet, 'Weekly_Log');
XLSX.utils.book_append_sheet(workbook, dashboardSheet, 'Dashboard');

XLSX.writeFile(workbook, outPath);
console.log(outPath);
