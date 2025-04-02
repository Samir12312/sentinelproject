import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  standalone: false,
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {

}

document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("click", (event) => {
        const target = event.target as HTMLElement;

        // Копирование IP
        if (target.classList.contains("copy-btn")) {
            const ip = target.getAttribute("data-ip");
            if (ip) {
                navigator.clipboard.writeText(ip).then(() => {
                    alert(`IP ${ip} скопирован в буфер обмена!`);
                }).catch(err => {
                    console.error("Ошибка копирования: ", err);
                });
            }
        }

        // Открытие/закрытие информации
        if (target.classList.contains("info-btn")) {
            const serverInfo = target.nextElementSibling as HTMLElement;
            if (serverInfo) {
                serverInfo.classList.toggle("open");
                target.textContent = serverInfo.classList.contains("open") ? "❌ Скрыть информацию" : "ℹ️ Показать информацию";
            }
        }
    });
});


