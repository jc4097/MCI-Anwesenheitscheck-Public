# MCI Anwesenheitscheck

Automatische Anwesenheitsverwaltung für MCI-Studierende als Google Sheets Add-on.

## Features

- Kalender-Import aus MCI ICS-Feed
- Automatische Anwesenheits-Tracking pro Kurs
- Anwesenheits-% und Puffer-Berechnung (75%-Regel)
- Farbliche Hervorhebung: vergangene Termine (violett), heute (gelb)
- Täglicher Auto-Check um 00:01 mit Banner-Benachrichtigung bei Änderungen
- Optionale E-Mail-Benachrichtigung um 07:00
- UE-Verwaltung mit manuellen Overrides
- Änderungs-Log

## Installation

1. Erstelle ein neues Google Sheet
2. Öffne **Erweiterungen → Apps Script**
3. Lösche den bestehenden Code
4. Kopiere den Inhalt von `Anwesenheitsplan_obfuscated.gs` in den Editor
5. Erstelle eine neue Datei `appsscript.json` und kopiere den Inhalt der `appsscript.json`
6. Speichern und Sheet neu laden
7. Das Menü **📅 Anwesenheit** erscheint oben

## Einrichtung

1. Klicke auf **📅 Anwesenheit → Plan erstellen / neu einrichten**
2. Füge deinen MCI ICS-Kalender-Link ein
3. Wähle deine Lehrveranstaltungen aus
4. Prüfe die Unterrichtseinheiten → Fertig!

## Lizenz

Dieses Tool erfordert eine Freischaltung. Kontaktiere den Entwickler für Zugang.