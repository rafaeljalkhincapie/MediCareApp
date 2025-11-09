# 🩺 MedAssistant — MVP

**MedAssistant** es una aplicación móvil desarrollada en **React Native** para ayudar a usuarios que administran los medicamentos, citas y documentación médica de varias personas (por ejemplo, familiares o pacientes a cargo).  
El sistema incluye integración con IA para organizar automáticamente recordatorios, citas y documentos médicos.

---

## 🎯 Objetivo del MVP

El objetivo de este MVP (Producto Mínimo Viable) es permitir al usuario:

1. **Crear y administrar perfiles** de las personas bajo su cuidado.
2. **Registrar y gestionar medicamentos** de cada perfil, incluyendo:
   - Nombre del medicamento
   - Dosis
   - Frecuencia
   - Horario de toma
   - Observaciones
3. **Administrar doctores y centros médicos**:
   - CRUD de doctores
   - CRUD de ubicaciones o lugares de cita
4. **Administrar citas médicas**:
   - Programación de citas por perfil
   - Recordatorios automáticos
5. **Cargar y organizar documentos médicos**:
   - Integración con Google Drive o OneDrive
   - Subida de archivos (PDF, imágenes, etc.)
6. **Integración inicial de IA** (fase experimental):
   - Asistente por chat o voz que:
     - Analiza documentos cargados (fórmulas médicas, órdenes, etc.)
     - Genera recordatorios automáticos de citas o medicamentos
     - Sugiere documentos necesarios para próximas citas

---

## 🧩 Alcance del MVP

El MVP se centrará en las siguientes funcionalidades base:

| Módulo | Funcionalidad | Estado |
|--------|----------------|--------|
| 👤 Perfiles | Crear, editar, eliminar, listar perfiles | 🟢 MVP |
| 💊 Medicamentos | CRUD, asociación con perfil, horarios, notificaciones | 🟢 MVP |
| 🧑‍⚕️ Doctores | CRUD de doctores | 🟢 MVP |
| 📍 Ubicaciones | CRUD de ubicaciones | 🟢 MVP |
| 📅 Citas | Crear, editar, eliminar, recordatorios | 🟢 MVP |
| 📄 Documentos | Subir, listar, enlazar a Drive/OneDrive | 🟡 MVP+ |
| 🧠 IA | Procesamiento de texto, extracción de fechas y medicamentos | 🟡 MVP+ |

> 🟢 = MVP obligatorio  
> 🟡 = MVP ampliado (fase 2)

---

## 🛠️ Tecnologías

- **Frontend móvil:** React Native + Expo  
- **Backend:** Firebase (Auth, Firestore, Storage) o Supabase  
- **Integraciones:**  
  - Google Drive / Microsoft OneDrive APIs  
  - OpenAI / Gemini API para IA  
- **Gestión de estado:** Zustand o Context API  
- **Navegación:** React Navigation  
- **Notificaciones:** Expo Notifications

---

## ⚙️ Estructura inicial del proyecto

