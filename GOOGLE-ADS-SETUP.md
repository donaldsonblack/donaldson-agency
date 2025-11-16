# Google Ads & Analytics Optimization Guide

This site is now optimized for Google Ads conversion tracking and Google Analytics 4. Follow this guide to complete the setup.

## Overview

The site includes:
- ✅ Google Analytics 4 (GA4) tracking
- ✅ Google Ads base tracking
- ✅ Consent Mode v2 (GDPR compliant)
- ✅ Enhanced conversions
- ✅ Remarketing tags
- ✅ Event tracking utilities
- ✅ Contact form conversion tracking

## Google Ads Account Setup

### Current IDs
- **Google Ads ID**: `AW-17729509807`
- **GA4 Measurement ID**: `G-SXX8QKDWQ0`

### Step 1: Create Conversion Actions in Google Ads

You need to create conversion actions in your Google Ads account and update the conversion labels.

1. Go to Google Ads → Tools & Settings → Conversions
2. Click "+ New conversion action"
3. Create these three conversion actions:

#### Conversion 1: Contact Form Submission
- **Name**: Contact Form Submission
- **Category**: Submit lead form
- **Value**: Use the same value for each conversion OR Use different values for each conversion
  - Set to $100 (or your estimated lead value)
- **Count**: One (recommended for lead forms)
- **Conversion window**: 30 days
- **Click-through conversion window**: 30 days
- **View-through conversion window**: 1 day
- **Attribution model**: Data-driven (or Last click)

After creating, copy the **conversion label** (looks like: `abc123DEF456`)

#### Conversion 2: Phone Click (Optional)
- **Name**: Phone Click
- **Category**: Contact
- **Value**: $50
- **Count**: Every
- **Conversion window**: 30 days

#### Conversion 3: Email Click (Optional)
- **Name**: Email Click
- **Category**: Contact
- **Value**: $50
- **Count**: Every
- **Conversion window**: 30 days

### Step 2: Update Conversion Labels

Open `src/lib/analytics.ts` and update the conversion labels:

```typescript
export const CONVERSION_LABELS = {
  CONTACT_FORM: "YOUR_CONTACT_FORM_LABEL",  // Replace with actual label
  PHONE_CLICK: "YOUR_PHONE_CLICK_LABEL",    // Replace with actual label (optional)
  EMAIL_CLICK: "YOUR_EMAIL_CLICK_LABEL",    // Replace with actual label (optional)
};
```

### Step 3: Enable Enhanced Conversions

In Google Ads:
1. Go to Tools & Settings → Conversions
2. Click on your "Contact Form Submission" conversion
3. Click "Settings"
4. Under "Enhanced conversions", toggle it ON
5. Select "Google tag" as the method
6. Save

This allows Google to use hashed email addresses and phone numbers for better conversion attribution while maintaining privacy.

### Step 4: Enable Remarketing

1. Go to Tools & Settings → Audience Manager
2. Click "Audience sources"
3. Verify that Google Ads tag is set up (it should show as active)
4. Create remarketing audiences:
   - All website visitors (last 30 days)
   - Contact page visitors (last 30 days)
   - Form starters who didn't complete
   - Past converters (for exclusion)

## Google Analytics 4 Setup

### Recommended Events to Monitor

The site automatically tracks these events:

1. **generate_lead** - Contact form submissions
2. **click** - Button/link clicks
3. **scroll** - Scroll depth tracking
4. **file_download** - File downloads
5. **video_start** - Video plays
6. **phone_click** - Phone number clicks
7. **email_click** - Email clicks

### Create Custom Conversion Events in GA4

1. Go to Google Analytics → Admin → Events
2. Click "Create Event" for each of these:

#### Lead Conversion
- **Event name**: `conversion_lead`
- **Matching conditions**: `generate_lead` equals `event_name`
- Mark as conversion: Yes

#### Phone Click Conversion
- **Event name**: `conversion_phone_click`
- **Matching conditions**: `phone_click` equals `event_name`
- Mark as conversion: Yes

### Link GA4 to Google Ads

1. In GA4: Admin → Product Links → Google Ads Links
2. Click "Link"
3. Select your Google Ads account
4. Enable:
   - Personalized advertising
   - Auto-tagging
5. Import conversions to Google Ads (optional but recommended)

## Testing Your Setup

### 1. Test in Development
```bash
npm run dev
```

Open browser DevTools → Network tab, filter by "collect" to see GA4 hits

### 2. Use Google Tag Assistant

Install [Google Tag Assistant Chrome Extension](https://chrome.google.com/webstore/detail/tag-assistant-legacy-by-g/kejbdjndbnbjgmefkgdddjlbokphdefk)

1. Visit your site
2. Click the Tag Assistant icon
3. Verify:
   - Google Ads Tag is present
   - GA4 tag is present
   - No errors

### 3. Test Contact Form Conversion

1. Fill out and submit the contact form
2. Check in Google Ads (Conversions will appear within 3 hours, usually faster)
3. Check in GA4 Realtime reports for `generate_lead` event

### 4. Verify Cookie Consent

1. Clear cookies
2. Reload the page
3. Decline cookies → verify no tracking hits in DevTools
4. Reload and Accept cookies → verify tracking hits appear

## Performance Optimization Tips

### 1. Use UTM Parameters in All Ads

Append UTM parameters to your ad URLs:
```
https://donaldson.agency/?utm_source=google&utm_medium=cpc&utm_campaign=brand&utm_content=ad1
```

### 2. Enable Auto-Tagging

In Google Ads → Settings → Account settings → Auto-tagging: ON

### 3. Set Up Conversion Value Rules

If different types of leads have different values:
1. Google Ads → Tools → Conversion value rules
2. Create rules based on:
   - Audience
   - Device
   - Location

### 4. Create Remarketing Campaigns

Target people who:
- Visited but didn't convert
- Visited contact page but didn't submit form
- Engaged with specific content

### 5. Use Customer Match

Upload your email list (from your database) to create a customer match audience for:
- Targeting existing customers with upsells
- Excluding recent converters
- Creating lookalike audiences

## Monitoring & Reports

### Key Metrics to Track

**Google Ads:**
- Conversion rate
- Cost per conversion
- Conversion value
- ROAS (Return on Ad Spend)

**Google Analytics:**
- Lead generation (generate_lead events)
- User engagement (scroll depth, clicks)
- Traffic sources
- Landing page performance

### Set Up Automated Reports

1. In GA4: Explore → Create custom report
2. In Google Ads: Reports → Create custom report
3. Schedule weekly emails

## Advanced Features Available

The analytics utility (`src/lib/analytics.ts`) provides these functions you can use throughout your site:

```typescript
import {
  trackEvent,
  trackClick,
  trackScrollDepth,
  trackPhoneClick,
  trackEmailClick,
  trackFileDownload
} from '@/lib/analytics';

// Track custom events
trackEvent('button_click', { button_name: 'CTA Hero' });

// Track clicks
trackClick('Get Started Button', 'cta', '/contact');

// Track phone clicks (auto-tracks conversion)
trackPhoneClick('+1-555-123-4567');

// Track email clicks (auto-tracks conversion)
trackEmailClick('contact@example.com');

// Track file downloads
trackFileDownload('brochure.pdf');
```

## Privacy & Compliance

### GDPR Compliance
- ✅ Cookie consent banner implemented
- ✅ Consent Mode v2 enabled
- ✅ Tracking disabled by default until consent
- ✅ User data hashed for enhanced conversions

### Recommendations
1. Add a Privacy Policy page explaining cookie usage
2. Add a Cookie Policy page with detailed information
3. Consider adding a cookie preferences center
4. Ensure your contact form has proper data processing disclosures

## Troubleshooting

### Conversions Not Showing in Google Ads
- Wait 3 hours (Google Ads has a delay)
- Check if conversion action is enabled
- Verify conversion label is correct
- Test in production (not localhost)

### GA4 Events Not Appearing
- Check browser console for errors
- Verify GA4 measurement ID is correct
- Check if ad blocker is interfering
- Look in GA4 DebugView (requires debug mode)

### Cookie Consent Not Working
- Clear cookies and test again
- Check browser console for JavaScript errors
- Verify gtag is loaded before consent update

## Next Steps

1. ✅ Update conversion labels in `src/lib/analytics.ts`
2. ✅ Create conversion actions in Google Ads
3. ✅ Enable enhanced conversions
4. ✅ Link GA4 to Google Ads
5. ✅ Test thoroughly in production
6. ✅ Create remarketing audiences
7. ✅ Set up automated reports
8. ✅ Add Privacy Policy page

## Support

For issues or questions:
- Google Ads Help: https://support.google.com/google-ads
- GA4 Help: https://support.google.com/analytics
- Tag Manager: https://tagmanager.google.com

## Estimated Setup Time
- Basic setup (steps 1-3): 30 minutes
- Testing: 15 minutes
- Advanced features: 1-2 hours
- Total: ~2-3 hours
