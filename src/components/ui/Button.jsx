import { forwardRef } from 'react'
import clsx from 'clsx'

const BUTTON_BASE_CLASSES =
  'inline-flex min-w-[150px] items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold uppercase tracking-wide transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60 dark:focus-visible:ring-offset-background-dark'

const VARIANT_CLASSES = {
  primary:
    'bg-primary-accent text-primary shadow-lg shadow-primary-accent/30 hover:opacity-90',
  secondary:
    'border border-primary text-primary hover:bg-primary/10 dark:border-text-dark dark:text-text-dark dark:hover:bg-white/10',
}

const isExternalHref = (href) => /^https?:\/\//.test(href ?? '')

const Button = forwardRef(
  (
    {
      variant = 'primary',
      href,
      external,
      className,
      children,
      type = 'button',
      ...props
    },
    ref,
  ) => {
    const Comp = href ? 'a' : 'button'
    const shouldOpenInNewTab =
      external ?? (href ? isExternalHref(href) : false)
    const rel =
      Comp === 'a' && shouldOpenInNewTab
        ? 'noreferrer noopener'
        : props.rel || undefined
    const target =
      Comp === 'a' && shouldOpenInNewTab ? '_blank' : props.target

    return (
      <Comp
        ref={ref}
        className={clsx(
          BUTTON_BASE_CLASSES,
          VARIANT_CLASSES[variant] ?? VARIANT_CLASSES.primary,
          className,
        )}
        href={href}
        target={target}
        rel={rel}
        type={Comp === 'button' ? type : undefined}
        {...props}
      >
        {children}
      </Comp>
    )
  },
)

Button.displayName = 'Button'

export default Button
