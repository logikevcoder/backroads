import React from "react"
import Title from "../Title"
import styles from "../../css/contact.module.css"

const Contact = () => {
  return (
    <section className={styles.contact}>
      <Title title="Contact" subtitle="us" />
      <div className={styles.center}>
        <form
          className={styles.form}
          action="https://formspree.io/logikevcoder@gmail.com"
          method="POST"
        >
          <div>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Joh Smith"
              className={styles.formControl}
            />
          </div>
          <div>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="email@email.com"
              className={styles.formControl}
            />
          </div>
          <div>
            <textarea
              name="message"
              id="message"
              rows="10"
              placeholder="Hello there"
              className={styles.formControl}
            />
          </div>
          <div>
            <input type="submit" value="submit" className={styles.submit} />
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
