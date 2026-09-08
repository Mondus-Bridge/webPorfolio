# Warum PRDs bei KI-Agenten scheitern: Dokumentation für agentische Workflows strukturieren

Menschliche Sprache beruht auf Abstraktion auf hoher Ebene, während Code präzise operative Logik verlangt. Bei der Verwaltung von KI-Coding-Agenten führt diese Kluft zu unausgerichteten Ergebnissen und endlosen Prompt-Iterationen. Um diese Kluft zu überbrücken, brauchen Sie zwei Dinge: ein strukturiertes Fachvokabular und klar definierte Projektgrenzen.

In der traditionellen Softwareentwicklung (SDLC) dient das Produktanforderungsdokument (PRD) als „Quelle der Wahrheit" zwischen Entwicklern und Business-Stakeholdern. Während ein Standard-PRD für menschliche Ingenieure funktioniert, scheitert es bei KI-Agenten. Maschinen brauchen keine High-Level-Business-Absicht — sie brauchen kontextuelle Leitplanken und klare operative Regeln.

In einem agentischen Workflow sollte die Dokumentation nicht nur statisch beschreiben, was zu bauen ist; sie muss erklären, wie das System strukturiert ist, damit Sie die Kontrolle über den Generierungsprozess behalten.

Um dieses Konzept zu testen, versuchte ich, den [/to-prd-Workflow von Matt Pocock](https://www.skills.sh/mattpocock/skills) auszuführen, aber er entwickelte sich schnell zu einem Zeitfresser.

Die [anfängliche Empfehlung war, PRDs automatisch zu generieren und deren Review zu überspringen](https://www.youtube.com/watch?v=-QFHIoCo-Ko), nur um Monate später zu [„löschen Sie die meisten Ihrer Dokumente" wegen Dokumentationsdrift](https://www.youtube.com/watch?v=Fj8DKMbdIzU) überzugehen. Von Anfang an ergab es keinen Sinn, Matt Pococks Ratschläge zur Dokumentation ernst zu nehmen, wenn er empfahl, Dokumenten-Reviews komplett zu überspringen.

Der Test bestätigte meinen Verdacht: Herkömmliche PRDs scheitern bei KI-Agenten, weil sie für menschliches Verständnis geschrieben sind, nicht für maschinelle Ausführung. Maschinelle Workflows erfordern strukturierte Domänenbegriffe und strenge Projekt-Ebenen-Einschränkungen, keine statischen PRD-Vorlagen.

Stattdessen habe ich direkt im Repository eine explizit strukturierte maschinenlesbare Wissensbasis aufgebaut:

1. **Eine Ordner-zu-Agent-Karte (docs/README.md)**
   Statt den gesamten Kontext in den Prompt zu kippen, habe ich einen dedizierten Index bereitgestellt, der Funktionsbereiche direkt Dateien zuordnet. Wenn ein Agent Domänenbegriffe wie „weapon picker" oder „canonical mode" hört, weiß er genau, welches Dokument unter docs/ er bei Bedarf lesen muss.

2. **Strenge maschinelle Leitplanken (AGENTS.md)**
   Ich habe auf jeder Ebene (Root, Backend, Frontend, e2e) explizite Konventionen definiert. Beispielsweise schreibt frontend/AGENTS.md eine stabile snake_case-ID für jedes interaktive Element vor (theme_toggle_button, history_table). Das gibt Agenten präzise Ziele bei der Generierung von UI-Code oder beim Ausführen von Playwright-Tests.

3. **Harte Single Sources of Truth**
   - **API-Verträge:** docs/api/openapi.yaml fungiert als strikter Vertrag — Backend-Logik wird dagegen getestet und Frontend-Typen werden daraus automatisch generiert.
   - **Domänen-Mathematik & Upstream-Referenzen:** Mathematische Modelle und Formeln (z. B. Elementarreaktionen und Schadensformeln) sind unter docs/domain/ isoliert, sodass Agenten keine Spielphysik „halluzinieren" können.

4. **Fokussierte Übergabe-Briefs (requirements.md)**
   Immer wenn ich einen neuen Subagenten starte, gibt ihm ein in sich geschlossener Architektur-Brief den aktiven Designzustand, damit er keine Tokens verschwendet, um die gesamte Monorepo-Struktur neu abzuleiten.

Das heißt, es gibt weiterhin klar Raum für Verbesserungen bei der Verhinderung von Dokumentationsdrift. In meinem eigenen Projekt zeigte ein schnelles Audit, dass Agenten-Prompts immer noch auf mehrere gelöschte Dokumente und veraltete Dateinamen verwiesen. Außerdem waren wichtige automatisierte Schritte — wie das direkte Generieren von TypeScript-Typen aus openapi.yaml — nicht vollständig im Index dokumentiert. Das Straffen dieser losen Enden stellt sicher, dass das „präzise Punkt"-Zielsystem für neue Agenten zu 100 % zuverlässig bleibt.

Maschinen brauchen keine aufgebauschten Business-Anforderungen; sie brauchen ein strukturiertes Domänenvokabular, präzise Datei-/Elementpfade und klare operative Grenzen.

Wenn Sie vorhersagbare Codegenerierung wünschen, verbessern Sie nicht nur Ihre Prompts — architektieren Sie Ihre Dokumentation für maschinelle Verarbeitung.

📌 Ich dokumentiere regelmäßig meine Experimente mit KI-Agenten, Softwarearchitektur und realen Entwickler-Workflows. Schauen Sie sich meinen jüngsten Beitrag [hier](https://www.linkedin.com/feed/update/urn:li:activity:7500110090574856192/) an, um weitere Einblicke in das Erstellen vollständiger Apps mit agentischen Setups zu erhalten, und folgen Sie meinem Profil für kommende Aufschlüsselungen.

---

*Lies den Originalartikel auf LinkedIn: [Warum PRDs bei KI-Agenten scheitern: Dokumentation für agentische Workflows strukturieren](https://www.linkedin.com/pulse/why-prds-fail-ai-agents-structuring-documentation-agentic-gabitov-1twhf/)*