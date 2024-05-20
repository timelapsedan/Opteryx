<template>
  <div id="screenSix" class="app-contact">
    <div class="ctr">
      <div class="app-contact-intro">
        <h3 class="h-one-b">Contact Us</h3>
        <h4 class="h-two">Get In Touch Today</h4>
        <div class="app-contact-grid">
          <div class="app-contact-form">
            <form>
              <input type="text" placeholder="Your Name" ref="nameInput" @focus="clearPlaceholder($event)" @blur="restorePlaceholder($event, 'Your Name')" />
              <input type="text" placeholder="Your Telephone" ref="telephoneInput" @focus="clearPlaceholder($event)" @blur="restorePlaceholder($event, 'Your Telephone')" />
              <input type="text" placeholder="Your Email" ref="emailInput" @focus="clearPlaceholder($event)" @blur="restorePlaceholder($event, 'Your Email')" />
              <textarea placeholder="Your Message" rows="5" ref="messageInput" @focus="clearPlaceholder($event)" @blur="restorePlaceholder($event, 'Your Message')"></textarea>
            </form>
          </div>
          <div class="app-contact-info">
            <ul>
              <li>
                <a href="tel:01234567890">
                  <span class="h-four">Call Us</span>
                  <div>
                    <div class="app-contact-icon">
                      <svg viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
                    </div>
                    <div class="app-contact-link">
                      <span class="h-two">
                        01234 567 890
                      </span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:info@opteryx-uav.com">
                  <span class="h-four">Email Us</span>
                  <div>
                    <div class="app-contact-icon">
                      <svg viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
                    </div>
                    <div class="app-contact-link">
                      <span class="h-two">
                        info@opteryx-uav.com
                      </span>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    clearPlaceholder (event) {
      event.target.removeAttribute('placeholder')
    },
    restorePlaceholder (event, originalPlaceholder) {
      setTimeout(() => {
        if (!event.target.value) {
          event.target.setAttribute('placeholder', originalPlaceholder)
        }
      }, 100)
    }
  }
}
</script>
<style scoped>
.app-contact {
  background: var(--primary);
  display: flex;
  align-items: center;
  padding: 9rem 0;
  width: 100%;
}

.app-contact h4 {
  margin: 0 0 6rem 0;
}

.app-contact-intro {
  text-align: center;
}

.app-contact-grid {
  width: 100%;
}

.app-contact-form {
  margin: 0 0 3rem 0;
  width: 100%;
}

.app-contact-form input,
.app-contact-form textarea {
  background: rgba(255, 255, 255, 0.3);
  border: none;
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.6rem;
  outline: 0;
  margin: 0 0 1rem 0;
  padding: 1rem;
  width: 100%;
}

.app-contact-form input::placeholder,
.app-contact-form textarea::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

.app-contact-info {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
}

.app-contact-info ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 100%;
}

.app-contact-info ul li:first-child {
  margin: 0 0 3rem 0;
}

.app-contact-info ul li a {
  text-decoration: none;
  text-align: center;
}

.app-contact-info ul li > div {
  display: flex;
  align-items: center;
  width: 100%;
}

.app-contact-icon {
  position: relative;
  border: 5px solid var(--secondary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  margin: 0 auto 3rem auto;
  width: 60%;
  overflow: hidden;
}

.app-contact-icon::before {
  content: '';
  display: block;
  padding-top: 100%; /* This sets the height relative to the width */
}

.app-contact-icon svg {
  height: 60%;
  width: 60%;
}

.app-contact-icon svg path {
  fill: rgba(255, 255, 255, 0.3);
  transition: fill ease 0.3s;
}

.app-contact-info ul li:hover .app-contact-icon svg path {
  fill: rgba(255, 255, 255, 1);
}

@media only screen and (min-width: 600px) {
  .app-contact-info ul {
    display: flex;
    justify-content: center;
    gap: 3rem;
  }
}

@media only screen and (min-width: 1024px) {
  .app-contact-form {
    margin: 0;
  }

  .app-contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    gap: 3rem;
  }
}
</style>
