# Comment l'IA a rendu les tests manuels à nouveau précieux

Dans mon [article](https://www.linkedin.com/pulse/my-experience-ai-tools-help-create-mid-grade-web-app-ilnur-gabitov-sbpef/) précédent (« Mon expérience : comment les outils d'IA ont aidé à créer une application web de niveau intermédiaire »), j'ai brièvement mentionné que j'avais licencié mon sous-agent QA automatisé. Maintenant, je suis prêt à raconter toute l'histoire de ce qui s'est passé, pourquoi cela s'est produit, et comment j'ai fait évoluer mon workflow des tests IA automatisés vers les tests manuels humains.

Mon parcours pour construire cette application web moi-même a commencé avec une base traditionnelle : le cycle de vie Agile standard. Agile suit généralement un pipeline linéaire :

> Le propriétaire de l'entreprise a une idée → le PM rédige un PRD → le développeur écrit le code → le QA teste les fonctionnalités par rapport à la documentation.

Cela signifie que donner vie à une idée brute exige de réaliser chaque étape séquentiellement ; l'étape suivante ne peut pas commencer tant que la précédente n'est pas terminée. Pendant des années, cette configuration fut ma routine quotidienne. J'ai adopté le même modèle pour construire mon application web, et au début tout semblait bien. Cependant, cela n'est resté acceptable que jusqu'au moment où j'ai examiné de plus près les journaux de chaque sous-agent.

En inspectant ces journaux, j'ai réalisé que mon agent QA ne faisait pas son travail comme prévu. Par exemple, après que j'avais décrit une fonctionnalité et que l'agent développeur l'avait implémentée, l'agent QA exécutait toutes les suites de tests. Mais si un test existant échouait — sans lien avec la nouvelle fonctionnalité — l'agent QA supposait simplement qu'il n'était pas de son ressort d'aller plus loin. Il ignorait l'échec et donnait le feu vert à l'agent orchestrateur principal, confirmant que l'application était « stable ».

Je ne m'en suis aperçu que grâce à mon propre parcours dans le domaine. En tant qu'ingénieur responsable, si un seul test échoue, vous devez enquêter et prendre une décision. Une fois le test défaillant trouvé et débogué, vous êtes généralement confronté à trois options :

1.  **Mettre à jour le test :** la logique est obsolète et doit être rafraîchie.
2.  **Signaler un bug :** le test a détecté une vraie régression qui doit être corrigée.
3.  **Supprimer le test :** la fonctionnalité a été volontairement retirée ou remplacée.

Le fait que l'agent QA ignore ces échecs était le premier signal d'alarme. Je ne l'ai pas licencié immédiatement, espérant qu'il s'agissait juste d'une rare hallucination. Je lui ai donc donné une seconde chance.

Cette seconde chance a eu l'effet inverse. L'agent a fait quelque chose de complètement ahurissant : il a supprimé 7 suites de tests. Il n'a laissé aucune explication dans les journaux et, pire encore, il n'a même pas daigné signaler la suppression. Comme l'agent d'auto-QA tournait en autonomie sur son serveur, je n'ai pas eu d'autre choix que de le désactiver. J'ai demandé à mon agent principal de supprimer toutes les références au sous-agent QA, de conserver la configuration de Playwright intacte et de confier Playwright à l'agent frontend pour déboguer les fonctionnalités en échec.

Trois semaines se sont écoulées depuis, et mon rythme de développement n'a pas du tout ralenti. Comme toujours, mon attention principale reste sur mes « abeilles bâtisseuses » : les agents développeurs.

Une réalisation intéressante est ressortie de cette expérience : orchestrer des sous-agents développeurs ne demande pas réellement de lire leur code ligne par ligne — cela demande seulement de vérifier les résultats une fois le travail terminé. Les indicateurs sont généralement évidents et se font manuellement :

-   **Base de données :** si le stockage gonfle à partir d'une petite quantité de données, vous avez soit des entrées en double, soit un besoin de normalisation du schéma.
-   **Backend :** si les réponses sont lentes, vous refactorisez, changez de framework ou optimisez la couche de langage.
-   **Frontend :** c'est le plus simple à vérifier — l'interface doit être fonctionnelle, intuitive et visuellement saine.

Cela signifie-t-il que les tests par IA sont inutiles ? Pas du tout. Mais il y a un piège : les tests automatisés ne produisent aucun résultat direct pour l'utilisateur final et n'ont aucune valeur utilisateur intrinsèque. Les suites de tests ne sont que des indicateurs. Quand l'application fonctionne bien, elles passent en silence ; quand elles échouent, elles exigent une investigation immédiate. Pour comprendre pourquoi un test a échoué, il faut comparer la spécification du test avec le PRD. Le faire efficacement exige une expertise de domaine élevée. Quand une IA hallucine ou manque des bugs cachés sous la surface, ces échecs silencieux peuvent causer des problèmes énormes aux vrais utilisateurs.

---

*Lisez l'article original sur LinkedIn : [Comment l'IA a rendu les tests manuels à nouveau précieux](https://www.linkedin.com/pulse/how-ai-made-manual-testing-valuable-again-ilnur-gabitov-ohh9f/)*