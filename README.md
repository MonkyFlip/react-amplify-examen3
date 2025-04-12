# Examen 3 - Aplicación React con API

Esta es una aplicación de React desarrollada como parte del Examen 3. Consume una API para realizar operaciones CRUD en una base de datos de usuarios. Ofrece una interfaz moderna y responsiva, con vistas para iniciar sesión, gestionar usuarios y registrar nuevos usuarios.

## 🚀 Características

- **Inicio de Sesión:** Los usuarios pueden ingresar con su correo y contraseña.
- **Registro:** Los usuarios pueden crear una cuenta directamente desde la página de inicio de sesión.
- **Gestión de Usuarios (Dashboard):**
  - Agregar nuevos usuarios.
  - Editar usuarios existentes (la contraseña es opcional al editar).
  - Eliminar usuarios.
- **Interfaz Moderna:** Paleta de colores vibrante y responsiva.
- **Modales Interactivos:** Se utilizan modales para agregar, editar y registrar usuarios.

## 📂 Estructura del Proyecto

```
examen3-react/
├── public/               # Contiene el archivo index.html
├── src/
│   ├── api/              # Funciones para interactuar con la API
│   │   ├── api.js
│   ├── components/       # Componentes reutilizables como Header y Modal
│   │   ├── Header.js
│   │   ├── Modal.js
│   ├── pages/            # Páginas principales de la aplicación
│   │   ├── Login.js
│   │   ├── Dashboard.js
│   │   ├── Register.js
│   ├── styles/           # Archivos de estilos CSS
│   │   ├── App.css
│   │   ├── Login.css
│   │   ├── Dashboard.css
│   │   ├── Modal.css
│   ├── App.js            # Componente principal
│   ├── index.js          # Punto de entrada
├── package.json          # Configuración de dependencias
```

## 🛠️ Tecnologías Utilizadas

- **React:** Framework principal para construir la interfaz.
- **React Router:** Para la navegación entre vistas.
- **Axios:** Para realizar solicitudes HTTP a la API.
- **Font Awesome:** Iconos modernos y atractivos.
- **React Modal:** Para implementar modales reutilizables.
- **CSS:** Estilización personalizada para un diseño responsivo.

## 📦 Instalación

Sigue estos pasos para configurar y ejecutar el proyecto en tu máquina local:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/examen3-react.git
   cd examen3-react
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

Asegúrate de que tu API esté corriendo y que la URL base esté configurada correctamente en `src/api/api.js`:
```javascript
const API_BASE_URL = "https://<tu-direccion-de-api>";
```

## ✨ Funcionalidades

### **1. Inicio de Sesión**
- Ruta: `/`
- Los usuarios pueden ingresar con sus credenciales.
- Muestra un mensaje de error si las credenciales son inválidas.

### **2. Registro de Nuevos Usuarios**
- Opción disponible desde la página de inicio de sesión.
- Abre un modal para registrar un usuario.
- Campos necesarios: nombre de usuario, correo electrónico, contraseña.

### **3. Dashboard**
- Ruta: `/dashboard`
- Muestra una tabla con todos los usuarios registrados.
- Opciones disponibles:
  - **Agregar:** Abre un modal para registrar un nuevo usuario.
  - **Editar:** Abre un modal con los datos prellenados del usuario seleccionado. La contraseña es opcional al editar.
  - **Eliminar:** Elimina al usuario seleccionado tras confirmación.

## 🖼️ Capturas de Pantalla

### **Inicio de Sesión**
![Login Page](https://via.placeholder.com/800x400?text=Captura+de+Inicio+de+Sesion)

### **Dashboard**
![Dashboard Page](https://via.placeholder.com/800x400?text=Captura+de+Dashboard)

## 📖 Documentación Adicional

Si deseas más información sobre cómo configurar y utilizar esta aplicación, consulta la documentación interna en los archivos de código.
