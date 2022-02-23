import PropTypes from "prop-types"
import styles from "./Button.module.css"

// Defining the HTML tag that the component will support
const asMapping = {
  button: "button",
  a: "a",
}
// Create a functional component that take
// children: the node passed inside the Component
// as: the selected html tag
// ...props: the default attribute of the Component

const Button = ({ children, as, variant, ...props }) => {
  const Component = asMapping[as]

  return (
    <Component {...props} className={styles[variant]}>
      {children}
    </Component>
  )
}
Button.propTypes = {
  as: PropTypes.string,
  variant: PropTypes.string,
  children: PropTypes.string.isRequired,
}

Button.defaultProps = {
  as: "button",
  variant: "primary",
}

export default Button
