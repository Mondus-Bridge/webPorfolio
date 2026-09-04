# Meine Erfahrung: Wie KI-Tools halfen, eine Web-App mittlerer Größe zu erstellen

*„Beginne dein Schicksal" – so begrüßt meine Web-App jeden!*

Jahrelang habe ich als QA-Ingenieur und PM Entwickler-Pipelines verwaltet und den Code anderer Leute getestet. Doch tief in mir spürte ich eine ständige Frustration: Ich baute selbst keine echten Dinge. Trotz meiner Kenntnis von Agile SDLC und einfacher KI-Prompts verließ mich das „Dinosaurier-Gefühl" nie. Technische Bücher zu lesen hielt meinen Kopf beschäftigt, gab mir aber nicht die Selbstbestimmung, die ich wollte. Ich wollte nicht nur Produkte managen – ich wollte eines liefern. Also beschloss ich, eine Hypothese zu testen: Konnte ich meinen Produkt-Hintergrund zusammen mit KI-Tools nutzen, um von Grund auf eine Full-Stack-Web-App mittlerer Komplexität zu bauen? Hier ist, was ich gebaut habe, wie wir es gemeinsam erschaffen haben und was ich dabei gelernt habe.

## Erster Schritt: Ruhe

Mindestens 1 Monat, denn der menschliche Geist muss aus den bisherigen täglichen Schleifen herauskommen, die 1000 Tage in Folge auf dieselbe Weise wiederholt wurden. In der Ruhe kann der Mensch abstrahieren und denken. Denken ist gleichbedeutend mit Planen. Selbstplanung ist eine wichtige Sache, die viele Menschen aus verschiedenen Gründen überspringen. Ohne eine gute Strategie für zukünftige Handlungen und inneren Frieden kann im Moment der Umsetzung viel Durcheinander entstehen. Die Kombination aus Abstraktion und guter Planung ergibt eine Idee.

## Zweiter Schritt: Ausprobieren

Nach der Ruhe hatte ich die Vision, meine App zu erstellen. Aber ich wusste nicht, welches KI-Tool ich verwenden und wie ich es orchestrieren sollte, wie viele Blogger sagen. Das Ansehen von YouTube-Videos brachte mir kein Ergebnis. Also beschloss ich, verschiedene Tools auszuprobieren und dabei das beste für meine Anforderungen zu wählen. Das Erste war der Einsatz eines lokalen LLM. Ich habe eine RTX 4070 und 16 GB RAM. Ich sah, dass ich einige LLMs in Ollama mit starker Quantisierung ausführen kann. Einen Versuch war es trotzdem wert. Ich fand für mich das Modell Gemma 4:12b. Es war gut, um ein Landing zu erstellen, aber das war's. Außerdem war es so langsam. Ich gab die Idee auf. Als Nächstes probierte ich ein Modell von Groq. Mein amerikanischer Freund erzählte mir, dass er Groq nutzt. Ich fragte nicht nach Details, weil es mir unangenehm war zu fragen. Und selbst wenn ich gefragt hätte, hätte ich aus seiner Geschichte nichts verstanden. Also probierte ich gpt-oss-120b mit 0,6 $ pro Million Output-Tokens. Ich will nicht lügen: Es war unfassbar schnell, um Frontend und Backend zu erstellen – 500 Tokens pro Sekunde –, aber die Qualität passte nicht zu meinen Entwicklungsanforderungen. Dann probierte ich den Open-Source-KI-Coding-Agenten: Opencode.

## Dritter Schritt: Opencode

Ich wählte diesen KI-Agenten nur, weil ich jedes Modell von jedem Anbieter nehmen und verwenden kann. Das war der entscheidende Moment für mich. Andere KI-Agent-Tools sind großartig und in der Anfangsphase gut konfiguriert, aber auf das aktuelle Anbietermodell beschränkt, was bedeutet: Sie können für meine rohe Idee 2-100 Mal teurer sein. Außerdem könnte dieses Modell nicht zu meinem Orchestrierungsstil passen. Als Neuling wollte ich es kostenlos ausprobieren und später einen fairen Preis für Tokens zahlen und ein besseres Modell mit API-Verwaltungstool haben. Aber bei der großen Modellvielfalt in Opencode gibt es immer einen Haken: Man muss es manuell und irgendwie konfigurieren.

## Vierter Schritt: Konfiguration

Die Konfiguration meines Projekts dauerte eine Weile. Das Erste war, dass ich nicht wusste, wie ich einen Orchestrierungs-Workflow umsetze, wie Token-Limits funktionieren usw. Ich wusste nichts. Was ich wusste, war meine bisherige Erfahrung, wo es in einem Entwicklungsprojekt diese Positionen gab: Produktmanager, QA, Frontend- und Backend-Ingenieure. Also versuchte ich, sie als Agenten-Persönlichkeiten zu modellieren. In der Anfangsphase funktionierte das gut. Die Agenten behandelten meine Product-Owner-Anforderungen gut. Ich war buchstäblich der BOSS, der seinen Mitarbeitern Geld für die Arbeit gibt. Es war ein neues Gefühl für mich, aber nach einer Woche merkte ich, dass meine Arbeiter langsamer wurden und ein höheres Gehalt verlangten. Mein Startup wurde teuer und brauchte länger für ein Feature oder einen Bugfix. Als professioneller Manager beschloss ich, den QA-Agenten zu feuern. Von seiner Arbeit blieb nur das Framework Playwright für die anderen Agenten übrig – für eine großartige Browser-Navigation über CLI oder MCP. Mein Projekt wurde entlastet und schneller. Als Boss war ich sehr zufrieden, aber das hielt nicht lange an. Nun trat das Problem mit doppelter Kraft auf: 1) Es dauert zu lange, weil der Projektcode wächst, und 2) mein PM-Agent erstellt wie gefordert eine eigene Dokumentation, aber meine verbleibenden Agenten nehmen diese Doku ernst, und meine Bitte, ein Feature zu erstellen, war nie an erster Stelle, denn die einzige Quelle der Wahrheit für diese Agenten war die Dokumentation. Die Maschinen erhoben sich gegen ihren eigenen Schöpfer! Also entfernte ich ohne Zögern auch den PM-Agenten samt 90 % der PRD-Dokumente und übertrug es den Frontend- und Backend-Agenten, wenigstens Kommentare im Code selbst zu schreiben. Der Backend-Agent erstellte die Datei openapi.yaml und der Frontend-Agent kommentierte den Code mit der gegebenen Logik für DOM-Elemente. Es funktionierte.

## Fünfter Schritt: Mein Code

Mein Monorepo-Projekt hat 3 Hauptordner: /backend, /frontend und /docs. Der Frontend-Agent und der Backend-Agent haben eigene Skills und eine [README.MD](http://README.MD) in ihren Arbeitsordnern. Das Entwicklungsmodell ist DDL, denn Schaden zu berechnen ist keine einfache Aufgabe. Es hat eine eigene Engine, Rotation und Domänen-Mechanik. Das statische Frontend lebt nach dem Build auf Vercel, und Backend und DB deploye ich manuell auf dem VDS, denn die Agenten sollen die Passwörter meines Servers nicht kennen. Natürlich mache ich vor jedem Deployment einen DB-Dump und kann bei einem Bruch sofort auf das alte Backend zurückrollen. Die DB ist Postgres, der Webserver ist Caddy in einem Docker-Container, das Backend ist in GO geschrieben; zuvor war es Python 3 mit dem FastApi-Framework, aber es war 15-mal langsamer bei der Verarbeitung von Anfragen meines API-Anbieters zum Abrufen von Spielerdaten über den Charakter. Das Frontend ist in TS geschrieben und nutzt React und Tailwind aus einem Grund: Ich wollte nicht, dass meine KI eigene Sachen erstellt, wenn die Komponente bereits existiert.

## Schritt sechs: Kosten

Aktuell habe ich 3 Ausgabenquellen:

1.  **Zeit.** Ich habe 4 Wochen gebraucht, um ein produktionsreifes MVP zu erstellen. Ich hatte eine gute Zeit dabei und widmete meine Leidenschaft und Entschlossenheit, um ein Produkt für Menschen zu schaffen.
2.  **Kosten für Tokens.** Tokens kosten etwas Geld, und für das Projekt habe ich Deepseek gewählt. Es hat Reasoning, Coding- und Orchestrierungs-Fähigkeiten auf Top-Niveau.
3.  **Server.** 3 Kerne und 4 Gig. Günstig und für jetzt passend.

## Schritt sieben: Mein Projekt

Momentan existieren 12 Mainstream-Teamcomps. Ich bewerbe meine Web-App durch SEO-Optimierung und schreibe einfache Posts auf Reddit.

Mehr als 300 Menschen haben ihre UIDs eingereicht.

## Fazit

Dieses technische Stadium moderner Tools kann einen leidenschaftlichen Menschen zum Entwickler machen, ohne vorab jeden Tech-Stack zu meistern und ohne enorme Zeit damit zu verbringen, alle Tech-Stacks nur für Erfahrung zu lernen. Ich nutzte es fürs Coding, aber es gibt viele andere Bereiche. Sie wurde nicht nur von KI entwickelt. Es war eine Zusammenarbeit zwischen mir und der KI, um eine Web-App mittlerer Komplexität zu erstellen. Ähnliche Apps gibt es im Internet, und sie sind unter Genshin-Spielern recht beliebt, aber ich mag sie nicht, und ich habe meine eigene Version erstellt, weil ich Team-DPS, Rotation usw. nicht verfolgen konnte. Meine App ist viel flexibler und wird weiter verbessert. Ich nehme vernünftige Kritik an und mache sie besser, wie es sein sollte.

Ich bin ziemlich froh, dass mein Wissen über Produktentwicklung gar nicht so schlecht war. Jetzt sind alle meine Ängste verschwunden. Ich bin dankbar gegenüber aller menschlichen Intelligenz für die Schaffung eines so guten Werkzeugs.

---

*Lies den Originalartikel auf LinkedIn: [Meine Erfahrung: Wie KI-Tools halfen, eine Web-App mittlerer Größe zu erstellen](https://www.linkedin.com/pulse/my-experience-ai-tools-help-create-mid-grade-web-app-ilnur-gabitov-sbpef/)*