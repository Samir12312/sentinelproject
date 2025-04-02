import { Component } from '@angular/core';

@Component({
  selector: 'app-donate',
  standalone: false,
  templateUrl: './donate.component.html',
  styleUrl: './donate.component.css'
})
export class DonateComponent {

}

document.addEventListener("click", (event) => {
  const target = event.target as HTMLElement;

  if (target.id === "toggle-btn") {
      const panel = document.getElementById("info-panel") as HTMLDivElement;

      if (panel) {
          const isVisible = panel.style.display === "block";
          panel.style.display = isVisible ? "none" : "block";
          target.textContent = isVisible ? "ℹ️ Показать информацию" : "❌ Скрыть информацию";
      }
  }
});



