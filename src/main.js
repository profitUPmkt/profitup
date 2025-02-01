import './style.css'

const mainContent = `
  <div class="container">
    <header class="header">
      <div class="logo">
        <span class="profit">Profit</span><span class="up">UP</span>
      </div>
    </header>

    <section class="hero">
      <h1>Transforme seu Marketing em Resultados</h1>
      <p>Ajudamos empresas a alcançarem seu potencial máximo através de estratégias de marketing completas e personalizadas.</p>
      <a href="#contact" class="cta-button">Comece Agora</a>
    </section>

    <section class="services">
      <img src="servi.png" alt="Timeline de serviços" class="timeline-image">
    </section>

    <section id="contact" class="contact">
      <h2>Entre em Contato</h2>
      <div class="contact-container">
        <form class="contact-form" onsubmit="event.preventDefault(); alert('Mensagem enviada com sucesso!');">
          <div class="form-group">
            <label for="name">Nome</label>
            <input type="text" id="name" name="name" required>
          </div>
          
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required>
          </div>
          
          <div class="form-group">
            <label for="phone">Telefone</label>
            <input type="tel" id="phone" name="phone" required>
          </div>
          
          <button type="submit" class="submit-button">Enviar Mensagem</button>
        </form>

        <div class="contact-divider">
          <span>ou</span>
        </div>

        <a href="https://wa.me/5500000000000" target="_blank" class="whatsapp-button">
          Falar pelo WhatsApp
        </a>
      </div>
    </section>
  </div>
`

document.querySelector('#app').innerHTML = mainContent