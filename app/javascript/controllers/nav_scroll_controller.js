import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["nav"]

  connect() {
    this.onScroll()
    window.addEventListener('scroll', this.onScroll.bind(this))
  }

  disconnect() {
    window.removeEventListener('scroll', this.onScroll.bind(this))
  }

  onScroll() {
    if (window.scrollY > 50) {
      this.navTarget.classList.add('bg-black/50', 'backdrop-blur-md')
    } else {
      this.navTarget.classList.remove('bg-black/50', 'backdrop-blur-md')
    }
  }
}