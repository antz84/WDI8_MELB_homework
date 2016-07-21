require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'yahoofinance'

get '/' do
  erb(:index)
end

get '/stock' do
  # if params[:stock] == "" || params[:stock] == nil
  #erb(:error)
    # puts
  # else
    @stock_abbrev = params[:stock]
    result = YahooFinance::get_quotes(YahooFinance::StandardQuote, @stock_abbrev)
    @finalAnswer = result[@stock_abbrev].lastTrade.to_s
    erb(:stock)
end
