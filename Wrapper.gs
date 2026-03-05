// ============================================================
//  MCI Anwesenheitscheck – Wrapper
//
//  ANLEITUNG:
//  1. Diesen Code in dein Apps Script Projekt einfügen
//  2. Library hinzufügen: Bibliotheken → + → Script-ID einfügen
//     (Script-ID bekommst du vom Entwickler)
//  3. Identifier auf "Lib" setzen → Hinzufügen
//  4. appsscript.json aus dem Repo übernehmen
//  5. Speichern & Sheet neu laden
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