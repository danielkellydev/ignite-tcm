import { Application } from "@hotwired/stimulus"
import MobileMenuController from "./mobile_menu_controller"
import NavScrollController from "./nav_scroll_controller"

const application = Application.start()
application.register("mobile-menu", MobileMenuController)
application.register("nav-scroll", NavScrollController)