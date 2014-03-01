# Staging configuration is identical to production, with some overrides
# for hostname, etc.

require_relative './production'

Pedalr::Application.configure do

  config.action_mailer.default_url_options = {
    host: 'staging.pedalr.com',
    protocol: 'https'
  }
end
