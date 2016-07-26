# how to start the virtual server in terminal
# ruby main.rb

# how this works in terminal...type in terminal
# pry
# require 'httparty'
# HTTParty.get('http..')
# result = copyaboveline
# result["Title"]

require 'pry'
require 'httparty'
require 'sinatra'
require 'sinatra/reloader'

get '/' do     # / is the location of the root aka home page
  erb :index
end

get '/blog_post' do
  erb :blog_post
end

get '/contact_me' do
  search = params['movie_search'].gsub(/\s+/, "+").strip.downcase
  @result = HTTParty.get("http://www.omdbapi.com/?t=#{ search }")

  erb :contact_me
end

# binding.pry
