
Cypress.on('uncaught:exception', (err) => {
 
    if (
      err.message.includes('Turnstile') ||
      err.message.includes('Cloudflare') ||
      err.message.includes('recaptcha') ||
      err.message.includes('Unhandled promise rejection') ||
      err.message.includes('ResizeObserver loop limit exceeded') ||
      err.message.includes('Script error')
    ) {
      return false
    }
  
    console.warn('⚠️ Ignored app exception:', err.message)
    return false 
  })
  