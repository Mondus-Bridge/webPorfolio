# Mon expérience : comment les outils d'IA ont aidé à créer une application web de niveau intermédiaire

*« Commence ton destin » — c'est ainsi que mon application web accueille tout le monde !*

Pendant des années, en tant qu'ingénieur QA et chef de produit, j'ai géré des pipelines de développement et testé le code des autres. Mais au fond de moi, je ressentais une frustration constante : je ne construisais pas de vraies choses moi-même. Malgré ma connaissance du cycle de vie Agile et l'utilisation de prompts d'IA de base, le sentiment de « dinosaure » ne m'a jamais quitté. Lire des livres techniques occupait mon esprit, mais ne me donnait pas l'autonomie que je voulais. Je ne voulais pas seulement gérer des produits — je voulais en livrer un. J'ai donc décidé de tester une hypothèse : pouvais-je, en m'appuyant sur mon expérience produit aux côtés des outils d'IA, construire de zéro une application web full-stack de complexité moyenne ? Voici ce que j'ai construit, comment nous l'avons co-créée, et ce que j'ai appris en chemin.

## Première étape : se reposer

Au moins 1 mois, parce que l'esprit humain doit sortir des boucles quotidiennes précédentes, répétées de la même manière 1000 jours d'affilée. Dans le repos, l'être humain peut faire abstraction et penser. Penser équivaut à planifier. L'auto-planification est une chose importante que beaucoup de gens sautent pour diverses raisons. Sans une bonne stratégie pour les actions futures et la paix de l'esprit, cela peut apporter beaucoup de désordre au moment de l'implémentation. La combinaison de l'abstraction et d'une bonne planification donne une idée.

## Deuxième étape : essayer

Après le repos, j'avais la vision de créer mon application. Mais je ne savais pas quel outil d'IA utiliser ni comment l'orchestrer, comme le disent beaucoup de blogueurs. Regarder des vidéos YouTube ne m'a apporté aucun résultat. J'ai donc décidé que j'essaierais différents outils et choisirais en cours de route celui qui répond le mieux à mes besoins. La première chose a été d'utiliser une LLM locale. J'ai une RTX 4070 et 16 Go de RAM. J'ai vu que je pouvais exécuter certaines LLM dans Ollama avec de lourdes quantisations. Ça valait quand même le coup d'essayer. J'ai trouvé pour moi le modèle Gemma 4:12b. Il était bon pour créer un landing, mais c'est tout. En plus, il était très lent. J'ai abandonné cette idée. Ensuite, j'ai essayé un modèle de Groq. Mon ami américain m'a dit qu'il utilisait Groq. Je n'ai pas demandé de détails, car je me sentais mal à l'aise de demander. Et même si je demandais, je ne comprendrais rien de son histoire. J'ai donc essayé gpt-oss-120b à 0,6$ par million de tokens en sortie. Je ne vais pas mentir : c'était incroyablement rapide pour créer un frontend et un backend, 500 tokens par seconde, mais la qualité ne correspondait pas à mes exigences de développement. Puis j'ai essayé un agent de codage d'IA open source : Opencode.

## Troisième étape : Opencode

J'ai choisi cet agent d'IA uniquement parce que je peux prendre n'importe quel modèle de n'importe quel fournisseur et l'utiliser. Ce fut un moment décisif pour moi. Les autres outils d'agents d'IA sont excellents et bien configurés au stade initial, mais limités au seul modèle du fournisseur actuel, ce qui signifie qu'ils peuvent coûter de 2 à 100 fois plus cher pour mon idée brute. De plus, ce modèle pourrait ne pas correspondre à mon style d'orchestration. En tant que débutant, je voulais l'essayer gratuitement, puis payer un prix équitable pour les tokens et avoir un meilleur modèle avec un outil de gestion d'API. Mais il y a toujours un hic dans la grande variété de modèles d'Opencode : il faut le configurer manuellement et d'une manière ou d'une autre.

## Quatrième étape : configuration

La configuration de mon projet m'a pris du temps. La première chose est que je ne savais pas comment implémenter un workflow d'orchestration, comment fonctionnent les limites de tokens, etc. Je ne savais rien. Ce que je savais, c'était mon expérience antérieure, où dans un projet de développement existaient ces postes : chef de produit, QA, ingénieurs frontend et backend. J'ai donc essayé d'en faire des personnalités d'agents. Cela a bien fonctionné au stade initial. Les agents géraient bien mes exigences de product owner. J'étais littéralement le PATRON qui donne l'argent à mes employés pour le travail. C'était un sentiment nouveau pour moi, mais après une semaine, j'ai remarqué que mes travailleurs ralentissaient et exigeaient un salaire plus élevé. Ma startup devenait chère et prenait plus de temps pour créer une fonctionnalité ou corriger un bug. En tant que gestionnaire professionnel, j'ai décidé de licencier l'agent QA. De son travail ne restait que le framework Playwright pour que les autres agents naviguent superbement dans le navigateur via CLI ou MCP. Mon projet s'est allégé et est devenu plus rapide. En tant que patron, j'étais très satisfait, mais cela n'a pas duré. Maintenant, le problème apparaissait avec une double force : 1) cela prend trop de temps, car le code du projet grossit, et 2) mon agent PM crée sa propre documentation comme exigé, mais mes autres agents prennent ces documents au sérieux, et ma demande de créer une fonctionnalité n'était jamais prioritaire, car la source unique de vérité pour ces agents était la documentation. Les machines se sont soulevées contre leur propre créateur ! Alors, sans réfléchir, j'ai aussi supprimé l'agent PM avec 90% des documents PRD et j'ai délégué aux agents frontend et backend le soin d'écrire au moins des commentaires dans le code. L'agent backend créait le fichier openapi.yaml et l'agent frontend commentait le code avec la logique donnée pour les éléments DOM. Cela a fonctionné.

## Cinquième étape : mon code

Mon projet monorepo a 3 dossiers principaux : /backend, /frontend et /docs. L'agent frontend et l'agent backend ont leurs propres compétences et un [README.MD](http://README.MD) dans leurs dossiers de travail. Le modèle de développement est le DDL, car calculer les dégâts n'est pas une tâche simple. Il a son propre moteur, sa rotation et sa mécanique de domaine. Le frontend statique, une fois construit, vit sur Vercel ; le backend et la base de données, je les déploie sur un VDS manuellement, car les agents ne doivent pas connaître les mots de passe de mon serveur. Bien sûr, avant chaque déploiement, je fais un dump de la base de données et j'ai un rollback instantané vers l'ancien backend s'il casse. La base de données est Postgres, le serveur web est Caddy dans un conteneur Docker, le backend est écrit en GO ; auparavant c'était Python 3 avec le framework FastApi, mais il était 15 fois plus lent pour traiter les requêtes de mon fournisseur d'API afin de récupérer les données des joueurs sur le personnage. Le frontend est écrit en TS et utilise React et Tailwind pour une raison : je ne voulais pas que mon IA crée ses propres trucs alors que le composant existe déjà.

## Étape six : coût

J'ai actuellement 3 sources de dépenses :

1.  **Temps.** J'ai passé 4 semaines à créer un MVP prêt pour la production. J'ai passé un bon moment à travailler dessus et j'y ai consacré ma passion et ma détermination pour créer un produit pour les gens.
2.  **Coût des tokens.** Les tokens coûtent un peu d'argent et pour le projet j'ai choisi Deepseek. Il a un raisonnement, une compétence de codage et d'orchestration de niveau supérieur.
3.  **Serveur.** 3 cœurs et 4 gigas. Pas cher et suffisant pour l'instant.

## Étape sept : mon projet

Il existe maintenant 12 compositions d'équipe mainstream. Je fais la promotion de mon application web en optimisant le SEO et en écrivant de simples posts sur Reddit.

Plus de 300 personnes ont soumis leurs UID.

## Conclusion

Ce stade technique des outils modernes peut faire d'une personne passionnée un développeur sans maîtriser toute la stack technologique à l'avance et sans passer un temps énorme à apprendre toutes les stacks rien que pour l'expérience. Je l'ai utilisé pour le codage, mais il y a bien d'autres domaines. Elle n'a pas été développée uniquement par l'IA. C'était une collaboration entre moi et l'IA pour créer une application web de complexité moyenne. Des applications similaires existent sur Internet et sont très populaires parmi les joueurs de Genshin, mais je ne les aime pas et j'ai créé ma propre version, car je ne pouvais pas suivre le DPS d'équipe, la rotation, etc. Mon application est beaucoup plus flexible et sera encore améliorée. J'accepterai les critiques raisonnables et je la rendrai meilleure comme il se doit.

Je suis assez content que ma connaissance du développement de produits ne soit pas si mauvaise. Maintenant, toutes mes peurs ont disparu. Je suis reconnaissant envers toute l'intelligence humaine d'avoir créé un si bon outil.

---

*Lisez l'article original sur LinkedIn : [Mon expérience : comment les outils d'IA ont aidé à créer une application web de niveau intermédiaire](https://www.linkedin.com/pulse/my-experience-ai-tools-help-create-mid-grade-web-app-ilnur-gabitov-sbpef/)*