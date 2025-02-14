import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["menu", "button", "hamburger", "close"]

  connect() {
      console.log("Mobile menu controller connected") // Debug log
    // Ensure menu starts hidden
    this.menuTarget.classList.add('hidden')
    // Close menu when clicking outside
    document.addEventListener('click', this.handleClickOutside.bind(this))
  }

  disconnect() {
    document.removeEventListener('click', this.handleClickOutside.bind(this))
  }

  toggle(event) {
    console.log("Toggle clicked")
    event.stopPropagation()
    this.menuTarget.classList.toggle('hidden')
    this.hamburgerTarget.classList.toggle('hidden')
    this.closeTarget.classList.toggle('hidden')
  }

  close() {
    this.menuTarget.classList.add('hidden')
    this.hamburgerTarget.classList.remove('hidden')
    this.closeTarget.classList.add('hidden')
  }

  handleClickOutside(event) {
    if (!this.element.contains(event.target) && !this.menuTarget.classList.contains('hidden')) {
      this.close()
    }
  }
}