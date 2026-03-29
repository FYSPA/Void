## Instrucciones de Uso

¡Hola! Esta página web está construida con **Next.js**. A diferencia de una página web tradicional donde abres directamente un archivo `index.html` con doble clic, este proyecto requiere que se inicie un "servidor local" para procesar y mostrar el código en el navegador.

Aquí tienes los pasos detallados para poder ver la página funcionando en tu computadora:

### Opción 1: Usando Node.js (Método tradicional)

**1. Instalar las herramientas necesarias:**
El proyecto necesita descargar unos paquetes iniciales para funcionar (esto solo se hace la primera vez). Abre la terminal o línea de comandos dentro de la carpeta del proyecto y ejecuta:
```bash
npm install
```

**2. Iniciar el servidor de la página:**
Una vez termine de instalar las dependencias, enciende el servidor con este comando:
```bash
npm run dev
```

**3. ¡Ver la página en tu navegador!**
El servidor ya está funcionando y enviando tu página. Abre tu navegador web favorito (Chrome, Firefox, Safari) e ingresa exactamente en la barra de direcciones:
[http://localhost:3000](http://localhost:3000)

---

### Opción 2: Usando Docker (La forma más práctica si ya tienes Docker)

Si tienes **Docker** instalado en tu computadora, puedes saltarte todos los pasos anteriores. Docker ya incluye automáticamente todo lo necesario para correr la página aislada en un "contenedor".

**1. Construir e instalar la aplicación lista para usarse:**
En la terminal, dentro de la carpeta del proyecto, ejecuta este comando (¡no olvides el punto al final!):
```bash
docker build -t void-app .
```

**2. Iniciar la página web:**
Una vez termine de construir, inicia el contenedor con:
```bash
docker run -p 3000:3000 void-app
```

**3. ¡Ver la página en tu navegador!**
Igual que en la opción anterior, abre tu navegador y entra a:
[http://localhost:3000](http://localhost:3000)
