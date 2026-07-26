/**
 * Analytics helper — envoltura fina sobre Vercel Analytics `track()`.
 *
 * Consentimiento: Vercel Analytics solo se monta en `ConsentAwareAnalytics`
 * cuando el usuario acepta todas las cookies. Si nunca consiente, `track()`
 * aquí es un no-op (el SDK no registró handler). Además NO enviamos datos
 * personales: los eventos solo llevan metadatos no identificables (source,
 * category, slug de artículo, canal de audiencia).
 */

import { track as vercelTrack } from '@vercel/analytics'

export const AnalyticsEvents = {
  PrimaryCtaClick:        'primary_cta_click',
  InvestorMeetingRequest: 'investor_meeting_request',
  InvestorContactSubmit:  'investor_contact_submit',
  PartnerContactSubmit:   'partner_contact_submit',
  ContactFormSubmit:      'contact_form_submit',
  ArticleRead:            'article_read',
  CategoryNavigation:     'category_navigation',
  SocialLinkClick:        'social_link_click',
} as const

export type AnalyticsEventName = (typeof AnalyticsEvents)[keyof typeof AnalyticsEvents]

/** Primitivas aceptadas por track() de Vercel. */
export type AnalyticsProperty = string | number | boolean | null

/**
 * Dispara un evento. Nunca lanza. Solo debe recibir metadatos NO personales.
 */
export function track(
  event: AnalyticsEventName,
  properties?: Record<string, AnalyticsProperty>,
): void {
  try {
    vercelTrack(event, properties)
  } catch {
    // Silenciado a propósito — la analítica jamás debe romper la UX.
  }
}
