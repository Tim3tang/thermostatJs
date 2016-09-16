ENV["RACK_ENV"] ||= "development"
require 'sinatra/base'

class Thermostat < Sinatra::Base
  get '/' do
    'Hello MyApp!'
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end