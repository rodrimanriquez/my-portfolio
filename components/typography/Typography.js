import styles from "./typography.module.css"

// Defining the HTML tag that the component will support
const variantsMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  body1: "p",
}

// Create a functional component that take
// variant: the selected html tag
// color: the selected color
// children: the node passed inside the Component
// ...props: the default attribute of the Component

const Typography = ({ variant, type, children, ...props }) => {
  // If the variant exists in variantsMapping, we use it.
  // Otherwise, use p tag instead.

  const Component = variant ? variantsMapping[variant] : "p"

  return (
    <Component className={styles[type]} {...props}>
      {children}
    </Component>
  )
}

export default Typography
