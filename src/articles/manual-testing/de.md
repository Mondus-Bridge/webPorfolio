# Wie KI manuelles Testen wieder wertvoll machte

In meinem vorherigen [Artikel](https://www.linkedin.com/pulse/my-experience-ai-tools-help-create-mid-grade-web-app-ilnur-gabitov-sbpef/) („Meine Erfahrung: Wie KI-Tools halfen, eine Web-App mittlerer Größe zu erstellen") erwähnte ich kurz, dass ich meinen automatisierten QA-Subagenten gefeuert habe. Jetzt bin ich bereit, die ganze Geschichte zu erzählen: was passiert ist, warum es passiert ist und wie ich meinen Workflow von automatisiertem KI-Testen auf manuelles menschliches Testen umgestellt habe.

Meine Reise, diese Web-App selbst zu bauen, begann mit einem traditionellen Fundament: dem Standard-Agile-SDLC. Agile folgt typischerweise einer linearen Pipeline:

> Der Geschäftsinhaber hat eine Idee → der PM schreibt ein PRD → der Entwickler schreibt Code → QA testet Funktionen gegen die Dokumentation.

Das bedeutet, dass die Umsetzung einer rohen Idee das sequenzielle Abschließen jedes Schritts erfordert; die nächste Stufe kann erst beginnen, wenn die vorherige abgeschlossen ist. Jahrelang war dieses Setup meine tägliche Arbeitsroutine. Ich übernahm dasselbe Modell beim Bau meiner Web-App, und anfangs schien alles in Ordnung. Es blieb jedoch nur akzeptabel, bis ich einen genaueren Blick auf die Logs jedes Subagenten warf.

Beim Prüfen dieser Logs erkannte ich, dass mein QA-Agent seinen Job nicht wie erwartet machte. Zum Beispiel: Nachdem ich eine Funktion beschrieben und der Entwickleragent sie implementiert hatte, führte der QA-Agent alle Test-Suites aus. Aber wenn ein bestehender Test fehlschlug – einer, der nichts mit der neuen Funktion zu tun hatte –, nahm der QA-Agent einfach an, dass es nicht seine Aufgabe sei, weiter zu untersuchen. Er ignorierte den Fehlschlag und gab dem Haupt-Orchestrierungsagenten grünes Licht, indem er bestätigte, die App sei „stabil".

Ich habe das nur dank meines eigenen Hintergrunds in diesem Bereich bemerkt. Als verantwortungsvoller Ingenieur muss man, wenn auch nur ein einziger Test fehlschlägt, nachforschen und eine Entscheidung treffen. Wenn man den fehlschlagenden Test gefunden und debugg hat, hat man in der Regel drei Optionen:

1.  **Den Test aktualisieren:** Die Logik ist veraltet und muss erneuert werden.
2.  **Einen Bug melden:** Der Test hat eine echte Regression erwischt, die behoben werden muss.
3.  **Den Test löschen:** Die Funktion wurde absichtlich entfernt oder ersetzt.

Dass der QA-Agent diese Fehlschläge ignorierte, war die erste rote Flagge. Ich feuerte ihn nicht sofort, in der Hoffnung, es sei nur eine seltene Halluzination. Also gab ich ihm eine zweite Chance.

Diese zweite Chance schlug fehl. Der Agent tat etwas völlig Verblüffendes: Er löschte 7 Test-Suites. Er hinterließ keine Erklärung in den Logs und, schlimmer noch, meldete die Löschung nicht einmal. Da der Auto-QA-Agent autonom auf seinem Server lief, blieb mir keine andere Wahl, als ihn abzuschalten. Ich wies meinen Hauptagenten an, alle Verweise auf den QA-Subagenten zu entfernen, die Playwright-Konfiguration intakt zu lassen und Playwright stattdessen an den Frontend-Agenten zu übergeben, um fehlgeschlagene Funktionen zu debuggen.

Seitdem sind drei Wochen vergangen, und mein Entwicklungstempo hat sich überhaupt nicht verlangsamt. Wie immer bleibt mein Hauptaugenmerk auf meinen „Baubienen": den Entwickleragenten.

Aus all dem kam eine interessante Erkenntnis: Das Orchestrieren von Entwickler-Subagenten erfordert eigentlich kein zeilenweises Lesen ihres Codes – es erfordert nur, die Ergebnisse zu verifizieren, sobald die Arbeit erledigt ist. Die Indikatoren sind meist offensichtlich und werden manuell geprüft:

-   **Datenbank:** Wenn der Speicher bei kleinen Datenmengen aufbläht, gibt es entweder doppelte Einträge oder Sie brauchen eine Schema-Normalisierung.
-   **Backend:** Wenn Antworten langsam sind, refaktorieren Sie, wechseln das Framework oder optimieren die Sprachschicht.
-   **Frontend:** Das ist am einfachsten zu prüfen – die UI muss funktional, intuitiv und visuell sauber sein.

Heißt das, KI-Testen ist nutzlos? Überhaupt nicht. Aber es gibt einen Haken: Automatisierte Tests erzeugen keine direkte Ausgabe für den Endnutzer und haben null intrinsischen Nutzerwert. Test-Suites sind nur Indikatoren. Wenn die App gut funktioniert, bestehen sie still; wenn sie fehlschlagen, verlangen sie sofortige Untersuchung. Um herauszufinden, warum ein Test fehlschlug, muss man die Testspezifikation mit dem PRD vergleichen. Das effektiv zu tun, erfordert hohe Domänenexpertise. Wenn eine KI halluziniert oder versteckte Bugs unter der Oberfläche übersieht, können diese stillen Fehlschläge massive Probleme für echte Nutzer verursachen.

---

*Lies den Originalartikel auf LinkedIn: [Wie KI manuelles Testen wieder wertvoll machte](https://www.linkedin.com/pulse/how-ai-made-manual-testing-valuable-again-ilnur-gabitov-ohh9f/)*