const connectButton = document.getElementById("connectButton");
const portList = document.getElementById("portList");


function updatePortList(ports) {
    portList.innerHTML = "";
    ports.forEach((port, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `Puerto ${index + 1}`;
        portList.appendChild(listItem);
    });
}


navigator.serial.addEventListener("connect", (e) => {
    updatePortList([e.target]);  });


navigator.serial.addEventListener("disconnect", (e) => {
    const ports = Array.from(portList.children).filter(
        (li) => li.textContent !== `Puerto ${e.target}`
    );
    updatePortList(ports);  
});

navigator.serial.getPorts().then((ports) => {
    updatePortList(ports);
});

connectButton.addEventListener("click", () => {
    const usbVendorId = 0xabcd;
    navigator.serial
        .requestPort({ filters: [{ usbVendorId }] })
        .then((port) => {
            updatePortList([port]);
        })
        .catch((e) => {
            console.error("No se seleccionó ningún puerto:", e);
        });
});
