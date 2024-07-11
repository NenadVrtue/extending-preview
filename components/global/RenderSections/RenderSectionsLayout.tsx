import PropTypes from 'prop-types'
import * as SectionComponents from '../../sections'
import capitalizeString from '.././capitalizeString'

function resolveSections(section) {
  // eslint-disable-next-line import/namespace
  const Section = SectionComponents[capitalizeString(section._type)]

  if (Section) {
    return Section
  }

  console.error('Cant find section', section) // eslint-disable-line no-console
  return null
}

function RenderSectionsLayout(props) {
  const { sections, data } = props

  if (!sections) {
    console.error('Missing section')
    return <div>Missing sections</div>
  }

  return (
    <>
      {sections.map((section, i) => {
        const SectionComponent = resolveSections(section)
        if (!SectionComponent) {
          return (
            <div key={section._key || i}>Missing section {section._type}</div>
          )
        }
        return <SectionComponent {...section} key={section._key} />
      })}
    </>
  )
}

RenderSectionsLayout.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      _type: PropTypes.string,
      _key: PropTypes.string,
    }),
  ),
}

export default RenderSectionsLayout
