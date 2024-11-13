// Obtener el elemento del desplegable
const connectDropdown = document.getElementById("connectDropdown") as HTMLSelectElement;

// Comprobar que el elemento existe
if (connectDropdown) {
  // Añadir un evento para detectar cuando cambia la selección
  connectDropdown.addEventListener("change", (event) => {
    const selectElement = event.target as HTMLSelectElement;
    switch (selectElement.value) {
      case "bluetooth":
        connectBluetoothDevice();
        break;
      case "wifi":
        connectWiFiDevice();
        break;
      case "usb":
        connectUSBDevice();
        break;
      default:
        console.log("Por favor, selecciona una opción válida.");
    }
  });
}

// Función para conectar con el dispositivo Bluetooth
function connectBluetoothDevice(): void {
  console.log("Abriendo selector de dispositivo Bluetooth...");

  // Verificar si la API Web Bluetooth está disponible en el navegador
  if (navigator.bluetooth) {
    navigator.bluetooth.requestDevice({
      acceptAllDevices: true,  // Acepta cualquier dispositivo
      optionalServices: ['battery_service']  // Servicios opcionales, personalizables
    })
    .then((device: BluetoothDevice) => {
      console.log('Dispositivo Bluetooth conectado:', device);
      // Aquí puedes agregar más lógica para interactuar con el dispositivo Bluetooth
    })
    .catch((error: DOMException) => {
      console.error('Error al conectar con el dispositivo Bluetooth:', error);
    });
  } else {
    console.error('La API de Bluetooth no es compatible con tu navegador.');
  }
}

// Función para conectar con el dispositivo WiFi
function connectWiFiDevice(): void {
  console.log("Conectando a dispositivo WiFi...");
  // Lógica para conexión WiFi (este es un ejemplo, necesitarías la API adecuada)
  alert("La opción de conexión WiFi no está implementada en este ejemplo.");
}

// Función para conectar con el dispositivo USB
function connectUSBDevice(): void {
  console.log("Conectando a dispositivo USB...");
  // Lógica para conexión USB (este es un ejemplo, necesitarías la API adecuada)
  alert("La opción de conexión USB no está implementada en este ejemplo.");
}
