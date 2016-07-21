require 'sinatra'
require 'pry'
require 'sinatra/reloader'
require 'yahoofinance'

get '/stocks' do 


  # this code below only retrieves one result
  # @result = YahooFinance::get_quotes(YahooFinance::StandardQuote, 'MSFT')['MSFT'].lastTrade

  @answer = params[:stock]

  @result = YahooFinance::get_quotes(YahooFinance::StandardQuote, @answer)[@answer].lastTrade

  erb(:stocks)
end

####### DT's code

# require 'sinatra'
# require 'sinatra/reloader'
# require 'pry'
# require 'yahoofinance'

# get '/' do 
#   # this makes it work if there's nothing on the page
#   if params[:stock] != nil && params[:stock] != ""
#     result = YahooFinance::get_quotes(YahooFinance::StandardQuote, params[:stock])
#     @last_trade = result[params[:stock]].lastTrade
#   end
  
#   erb :index

# end