import PropTypes from 'prop-types'
import { useLanguage } from '@/hooks/useLanguage.js'

export default function ServiceCard({
  title,
  description,
  pricing,
  imageUrl,
  alt = '',
}) {
  const { isGerman } = useLanguage()

  return (
    <div className="group grid grid-rows-[auto_auto_1fr_auto] gap-4 h-full">
      <div className="w-full overflow-hidden rounded-lg">
        <img
          src={imageUrl}
          alt={alt}
          className="aspect-[3/4] w-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <h3 className="text-lg font-bold text-primary dark:text-primary-accent">
        {title}
      </h3>

      <p className="text-sm text-text-light/80 dark:text-text-dark/80">
        {description}
      </p>

      {pricing && (
        <div className="space-y-1 border-t border-primary/10 pt-3 dark:border-primary-accent/20">
          <p
            className={`text-xs font-bold tracking-wide text-primary-accent ${isGerman ? '' : 'uppercase'}`}
          >
            {isGerman ? 'PREISE' : 'Treatment costs'}
          </p>
          {Object.values(pricing).map((price, index) => (
            <p key={index} className="text-sm text-text-light dark:text-text-dark">
              {price}
            </p>
          ))}
        </div>
      )}
    </div>
  )
}

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  pricing: PropTypes.object,
  imageUrl: PropTypes.string.isRequired,
  alt: PropTypes.string,
}
