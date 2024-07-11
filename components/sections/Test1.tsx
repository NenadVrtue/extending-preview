const Test1 = (props) => {
  const { title, variation } = props
  const colors = {
    primary: 'bg-blue-500 text-white ',
    secondary: 'bg-red-500 text-white',
    accentDark: 'bg-yellow-500 text-white',
    grey: 'bg-grey text-white',
    greyDark: 'bg-grey-dark text-white',
    primaryLight: 'bg-brand-primary-light text-grey-dark',
    secondaryLight: 'bg-brand-secondary-light text-grey-dark',
    accentLight: 'bg-brand-accent-light text-grey-dark',
  }
  return (
    <section className={`min-h-screen ${colors[variation]}`}>
      <h1>{title}</h1>
    </section>
  )
}
export default Test1
