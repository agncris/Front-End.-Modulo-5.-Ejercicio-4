# Hospital Sale Sano

Es un sitio web de presentación de los servicios y personal médico de un hospital ficticio. Este proyecto utiliza: React y Vite para construir una aplicación web moderna, modular y eficiente. Está diseñado con una estructura escalable, utilizando estilos SCSS y enrutamiento manejado con React Router.

## Tecnologías utilizadas

- React
- Vite
- React Router
- SCSS
- Bootstrap

## Actualizaciones e Implementaciones:

### 1. Consumo de APIs usando Fetch API
- Implementación de solicitudes GET y POST para gestionar datos de pacientes y doctores.
- Muestra dinámica de datos obtenidos en la interfaz React.
- Manejo de errores en las peticiones y muestra de mensajes claros al usuario.

### 2. Uso de Hooks y Manejo de Errores
- Uso de Hooks como useState y useEffect para gestionar el estado y los efectos secundarios.
- Implementación de un Hook personalizado para manejar la lógica repetitiva de la aplicación.
- Manejo adecuado de errores durante las peticiones a la API o en la interfaz, mostrando mensajes al usuario en caso de error.


## Descripción de páginas y funcionalidades:

- **Inicio (index.jsx)**: Página de bienvenida, mostrando la misión, visión, servicios y testimonios con la intención de generar confianza en nuevos posibles pacientes.
- **Equipo médico (equipo.jsx)**: Sección para mostrar la información de los especialistas que trabajan en el hospital.
- **Contacto (contacto.jsx)**: Página de contacto para que el usuario envíe un mensaje a través de un formulario y vea en un mapa la ubicación del hospital.
- **Reserva de hora (Reservar.jsx)**: Formulario para reservar citas médicas.

## Créditos

Para los elementos gráficos no se utilizaron imágenes cargadas como archivos en la carpeta del proyecto, sino que están conectadas a links de internet.

- **Íconos**: Íconos de servicios y redes sociales fueron tomados de:
  - Iconfinder
  - DuckDuckGo
  - Vecteezy
- **Imágenes**: Las imágenes de perfil de los doctores y el logo fueron obtenidos de:
  - SonicSEO
  - Public Domain Pictures
  - Stockvault

## Estructura del Proyecto

```
📦hospital
 ┣ 📂public
 ┃ ┗ 📜vite.svg
 ┣ 📂src
 ┃ ┣ 📂assets
 ┃ ┃ ┗ 📜react.svg
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📜AppointmentForm.jsx
 ┃ ┃ ┣ 📜Contacto.jsx
 ┃ ┃ ┣ 📜DoctorCard.jsx
 ┃ ┃ ┣ 📜Equipo.jsx
 ┃ ┃ ┣ 📜ErrorBoundary.jsx     # Manejo global de errores
 ┃ ┃ ┣ 📜ErrorMessage.jsx      # Componente de mensajes de error
 ┃ ┃ ┣ 📜Footer.jsx
 ┃ ┃ ┣ 📜Header.jsx
 ┃ ┃ ┣ 📜Home.jsx
 ┃ ┃ ┣ 📜MedicosList.jsx
 ┃ ┃ ┣ 📜ProtectedRoute.jsx    # Rutas protegidas
 ┃ ┃ ┣ 📜Reservar.jsx
 ┃ ┃ ┗ 📜ServiceList.jsx
 ┃ ┣ 📂hooks
 ┃ ┃ ┣ 📜useFormulario.js      # Hook personalizado para formularios
 ┃ ┃ ┣ 📜useError.js           # Hook de manejo de errores
 ┃ ┃ ┣ 📜useFetch.js           # Hook para manejar peticiones a la API
 ┃ ┣ 📂context
 ┃ ┃ ┣ 📜AuthContext.jsx       # Contexto de autenticación
 ┃ ┃ ┣ 📜DoctorContext.jsx     # Contexto de datos médicos
 ┃ ┣ 📂styles
 ┃ ┃ ┣ 📂abstracts
 ┃ ┃ ┃ ┣ 📜_bootstrap-override.scss
 ┃ ┃ ┃ ┣ 📜_breakpoints.scss
 ┃ ┃ ┃ ┣ 📜_functions.scss
 ┃ ┃ ┃ ┣ 📜_mixins.scss
 ┃ ┃ ┃ ┗ 📜_variables.scss
 ┃ ┃ ┣ 📂base
 ┃ ┃ ┃ ┣ 📜_base.scss
 ┃ ┃ ┃ ┣ 📜_resets.scss
 ┃ ┃ ┃ ┗ 📜_typography.scss
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📜_button.scss
 ┃ ┃ ┃ ┣ 📜_footer.scss
 ┃ ┃ ┃ ┗ 📜_header.scss
 ┃ ┃ ┣ 📂layout
 ┃ ┃ ┃ ┣ 📜_footer.scss
 ┃ ┃ ┃ ┣ 📜_grid.scss
 ┃ ┃ ┃ ┗ 📜_header.scss
 ┃ ┃ ┣ 📂pages
 ┃ ┃ ┃ ┣ 📜_contacto.scss
 ┃ ┃ ┃ ┣ 📜_equipo.scss
 ┃ ┃ ┃ ┗ 📜_home.scss
 ┃ ┃ ┣ 📂partials
 ┃ ┃ ┃ ┗ 📜_breakpoints.scss
 ┃ ┃ ┣ 📂vendors
 ┃ ┃ ┃ ┗ 📜_bootstrap.scss
 ┃ ┃ ┣ 📜main.css
 ┃ ┃ ┣ 📜main.css.map
 ┃ ┃ ┗ 📜main.scss
 ┃ ┣ 📜App.css
 ┃ ┣ 📜App.jsx
 ┃ ┣ 📜index.css
 ┃ ┗ 📜main.jsx
 ┣ 📂styles
 ┃ ┗ 📜main.css
 ┣ 📜.gitignore
 ┣ 📜eslint.config.js
 ┣ 📜index.html
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┗ 📜README.md
```

