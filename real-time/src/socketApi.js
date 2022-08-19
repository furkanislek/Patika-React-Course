import io from "socket.io-client";

let socket = io("http://localhost:3001", {
    transports: ["websocket"]
});

export const init = () => {

    console.log("Sunucuya Bağlanılıyor...");

   

    socket.on("connect", () => 
    console.log("Sunucuya Bağlantı Başarılı.")
    );

}

