require 'sinatra'
require 'pry'
require 'sinatra/reloader'
require 'yahoofinance'

get '/' do 

	#if params["stock"] ==nil && params[:stock] != ""
	@name = params[:stock]
	#passing in this variable 
	@stock = YahooFinance::get_quotes(YahooFinance::StandardQuote, @name)[@name].lastTrade
	
	
	else @name = ""

	erb(:index)

end