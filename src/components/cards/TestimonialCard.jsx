import PropTypes from 'prop-types'

const MAX_STARS = 5

export default function TestimonialCard({ text, author }) {
  return (
    <div className="flex flex-col items-center rounded-lg border border-primary-accent/30 bg-background-light p-6 text-center dark:bg-background-dark/50">
      <div className="mb-2 flex text-primary-accent">
        {Array.from({ length: MAX_STARS }).map((_, index) => (
          <span key={index} className="material-symbols-outlined">
            star
          </span>
        ))}
      </div>
      <blockquote className="text-base italic">{text}</blockquote>
      <p className="mt-4 font-bold text-primary dark:text-primary-accent">
        - {author}
      </p>
    </div>
  )
}

TestimonialCard.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
}
