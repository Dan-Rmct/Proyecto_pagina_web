graph TD
    %% Estilos y Configuración
    subgraph Config [Configuración y Estilos]
        Vite[Vite + Tailwind v4]
        CSS[global.css]
    end

    %% Estructura de Layout
    subgraph Estructura_Base [Layout Principal]
        L[Layout.astro]
        H[Header.astro]
        S[Slot de Contenido]
        
        L --- H
        L --- S
        CSS -.-> L
    end

    %% Páginas del Sitio
    subgraph Paginas [Rutas del Sitio]
        P1[index.astro]
        P2[equipo.astro]
        P3[formulario.astro]
        
        P1 -- Renderiza en --> S
        P2 -- Renderiza en --> S
        P3 -- Renderiza en --> S
    end

    %% Componentes y Servicios
    subgraph Modulos [Componentes y Servicios]
        CE[CardEquipo.astro]
        FS[Formspree API]
        
        P2 -- Usa --> CE
        P3 -- Envía datos a --> FS
    end

    %% Relación de Estilos
    Vite -.-> CSS
