# Por qué los PRD fallan con los agentes de IA: estructurando la documentación para flujos de trabajo agénticos

El lenguaje humano se apoya en la abstracción de alto nivel, mientras que el código exige una lógica operativa precisa. Al gestionar agentes de IA para codificar, esta brecha produce resultados desalineados e iteraciones interminables de prompts. Para cerrar esta brecha necesitas dos cosas: un vocabulario de dominio estructurado y límites de proyecto claramente definidos.

En el desarrollo de software tradicional (SDLC), el documento de requisitos de producto (PRD) sirve como «fuente de verdad» entre desarrolladores y partes interesadas del negocio. Si bien un PRD estándar funciona para ingenieros humanos, falla con los agentes de IA. Las máquinas no necesitan intención de negocio de alto nivel — necesitan salvaguardas contextuales y reglas operativas claras.

En un flujo de trabajo agéntico, la documentación no debe solo indicar qué construir como fuente de verdad estática; debe explicar cómo está estructurado el sistema para que retengas el control sobre el proceso de generación.

Para probar este concepto, intenté ejecutar el [workflow /to-prd de Matt Pocock](https://www.skills.sh/mattpocock/skills), pero rápidamente se convirtió en una pérdida de tiempo.

La [recomendación inicial era autogenerar PRD y saltarse su revisión](https://www.youtube.com/watch?v=-QFHIoCo-Ko), solo para que el consejo cambiara meses después a [«elimina la mayoría de tus documentos» por el desfase de la documentación](https://www.youtube.com/watch?v=Fj8DKMbdIzU). Desde el principio no tenía sentido tomar en serio el consejo de Matt Pocock sobre documentación si recomendaba omitir por completo las revisiones de documentos.

Probarlo confirmó mi sospecha: los PRD tradicionales fallan con los agentes de IA porque están escritos para la comprensión humana, no para la ejecución de máquinas. Los flujos de trabajo de máquinas requieren términos de dominio estructurados y restricciones estrictas por capas del proyecto, no plantillas PRD estáticas.

En cambio, construí una base de conocimiento de máquina explícitamente estructurada directamente en el repositorio:

1. **Un mapa de carpeta a agente (docs/README.md)**
   En lugar de volcar todo el contexto en el prompt, proporcioné un índice dedicado que mapea las áreas funcionales directamente a archivos. Cuando un agente escucha términos de dominio como «weapon picker» o «canonical mode», sabe con precisión qué documento en docs/ debe leer bajo demanda.

2. **Salvaguardas de máquina estrictas (AGENTS.md)**
   Definí convenciones explícitas en cada nivel (raíz, backend, frontend, e2e). Por ejemplo, frontend/AGENTS.md exige un ID snake_case estable en cada elemento interactivo (theme_toggle_button, history_table). Esto da a los agentes objetivos exactos al generar código de UI o ejecutar pruebas de Playwright.

3. **Fuentes únicas de verdad sólidas**
   - **Contratos de API:** docs/api/openapi.yaml actúa como el contrato estricto — la lógica del backend se prueba contra él y los tipos del frontend se autogeneran a partir de él.
   - **Matemática de dominio y referencias ascendentes:** los modelos y fórmulas matemáticas (p. ej., reacciones elementales y fórmulas de daño) están aislados bajo docs/domain/, evitando que los agentes «alucinen» la física del juego.

4. **Briefs de traspaso enfocados (requirements.md)**
   Cada vez que inicio un subagente nuevo, un brief de arquitectura autocontenido le da el estado de diseño activo para que no malgaste tokens rederivando toda la estructura del monorepo.

Dicho esto, todavía hay un margen claro de mejora para prevenir el desfase documental. En mi propio proyecto, una auditoría rápida reveló que los prompts de los agentes aún hacían referencia a varios documentos eliminados y nombres de archivo obsoletos. Además, pasos automatizados clave — como generar los tipos de TypeScript directamente desde openapi.yaml — no estaban completamente documentados en el índice. Ajustar estos cabos sueltos garantiza que el sistema de apuntado «punto preciso» se mantenga 100% confiable para los agentes nuevos.

Las máquinas no necesitan requisitos de negocio difusos; necesitan vocabulario de dominio estructurado, rutas precisas de archivos/elementos y límites operativos claros.

Si quieres una generación de código predecible, no solo mejores tus prompts — diseña tu documentación para la ingestión por máquinas.

📌 Documento regularmente mis experimentos con agentes de IA, arquitectura de software y flujos de trabajo reales de desarrolladores. Consulta mi publicación reciente [aquí](https://www.linkedin.com/feed/update/urn:li:activity:7500110090574856192/) para más ideas sobre cómo crear aplicaciones completas con configuraciones agénticas, y sigue mi perfil para futuros desgloses.

---

*Lee el artículo original en LinkedIn: [Por qué los PRD fallan con los agentes de IA: estructurando la documentación para flujos de trabajo agénticos](https://www.linkedin.com/pulse/why-prds-fail-ai-agents-structuring-documentation-agentic-gabitov-1twhf/)*