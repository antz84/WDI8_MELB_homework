require 'sinatra'
require 'sinatra/reloader'
require 'HTTParty'

get '/' do
  erb :index
end

get '/blog_post' do
  erb :blog_post
end

get '/contact_me' do
  contact = params['movie_search'].gsub(/\s+/, "+").strip.downcase
  @result = HTTParty.get("http://www.omdbapi.com/?t=#{ search }")
  erb :contact_me
end
