import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["menu"]

  toggle() {
    if (this.menuTarget.classList.contains("hidden")) {
      this.menuTarget.classList.remove("hidden")
      // Give time for the hidden class to be removed before adding opacity
      requestAnimationFrame(() => {
        this.menuTarget.classList.add("opacity-100")
        this.menuTarget.classList.remove("opacity-0")
      })
    } else {
      this.menuTarget.classList.add("opacity-0")
      this.menuTarget.classList.remove("opacity-100")
      // Wait for transition before hiding
      setTimeout(() => {
        this.menuTarget.classList.add("hidden")
      }, 150)
    }
  }
}