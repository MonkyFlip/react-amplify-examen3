# Examen 3 - Aplicación React con API

Este repositorio contiene una aplicación de React desarrollada para gestionar usuarios a través de una API. La aplicación es moderna, responsiva, y utiliza un diseño interactivo con modales y una interfaz atractiva.

## 🚀 Características Principales

- **Inicio de Sesión:** Permite a los usuarios ingresar con su correo electrónico y contraseña.
- **Registro de Usuario:** Los usuarios pueden registrarse desde un modal accesible en la página de inicio de sesión.
- **Gestión de Usuarios:** Una página de Dashboard que incluye una tabla con opciones para:
  - Agregar nuevos usuarios (contraseña obligatoria).
  - Editar usuarios existentes (contraseña opcional).
  - Eliminar usuarios.
- **Modales Interactivos:** Utilizados para agregar, editar y registrar usuarios.
- **Estilo Moderno y Responsivo:** Diseñado con una paleta de colores vibrante y transiciones suaves.

## 📂 Estructura del Proyecto

```
EXAMEN3-REACT/
├── public/               # Contiene el archivo index.html
├── src/
│   ├── api/              # Funciones para interactuar con la API
│   │   ├── api.js
│   ├── components/       # Componentes reutilizables como Header y Modal
│   │   ├── Header.jsx
│   │   ├── Modal.jsx
│   ├── pages/            # Páginas principales de la aplicación
│   │   ├── Dashboard.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   ├── styles/           # Archivos de estilos CSS
│   │   ├── App.css
│   │   ├── Dashboard.css
│   │   ├── Header.css
│   │   ├── index.css
│   │   ├── Login.css
│   │   ├── Modal.css
│   │   ├── Register.css
│   ├── App.js            # Componente principal
│   ├── index.js          # Punto de entrada
├── package.json          # Configuración de dependencias
```

## ✨ Funcionalidades

### **1. Inicio de Sesión**
- Página principal donde los usuarios ingresan con sus credenciales (correo y contraseña).
- Muestra mensajes de error si las credenciales son inválidas.
- Contiene un enlace para registrar nuevos usuarios.

### **2. Registro de Usuario**
- Modal accesible desde la página de inicio de sesión.
- Permite registrar un usuario nuevo.
- Campos requeridos: Nombre de usuario, correo electrónico y contraseña.
- Uso de etiquetas (`label`) para mejorar la claridad de los campos.

### **3. Dashboard**
- Página accesible tras iniciar sesión.
- Muestra una tabla con la lista de usuarios obtenidos de la API.
- Opciones de acción:
  - **Agregar:** Abre un modal para registrar un nuevo usuario (requiere contraseña).
  - **Editar:** Abre un modal con los datos prellenados del usuario seleccionado. La contraseña es opcional al editar.
  - **Eliminar:** Permite eliminar un usuario seleccionado con confirmación.

### **4. Modales**
- Utilizados para agregar, editar y registrar usuarios.
- Diseño con transiciones suaves y responsivas.
- Iconos en los campos y botones para mejorar la experiencia del usuario.

## 🛠️ Tecnologías Utilizadas

- **React:** Framework principal para construir la interfaz.
- **React Router:** Para la navegación entre vistas.
- **Axios:** Para realizar solicitudes HTTP a la API.
- **Font Awesome:** Iconos modernos y atractivos.
- **React Modal:** Implementación de modales interactivos y reutilizables.
- **CSS:** Estilización personalizada para un diseño responsivo.

## 📦 Instalación

Sigue estos pasos para configurar y ejecutar el proyecto:

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/examen3-react.git
   cd EXAMEN3-REACT
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm start
   ```

4. Accede a la aplicación en tu navegador:
   ```plaintext
   http://localhost:3000
   ```

## ⚙️ Configuración de la API

Asegúrate de que la API esté corriendo y que la URL base esté configurada correctamente en el archivo `src/api/api.js`:
```javascript
const API_BASE_URL = "https://<tu-direccion-de-api>";
```

## 🖼️ Capturas de Pantalla

### **Inicio de Sesión**
- Página inicial con campos para correo y contraseña.
- Botón de registro accesible desde un modal interactivo.

### **Dashboard**
- Tabla con registros de usuarios, incluye opciones de agregar, editar y eliminar.
- Modales que facilitan la gestión de usuarios.
