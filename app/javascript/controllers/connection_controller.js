import { Controller } from "@hotwired/stimulus";
import { FetchRequest } from "@rails/request.js";

// Connects to data-controller="connection"
export default class extends Controller {
  static targets = ["form"];

  async testConnection() {
    const formData = new FormData(this.formTarget);

    const request = new FetchRequest("post", "/connections/test", {
      body: formData,
      responseKind: "turbo-stream",
    });

    await request.perform();
  }
}
