# 🔘 Expandable Toggle Card

Tarjeta interactiva que se expande desde un botón flotante circular, con una animación fluida tipo "burbuja de diálogo". Construida con **HTML, CSS y JavaScript puro**.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## 🔗 Demo en vivo

👉 [Ver proyecto en Netlify](https://expandable-toggle-card.netlify.app/)

## ✨ Características

- Botón flotante circular (+) que al hacer clic se transforma en una tarjeta de contenido.
- Animación de expansión con `transition-delay` encadenado para un efecto secuencial y natural.
- Rotación de 135° en el botón al activarse, simulando un ícono de "cerrar".
- Efecto de "cola" tipo burbuja de diálogo mediante un pseudo-elemento rotado.
- Cambio de color dinámico en el botón según el estado (verde → rojo).
- 100% vanilla, sin librerías ni frameworks.

## 🛠️ Tecnologías utilizadas

- **HTML5** — estructura base del componente.
- **CSS3** — animaciones, transiciones encadenadas y pseudo-elementos (`::before`).
- **JavaScript (Vanilla)** — manejo de clases con `classList.toggle()` para controlar el estado abierto/cerrado.

## 📂 Estructura del proyecto

```
├── index.html
├── style.css
├── script.js
└── README.md
```

## 🚀 Cómo usarlo localmente

1. Clona el repositorio:
   ```bash
   git clone https://github.com/carlos-daniel07/expandable-toggle-card.git
   ```
2. Entra a la carpeta del proyecto:
   ```bash
   cd expandable-toggle-card
   ```
3. Abre `index.html` en tu navegador (o usa la extensión Live Server en VS Code).

## 🧠 Qué aprendí / practiqué

- Coordinar múltiples transiciones CSS con distintos `transition-delay` para lograr una secuencia de animación creíble (primero el contenedor crece, luego aparece el contenido).
- Crear formas complejas (burbuja de diálogo) combinando `border-radius` y pseudo-elementos rotados.
- Manejo simple de estados con JavaScript usando una sola clase (`active`) compartida entre varios elementos.

## 📸 Preview

<img width="1920" height="1536" alt="image" src="https://github.com/user-attachments/assets/b57e3571-dd7d-48a2-932b-d2be4554f829" /> <img width="1920" height="1536" alt="image" src="https://github.com/user-attachments/assets/d4ac294f-d80d-4118-b7ac-a163006fe28f" />



## 📄 Licencia

Este proyecto es de uso libre con fines educativos y de portfolio.

---

Hecho con 💻 por [Carlos Daniel](https://github.com/carlos-daniel07)
