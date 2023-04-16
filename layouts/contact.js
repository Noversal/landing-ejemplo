export default function Contact () {
  return /* html */`
<form action="#" method="post">
  <label for="name">Nombre:</label>
  <input type="text" id="name" name="name" required>

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>

  <label for="message">Mensaje:</label>
  <textarea id="message" name="message" required></textarea>

  <button type="submit">Enviar</button>
</form>
    `
}
