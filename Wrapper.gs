// ============================================================
//  MCI Anwesenheitscheck – Wrapper
//  Anleitung: siehe README.md
// ============================================================

// ── Menü & Trigger ──────────────────────────────────────────
function onOpen()                    { Lib.onOpen(); }
function autoCheck()                 { Lib.autoCheck(); }
function autoEmail()                 { Lib.autoEmail(); }

// ── Menü-Funktionen ─────────────────────────────────────────
function createAnwesenheitsplan()    { Lib.createAnwesenheitsplan(); }
function updateTermine()             { Lib.updateTermine(); }
function openUeEditor()              { Lib.openUeEditor(); }
function manageNotifications()       { Lib.manageNotifications(); }

// ── Dialog-Callbacks (google.script.run) ────────────────────
function loadCoursesFromUrl(url)                     { return Lib.loadCoursesFromUrl(url); }
function loadCoursesWithUE(url, sel)                 { return Lib.loadCoursesWithUE(url, sel); }
function finishSetup(url, sel, ue)                   { return Lib.finishSetup(url, sel, ue); }
function saveUeOverrides(o)                          { return Lib.saveUeOverrides(o); }
function applyDecisions(json)                        { return Lib.applyDecisions(json); }
function enableEmailNotify()                         { return Lib.enableEmailNotify(); }
function disableEmailNotify()                        { return Lib.disableEmailNotify(); }