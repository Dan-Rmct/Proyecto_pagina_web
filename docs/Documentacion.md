# Documentación Técnica - Club Hello World (FES Aragón)

Este documento detalla las especificaciones técnicas, decisiones de arquitectura y estrategias de desarrollo implementadas para la página del Club.

## 1. Tecnologías Implementadas
Para tener un rendimiento óptimo como se pedia aademas una experiencia de usuario moderna, utilizamos tecnologias como:

* **Astro v5:**Este framework centrado en el rendimiento utiliza una arquitectura llamada "islas" para minimizar la carga de JavaScript en el cliente.
* **Tailwind CSS v4.2:** Es el framework de diseño, basado en utilidades para un desarrollo ágil de interfaces responsivas y consistentes.
* **pnpm:** Gestor de paquetes eficiente para optimizar el almacenamiento y la velocidad de instalación de dependencias.
* **JavaScript (ES6+):** Utilizado para la interactividad del menú móvil y efectos de scroll.
* **Bundler:** Vite Utilizado como motor de compilación subyacente y gestor de plugins, permitiendo una integración fluida con Tailwind.
* **Despliegue:** [GitHub Pages / Vercel / Netlify]
* **Formspree:** Para el registro de nuevos usuarios 
* **Diseño:** Figma

## 2. Arquitectura y Estructura del Proyecto
En el proyecto usamos una estructura estándar basada en Astro, organizada para maximizar la reutilización de componentes:

* **`src/layouts/Layout.astro`:** Plantilla base que define la estructura HTML5, metadatos y la importación de estilos globales.
* **`src/components/`:** Contiene elementos modulares como el `Header.astro` (navegación), `CardEquipo.astro` (tarjetas dinámicas) y `Calendario.astro` (calendario dinamico) 
* **`src/pages/`:** Define las rutas del sitio:
    * `index.astro`: Página de aterrizaje principal.
    * `equipo.astro`: Presentación de la mesa directiva.
    * `formulario.astro`: Sistema de registro para nuevos miembros.

## 3. Decisiones Técnicas Relevantes

Se decidio usar astro principalmente por la facilidad que aporta al proyecto ademas de proporcionar un mejor rendimiento, por esa razon fue la base para casi todo el proyecto.
Tailwind lo usamos por parte de una recomendacion que si nos facilito el uso de estilos.
Se uso pnpm y no npm como gestor de paquetes por tres razones
1.  **Eficiencia de espacio:** Utiliza un sistema de almacenamiento direccionable por contenido que evita duplicar dependencias en el disco duro.
2.  **Velocidad:** Las instalaciones son significativamente más rápidas que en npm gracias a su estructura de enlaces simbólicos.
3.  **Seguridad:** Garantiza que el código solo tenga acceso a las dependencias declaradas explícitamente en el `package.json`.

* **Formspree
Tambien se decidio crear un registro sin base de datos por cuestiones de tiempo y complejidad, sin embargo se utiliso una API llamada formspree;
para cumplir con el objetivo de Crecimiento sin aumentar la complejidad del servidor y ahorrarnos tiempo, se implementó Formspree en el formulario de registro y ademas cuenta con una ventaja que
permite recibir y gestionar las inscripciones directamente por correo electrónico.

* **Diseño
En cuestiones del diseño se decidio esa paleta de colores para reflejar la misión y visión de "Hello World" basada en el logo del equipo ademas de investigar su psicologia y match con los objetivos del proyecto.
* **Fondo Oscuro (#020617):** Representa el entorno de una terminal de comandos y profundidad del conocimiento técnico. Psicológicamente transmite autoridad, profesionalismo y elegancia.
* **Azul Tecnológico (Blue):** Utilizado en bordes y etiquetas para proyectar confianza, inteligencia y seguridad, valores para el club.
* **Morado Innovación (Purple):** Aplicado en botones de acción y gradientes para la creatividad y la innovación, diferenciando al club como un espacio.

Tambien en el diseño se decidio agregar un calendario para facilitar al equipo y usuarios encontrar, agregar eventos de interes; que viene con su fecha de registro y el dia del evento, ademas de contar con redireccionamiento a la pagina del evento.
De igual manera se cuenta con la informacion de la mesa directiva del club donde se muestran linkeados sus cuentas de github y linkedin. 

Se decidio que la pagina fuera todo en un one page por comodidad pero se puede navegar por ella de una forma intuitiva y facil, ademas de estar seccionada por si no se quiere scrollear.
      
### Rendimiento y Optimización
* **Carga Selectiva:** Se utilizo Astro solo donde es necesario para mantener un Score de Lighthouse elevado como se solicitaba.
* **Estilos Globales:** En el estilo fue por Tailwind en `global.css` para evitar redundancias.

### Experiencia de Usuario (UI/UX)
* **Diseño Mobile-First:** El componente `Header.astro` implementa un menú lateral (`mobile-menu`) desplegable mediante JavaScript para dispositivos móviles.
* **Feedback Visual:** La navegación cambia de apariencia dinámicamente al hacer scroll para mejorar la legibilidad sobre fondos complejos.
* **Componentización de Equipo:** Se diseñó `CardEquipo.astro` para recibir datos vía `props` (nombre, cargo, redes), permitiendo un diseño uniforme y fácil de actualizar.

### Mecanismos de Crecimiento
* **Validación Estudiantil:** El formulario de registro incluye una expresión regular (`pattern`) que restringe el acceso solo a correos institucionales `@aragon.unam.mx`, asegurando el enfoque en la comunidad de la FES Aragón.
* **Call to Action (CTA):** Botones de "¡Únete ahora!" estratégicamente ubicados en el encabezado para maximizar la conversión de visitantes a miembros.

## 4. Identidad Institucional
El sitio ha sido diseñado alineándose con la **Misión** y **Visión** del club:
* **Misión:** Impulsar la excelencia técnica mediante formación de equipos de alto rendimiento.
* **Visión:** Ser el referente de talento tecnológico en la universidad.
* **Objetivo:** Fomentar la interdisciplinariedad entre las ingenierías de la Facultad.
