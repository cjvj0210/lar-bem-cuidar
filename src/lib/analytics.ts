// Google Analytics 4 Event Tracking Utility

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export const trackEvent = (eventName: string, params?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      ...params,
      location: window.location.pathname
    });
  }
};

export const trackWhatsAppClick = (source?: string) => {
  trackEvent('whatsapp_click', {
    source: source || 'unknown',
    event_category: 'engagement',
    event_label: 'WhatsApp Click'
  });
};

export const trackPhoneClick = () => {
  trackEvent('phone_click', {
    event_category: 'engagement',
    event_label: 'Phone Click'
  });
};

export const trackFormSubmit = (formName: string) => {
  trackEvent('form_submit', {
    form_name: formName,
    event_category: 'conversion',
    event_label: 'Form Submission'
  });
};

export const trackCTAClick = (ctaText: string, ctaLocation?: string) => {
  trackEvent('cta_click', {
    cta_text: ctaText,
    cta_location: ctaLocation || window.location.pathname,
    event_category: 'engagement',
    event_label: 'CTA Click'
  });
};

export const trackServiceView = (serviceName: string) => {
  trackEvent('service_view', {
    service_name: serviceName,
    event_category: 'engagement',
    event_label: 'Service Page View'
  });
};

export const trackBlogRead = (articleTitle: string) => {
  trackEvent('blog_read', {
    article_title: articleTitle,
    event_category: 'engagement',
    event_label: 'Blog Article Read'
  });
};

// Track scroll depth
export const initScrollTracking = () => {
  if (typeof window === 'undefined') return;

  let scrolled50 = false;
  let scrolled75 = false;
  let scrolled100 = false;

  const handleScroll = () => {
    const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

    if (scrollPercentage >= 50 && !scrolled50) {
      scrolled50 = true;
      trackEvent('scroll_50', {
        page_title: document.title,
        event_category: 'engagement',
        event_label: 'Scroll 50%'
      });
    }

    if (scrollPercentage >= 75 && !scrolled75) {
      scrolled75 = true;
      trackEvent('scroll_75', {
        page_title: document.title,
        event_category: 'engagement',
        event_label: 'Scroll 75%'
      });
    }

    if (scrollPercentage >= 90 && !scrolled100) {
      scrolled100 = true;
      trackEvent('scroll_100', {
        page_title: document.title,
        event_category: 'engagement',
        event_label: 'Scroll 100%'
      });
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });

  return () => window.removeEventListener('scroll', handleScroll);
};

// Track time on site
export const initTimeTracking = () => {
  if (typeof window === 'undefined') return;

  let tracked2min = false;
  let tracked5min = false;

  const startTime = Date.now();

  const checkTime = () => {
    const timeOnSite = (Date.now() - startTime) / 1000; // seconds

    if (timeOnSite >= 120 && !tracked2min) {
      tracked2min = true;
      trackEvent('time_on_site_2min', {
        page_title: document.title,
        time_seconds: Math.floor(timeOnSite),
        event_category: 'engagement',
        event_label: 'Time on Site 2min'
      });
    }

    if (timeOnSite >= 300 && !tracked5min) {
      tracked5min = true;
      trackEvent('time_on_site_5min', {
        page_title: document.title,
        time_seconds: Math.floor(timeOnSite),
        event_category: 'engagement',
        event_label: 'Time on Site 5min'
      });
      clearInterval(interval);
    }
  };

  const interval = setInterval(checkTime, 10000); // Check every 10 seconds

  return () => clearInterval(interval);
};
