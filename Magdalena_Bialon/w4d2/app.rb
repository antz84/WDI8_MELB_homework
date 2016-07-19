require 'sinatra'
require 'sinatra/reloader'
require 'pry'


get '/' do

  require 'yahoofinance'
  @result = YahooFinance::get_quotes(YahooFinance::StandardQuote, 'MSFT')['MSFT'].lastTrade


  erb(:index)
end
