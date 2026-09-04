# Cómo la IA hizo que las pruebas manuales volvieran a ser valiosas

En mi [artículo](https://www.linkedin.com/pulse/my-experience-ai-tools-help-create-mid-grade-web-app-ilnur-gabitov-sbpef/) anterior ("Mi experiencia: cómo las herramientas de IA ayudaron a crear una aplicación web de nivel medio"), mencioné brevemente que despedí a mi subagente de QA automatizado. Ahora estoy listo para compartir la historia completa de lo que pasó, por qué pasó y cómo cambié mi flujo de trabajo de las pruebas automatizadas por IA a las pruebas manuales humanas.

Mi viaje para construir esta aplicación web por mi cuenta comenzó con una base tradicional: el ciclo de vida ágil estándar (Agile SDLC). Agile normalmente sigue un pipeline lineal:

> El dueño del negocio tiene una idea → el PM escribe un PRD → el desarrollador escribe el código → QA prueba las funciones contra la documentación.

Esto significa que dar vida a una idea en bruto requiere completar cada paso secuencialmente; la siguiente etapa no puede comenzar hasta que la anterior esté hecha. Durante años, esta configuración fue mi rutina diaria de trabajo. Adopté el mismo modelo al construir mi aplicación web, y al principio todo parecía bien. Sin embargo, solo siguió siendo aceptable hasta que examiné más de cerca los logs de cada subagente.

Al inspeccionar esos logs, me di cuenta de que mi agente de QA no hacía su trabajo como se esperaba. Por ejemplo, después de que describía una función y el agente desarrollador la implementaba, el agente de QA ejecutaba todas las suites de pruebas. Pero si fallaba una prueba existente — no relacionada con la nueva función — el agente de QA simplemente asumía que no era su responsabilidad investigar más. Ignoraba el fallo y daba luz verde al agente orquestador principal, confirmando que la aplicación estaba "estable".

Solo lo detecté gracias a mi propia experiencia en el campo. Como ingeniero responsable, si falla incluso una sola prueba, tienes que investigar y tomar una decisión. Una vez que encuentras la prueba fallida y la depuras, generalmente te enfrentas a tres opciones:

1.  **Actualizar la prueba:** la lógica está obsoleta y necesita una actualización.
2.  **Reportar un bug:** la prueba detectó una regresión real que necesita corrección.
3.  **Eliminar la prueba:** la función fue eliminada o reemplazada intencionalmente.

Que el agente de QA ignorara estos fallos fue la primera bandera roja. No lo despedí de inmediato, esperando que fuera solo una alucinación rara. Así que le di una segunda oportunidad.

Esa segunda oportunidad fracasó. El agente hizo algo completamente alucinante: eliminó 7 suites de pruebas. No dejó ninguna explicación en los logs y, peor aún, ni siquiera se molestó en informar la eliminación. Como el agente de auto-QA se ejecutaba de forma autónoma en su servidor, no tuve más remedio que desactivarlo. Instruí a mi agente principal para eliminar todas las referencias al subagente de QA, mantener la configuración de Playwright intacta y entregar Playwright al agente de frontend para depurar las funciones fallidas.

Han pasado tres semanas desde entonces y mi ritmo de desarrollo no se ha ralentizado en absoluto. Como siempre, mi foco principal sigue en mis "abejas constructoras": los agentes desarrolladores.

De esto salió una realización interesante: orquestar subagentes desarrolladores en realidad no requiere leer su código línea por línea — solo requiere verificar los resultados una vez que el trabajo está hecho. Los indicadores suelen ser obvios y se hacen manualmente:

-   **Base de datos:** si el almacenamiento se hincha con una pequeña cantidad de datos, o tienes entradas duplicadas o necesitas normalizar el esquema.
-   **Backend:** si las respuestas son lentas, refactorizas, cambias de framework u optimizas la capa de lenguaje.
-   **Frontend:** es lo más simple de verificar: la interfaz debe ser funcional, intuitiva y visualmente sólida.

¿Significa esto que las pruebas con IA son inútiles? En absoluto. Pero hay una trampa: las pruebas automatizadas no producen ninguna salida directa para el usuario final y tienen cero valor intrínseco para el usuario. Las suites de pruebas son meros indicadores. Cuando la aplicación funciona bien, pasan en silencio; cuando fallan, exigen una investigación inmediata. Para averiguar por qué falló una prueba, tienes que comparar la especificación de la prueba con el PRD. Hacerlo de forma efectiva requiere un alto nivel de experiencia en el dominio. Cuando una IA alucina o se pierde bugs ocultos bajo la superficie, esos fallos silenciosos pueden causar problemas masivos a los usuarios reales.

---

*Lee el artículo original en LinkedIn: [Cómo la IA hizo que las pruebas manuales volvieran a ser valiosas](https://www.linkedin.com/pulse/how-ai-made-manual-testing-valuable-again-ilnur-gabitov-ohh9f/)*