OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :google_oauth2, '353785721759-4bp1vlk62ctn0uj2voea76p7c5uhttfh.apps.googleusercontent.com', '4_2NQDZGgP1enKqwggy-8lY2', {client_options: {ssl: {ca_file: Rails.root.join("cacert.pem").to_s}}}
end