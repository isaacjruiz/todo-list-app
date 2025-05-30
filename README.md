# 📝 Todo List App - Fullstack

Aplicación **Fullstack** para gestión de tareas construida con:

- **Frontend**: [Next.js](https://nextjs.org/) + React  
- **Backend**: [Node.js](https://nodejs.org/) + Express  
- **Base de datos**: [MongoDB Atlas](https://www.mongodb.com/atlas)

---

## 🚀 Requisitos Previos

Asegúrate de tener instalado:

- Node.js (v18 o superior recomendado)
- npm
- MongoDB Atlas (ya configurado en este proyecto)

---

## 📁 Estructura del Proyecto

```
📦 todo-list-app/
┣ 📂 frontend/   ← Cliente (Next.js + React)
┣ 📂 backend/    ← Servidor (Express + MongoDB)
```

---

## ⚙️ Configuración Inicial

### 1. Variables de Entorno (Backend)

Crea un archivo `.env` dentro del directorio `backend/` y copia lo siguiente:

```env
PORT=4000
MONGODB_URI=mongodb+srv://isaacjruiz:TBlQRV2AGPkgVHqO@my-todo-list.lsjgz5y.mongodb.net/?retryWrites=true&w=majority&appName=my-todo-list
JWT_SECRET=tnoqtCOmMNMSwy0ZybYhC5NtiutJxH7L92mLQHks6xLr/vcxBgnGt7rrvKuEduK/0LNt4N9SpIRzJpOM1xubMA==
```



---

## 📦 Instalación de Dependencias

Desde la raíz del proyecto:

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

---

## ▶️ Ejecutar la Aplicación

### 1. Iniciar el servidor (Backend)

```bash
cd backend
node server.js
```

### 2. Iniciar el cliente (Frontend)

```bash
cd frontend
npm run dev
```

La app estará disponible en: [http://localhost:3000](http://localhost:3000)

---

## 🛠 Funcionalidades Básicas

- Registro e inicio de sesión con JWT
- Crear, editar, eliminar y completar tareas
- Filtrado por estado: Todas, Pendientes, Completadas
- Persistencia de datos en MongoDB Atlas
