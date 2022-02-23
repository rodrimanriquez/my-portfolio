import PropTypes from "prop-types"
import styles from "./typography.module.css"

// Defining the HTML tag that the component will support

const colorMapping = {
  primary: "primary-color",
  text: "text-color",
}

const asMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  p: "p",
}

// Create a functional component that take
// variant: the selected html tag
// color: the selected color
// children: the node passed inside the Component
// ...props: the default attribute of the Component

const Typography = ({ as, variant, children, color, ...props }) => {
  const Component = asMapping[as]
  const textColor = colorMapping[color]
  return (
    <Component className={`${styles[variant]} ${textColor}`} {...props}>
      {children}
    </Component>
  )
}

Typography.defaultProps = {
  as: "p",
  variant: "normal",
  color: "text-color",
}

Typography.propTypes = {
  as: PropTypes.string,
  variant: PropTypes.string,
  children: PropTypes.string.isRequired,
  color: PropTypes.string,
}

export default Typography
