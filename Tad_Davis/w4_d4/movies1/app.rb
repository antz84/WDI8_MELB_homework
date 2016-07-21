require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'httparty'

get '/' do
	erb :index
	
end

get '/display' do
	
	@searchResult = HTTParty.get("http://omdbapi.com/?t=#{params["movie_search"]}" )
	
	


	 erb :display
end


get '/about' do
	erb :about
	
end
