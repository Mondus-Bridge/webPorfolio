# Mi experiencia: cómo las herramientas de IA ayudaron a crear una aplicación web de nivel medio

*«Comienza tu destino» — así saluda mi aplicación web a todos.*

Durante años, como ingeniero de QA y PM, gestioné pipelines de desarrollo y probé el código de otros. Pero en el fondo sentía una frustración constante: no estaba construyendo cosas reales por mí mismo. A pesar de conocer el ciclo de vida ágil del software (Agile SDLC) y usar prompts básicos de IA, la sensación de «dinosaurio» nunca me abandonó. Leer libros técnicos mantenía mi mente ocupada, pero no me daba la autonomía que quería. No quería solo gestionar productos — quería lanzar uno. Así que decidí probar una hipótesis: ¿podría aprovechar mi experiencia en producto junto con las herramientas de IA para construir una aplicación web full-stack de complejidad media desde cero? Esto es lo que construí, cómo la co-creamos y lo que aprendí en el camino.

## Primer paso: descansar

Al menos 1 mes, porque la mente humana necesita salir de los bucles diarios anteriores que se repitieron de la misma manera 1000 días seguidos. En el descanso, el ser humano puede abstraerse y pensar. Pensar equivale a planificar. La autoplanificación es algo importante que mucha gente omite por diferentes razones. Sin una buena estrategia sobre las acciones futuras y paz mental, puede haber mucho desorden en el momento de la implementación. La combinación de abstracción y buena planificación da una idea.

## Segundo paso: probar

Tras el descanso tuve la visión de crear mi aplicación. Pero no sabía qué herramienta de IA usar y cómo orquestarla, como dicen muchos blogueros. Ver videos de YouTube no me dio ningún resultado. Así que decidí que probaría diferentes herramientas y elegiría en el proceso la mejor para mis requisitos. Lo primero fue usar una LLM local. Tengo una RTX 4070 y 16 GB de RAM. Vi que podía ejecutar algunas LLM en Ollama con cuantizaciones pesadas. Aun así valía la pena intentarlo. Encontré para mí el modelo Gemma 4:12b. Era bueno para crear un landing, pero eso es todo. Además era muy lento. Abandoné esa idea. Lo siguiente que probé fue un modelo de Groq. Mi amigo estadounidense me dijo que usaba Groq. No pregunté detalles porque me sentía incómodo preguntando. E incluso si preguntaba, no entendería nada de su historia. Así que probé gpt-oss-120b con 0.6$ por millón de tokens de salida. No voy a mentir: fue increíblemente rápido para crear frontend y backend, 500 tokens por segundo, pero la calidad no encajaba con mis requisitos de desarrollo. Luego probé el agente de codificación de IA de código abierto: Opencode.

## Tercer paso: Opencode

Elegí este agente de IA solo porque puedo tomar cualquier modelo de cualquier proveedor y usarlo. Ese fue el momento decisivo para mí. Otras herramientas de agentes de IA son excelentes y bien configuradas en la etapa inicial, pero están limitadas solo al modelo del proveedor actual, lo que significa que podrían ser de 2 a 100 veces más caras para mi idea inicial. Además, ese modelo podría no encajar con mi estilo de orquestación. Como novato, quería probarlo gratis y luego pagar un precio justo por los tokens y tener un mejor modelo con una herramienta de gestión de API. Pero siempre hay un problema en la gran variedad de modelos de Opencode: hay que configurarlo manualmente y de alguna manera.

## Cuarto paso: configuración

La configuración de mi proyecto me llevó un tiempo. Lo primero fue que no sabía cómo implementar el flujo de orquestación, cómo funcionan los límites de tokens, etc. No sabía nada. Lo que sabía era mi experiencia previa, donde en un proyecto de desarrollo existían estos puestos: product manager, QA, ingenieros de frontend y backend. Así que intenté convertirlos en personalidades de agentes. Funcionó bien en la etapa inicial. Los agentes manejaban bien mis requisitos de product owner. Yo era literalmente el JEFE que da el dinero a sus empleados por el trabajo. Fue una sensación nueva para mí, pero después de una semana noté que mis trabajadores se volvían más lentos y exigían un salario mayor. Mi startup se volvía cara y tardaba más en crear una función o corregir un bug. Como gerente profesional, decidí despedir al agente QA. De su trabajo solo quedó el framework Playwright para que otros agentes tuvieran una gran navegación del navegador vía CLI o MCP. Mi proyecto se alivió y se volvió más rápido. Como jefe, quedé muy satisfecho, pero no duró mucho. Ahora el problema aparecía con doble fuerza: 1) se tarda demasiado porque el código del proyecto crece, y 2) mi agente PM crea su propia documentación según lo requerido, pero mis agentes restantes se toman en serio esos documentos y mi petición de crear una función nunca estaba en primer lugar, porque la única fuente de verdad para esos agentes era la documentación. ¡Las máquinas se levantaron contra su propio creador! Así que, sin pensarlo, eliminé también al agente PM junto con el 90% de los documentos PRD y delegué la escritura de al menos comentarios en el código a los agentes de frontend y backend por sí mismos. El agente de backend creaba el archivo openapi.yaml y el agente de frontend comentaba el código con la lógica dada para los elementos del DOM. Funcionó.

## Quinto paso: mi código

Mi proyecto monorepo tiene 3 carpetas principales: /backend, /frontend y /docs. El agente de frontend y el de backend tienen sus propias skills y un [README.MD](http://README.MD) en sus carpetas de trabajo. El modelo de desarrollo es DDL, porque calcular el daño no es una tarea simple. Tiene su propio motor, rotación y mecánica de dominio. El frontend estático tras construirse vive en Vercel, y el backend y la base de datos los despliego yo en VDS manualmente, porque los agentes no deben conocer las contraseñas de mi servidor. Por supuesto, antes de cada despliegue hago un volcado de la base de datos y tengo rollback instantáneo al backend anterior si se rompe. La base de datos es Postgres, el servidor web es Caddy en un contenedor Docker, el backend está escrito en GO; antes era Python 3 con el framework FastApi, pero era 15 veces más lento al manejar las solicitudes de mi proveedor de API para obtener los datos de los jugadores sobre el personaje. El frontend está escrito en TS y usa React y Tailwind por una razón: no quería que mi IA creara cosas propias cuando el componente ya existe.

## Paso seis: coste

Actualmente tengo 3 fuentes de gastos:

1.  **Tiempo.** Dediqué 4 semanas a crear un MVP listo para producción. Me lo pasé bien trabajando en ello y dediqué mi pasión y determinación para crear un producto para la gente.
2.  **Coste de tokens.** Los tokens cuestan algo de dinero y para el proyecto elegí Deepseek. Tiene razonamiento, codificación y orquestación de nivel superior.
3.  **Servidor.** 3 núcleos y 4 gigas. Barato y suficiente por ahora.

## Paso siete: mi proyecto

Ahora mismo existen 12 composiciones de equipo mainstream. Promociono mi aplicación web optimizando el SEO y escribiendo posts sencillos en Reddit.

Más de 300 personas han enviado sus UIDs.

## Conclusión

Esta etapa técnica de las herramientas modernas puede convertir a una persona apasionada en desarrollador sin dominar todo el stack tecnológico de antemano y sin pasar un tiempo enorme aprendiendo todos los stacks solo por experiencia. Lo usé para programar, pero hay muchos otros campos. No está desarrollado solo por IA. Fue una colaboración entre yo y la IA para crear una aplicación web de complejidad media. Existen aplicaciones similares en internet y son bastante populares entre los jugadores de Genshin, pero no me gustan y creé mi propia versión, porque no podía rastrear el DPS del equipo, la rotación, etc. Mi aplicación es mucho más flexible y mejorará aún más. Aceptaré las críticas razonables y la haré mejor, como debe ser.

Estoy bastante contento de que mi conocimiento sobre desarrollo de productos no fuera tan malo. Ahora todos mis miedos han desaparecido. Estoy agradecido a toda la inteligencia humana por crear una herramienta tan buena.

---

*Lee el artículo original en LinkedIn: [Mi experiencia: cómo las herramientas de IA ayudaron a crear una aplicación web de nivel medio](https://www.linkedin.com/pulse/my-experience-ai-tools-help-create-mid-grade-web-app-ilnur-gabitov-sbpef/)*