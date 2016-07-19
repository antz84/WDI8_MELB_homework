require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'yahoofinance'


get '/stocks' do

  @st = params[:stock]

  #@result = YahooFinance::get_quotes(YahooFinance::StandardQuote, 'MSFT')['MSFT'].lastTrade
  @result = YahooFinance::get_quotes(YahooFinance::StandardQuote, @st)[@st].lastTrade

  erb(:index)
end


#browser : http://localhost:4567/stocks?stock=MSFT
#browser : http://localhost:4567/stocks?stock=AAPL
