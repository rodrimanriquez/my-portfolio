import Button from "../button/Button"
import { useForm } from "react-hook-form"
import Typography from "../typography/Typography"
import styles from "./SectionContact.module.css"
import sendEmail from "../../services/sendEmail"
import useToggle from "../../hooks/useToggle"
import ContactModal from "./ContactModal"

const ContactForm = () => {
  const [isShowModal, toggleModal] = useToggle(false)
  const [isLoading, toggleLoading] = useToggle(false)
  useToggle
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {

    toggleLoading()

    const isSent = sendEmail(data)

    toggleLoading

    reset()
  }

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit(onSubmit)}>
     
      <label className={styles.contactLabel} form="name">
        Nombre
      </label>
      <input
        className={styles.contactInput}
        type="text"
        id="name"
        {...register("name", { required: true, minLength: 2 })}
      />
      {errors.name && <Typography>Nombre no es válido</Typography>}
      <label className={styles.contactLabel} form="email">
        Correo electrónico
      </label>
      <input
        className={styles.contactInput}
        type="text"
        id="email"
        {...register("email", { required: true, minLength: 2 })}
      />
      {errors.name && <Typography>Correo electrónico no es válido</Typography>}
      <label className={styles.contactLabel} form="message">
        Mensaje
      </label>
      <textarea
        className={styles.contactTextArea}
        type="text"
        id="password"
        rows="6"
        {...register("message", { required: true, minLength: 2 })}
      />
      {errors.name && (
        <Typography as="p" variant="normal">
          Mensaje no es válido
        </Typography>
      )}

      <Button as="button" variant="primary" type="submit">
        {isLoading ? "Enviando..." : "Enviar"}
      </Button>
    </form>
  )
}

export default ContactForm
