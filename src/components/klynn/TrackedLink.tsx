'use client'

import Link from 'next/link'
import type { ComponentProps } from 'react'
import { track, type AnalyticsEventName, type AnalyticsProperty } from '@/lib/analytics'

/**
 * Link que dispara un evento de analítica al hacer clic (consent-safe: si no
 * hay consentimiento, `track()` es no-op). Solo metadatos no personales.
 */
export default function TrackedLink({
  event,
  eventProps,
  onClick,
  ...props
}: ComponentProps<typeof Link> & {
  event: AnalyticsEventName
  eventProps?: Record<string, AnalyticsProperty>
}) {
  return (
    <Link
      {...props}
      onClick={(e) => {
        track(event, eventProps)
        onClick?.(e)
      }}
    />
  )
}
