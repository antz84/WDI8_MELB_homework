require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'


get '/' do
  # 'hi there'
  erb :index
end


get '/movies_search' do
  movies = params["movie"].downcase
  @result = HTTParty.get("http://www.omdbapi.com/?t=#{movies}")


  erb :movies_search
end

  # movies["Year"]end


get '/about' do
   erb :about
end
