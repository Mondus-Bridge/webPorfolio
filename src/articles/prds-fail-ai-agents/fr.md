# Pourquoi les PRD échouent avec les agents d'IA : structurer la documentation pour les workflows agentiques

Le langage humain repose sur l'abstraction de haut niveau, alors que le code exige une logique opérationnelle précise. Lorsqu'on gère des agents d'IA de codage, cet écart entraîne des sorties désalignées et des itérations de prompts sans fin. Pour combler cet écart, vous avez besoin de deux choses : un vocabulaire de domaine structuré et des limites de projet clairement définies.

Dans le développement logiciel traditionnel (SDLC), le document d'exigences produit (PRD) sert de « source de vérité » entre les développeurs et les parties prenantes métier. Si un PRD standard fonctionne pour les ingénieurs humains, il échoue avec les agents d'IA. Les machines n'ont pas besoin d'intention métier de haut niveau — elles ont besoin de garde-fous contextuels et de règles opérationnelles claires.

Dans un workflow agentique, la documentation ne doit pas seulement énoncer quoi construire comme une source de vérité statique ; elle doit expliquer comment le système est structuré afin que vous gardiez le contrôle sur le processus de génération.

Pour tester ce concept, j'ai essayé d'exécuter le [workflow /to-prd de Matt Pocock](https://www.skills.sh/mattpocock/skills), mais il s'est rapidement transformé en gouffre temporel.

La [recommandation initiale était de générer automatiquement les PRD et d'en sauter la relecture](https://www.youtube.com/watch?v=-QFHIoCo-Ko), pour que le conseil pivote des mois plus tard vers [« supprimez la plupart de vos documents » à cause de la dérive documentaire](https://www.youtube.com/watch?v=Fj8DKMbdIzU). D'emblée, il n'y avait aucun sens à prendre au sérieux les conseils de Matt Pocock sur la documentation s'il recommandait de sauter complètement les relectures de documents.

Le test a confirmé mon intuition : les PRD traditionnels échouent avec les agents d'IA parce qu'ils sont écrits pour la compréhension humaine, pas pour l'exécution par machine. Les workflows machine exigent des termes de domaine structurés et des contraintes strictes de couches de projet, et non des gabarits PRD statiques.

À la place, j'ai construit une base de connaissances machine explicitement structurée directement dans le dépôt :

1. **Une carte dossier-à-agent (docs/README.md)**
   Au lieu de déverser tout le contexte dans le prompt, j'ai fourni un index dédié qui relie directement les zones fonctionnelles aux fichiers. Lorsqu'un agent entend des termes de domaine comme « weapon picker » ou « canonical mode », il sait précisément quel document dans docs/ lire à la demande.

2. **Garde-fous machine stricts (AGENTS.md)**
   J'ai défini des conventions explicites à chaque niveau (racine, backend, frontend, e2e). Par exemple, frontend/AGENTS.md impose un identifiant snake_case stable sur chaque élément interactif (theme_toggle_button, history_table). Cela donne aux agents des cibles exactes lors de la génération de code UI ou de l'exécution de tests Playwright.

3. **Sources de vérité uniques et solides**
   - **Contrats d'API :** docs/api/openapi.yaml agit comme le contrat strict — la logique backend est testée contre lui, et les types frontend sont auto-générés à partir de lui.
   - **Mathématiques de domaine et références amont :** les modèles et formules mathématiques (p. ex., réactions élémentaires et formules de dégâts) sont isolés sous docs/domain/, empêchant les agents d'« halluciner » la physique du jeu.

4. **Briefs de passation ciblés (requirements.md)**
   Chaque fois que je démarre un nouveau sous-agent, un brief d'architecture autonome lui donne l'état de conception actif pour qu'il ne gaspille pas de jetons à redériver toute la structure du monorepo.

Cela dit, il reste encore une marge d'amélioration évidente pour prévenir la dérive documentaire. Dans mon propre projet, un audit rapide a révélé que les prompts des agents référençaient encore plusieurs documents supprimés et des noms de fichiers obsolètes. En outre, des étapes automatisées clés — comme la génération des types TypeScript directement depuis openapi.yaml — n'étaient pas entièrement documentées dans l'index. Resserrer ces angles morts garantit que le système de ciblage « point précis » reste fiable à 100 % pour les nouveaux agents.

Les machines n'ont pas besoin d'exigences métier floues ; elles ont besoin d'un vocabulaire de domaine structuré, de chemins précis de fichiers/éléments et de limites opérationnelles claires.

Si vous voulez une génération de code prévisible, n'améliorez pas seulement vos prompts — architectez votre documentation pour l'ingestion machine.

📌 Je documente régulièrement mes expériences avec les agents d'IA, l'architecture logicielle et les workflows réels des développeurs. Consultez ma publication récente [ici](https://www.linkedin.com/feed/update/urn:li:activity:7500110090574856192/) pour plus d'idées sur la création d'applications complètes avec des configurations agentiques, et suivez mon profil pour de prochains décryptages.

---

*Lisez l'article original sur LinkedIn : [Pourquoi les PRD échouent avec les agents d'IA : structurer la documentation pour les workflows agentiques](https://www.linkedin.com/pulse/why-prds-fail-ai-agents-structuring-documentation-agentic-gabitov-1twhf/)*