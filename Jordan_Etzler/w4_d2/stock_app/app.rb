require 'sinatra'
require 'sinatra/reloader'
require 'yahoofinance'
require 'pry'

get '/' do

  @ticker = params[:stock_ticker]

  if @ticker == nil || @ticker == ""
    @ticker = "GOOG"
  end

  @open_price = YahooFinance::get_quotes(YahooFinance::StandardQuote, @ticker)[@ticker].open
  @ask_price = YahooFinance::get_quotes(YahooFinance::StandardQuote, @ticker)[@ticker].ask
  @high_price = YahooFinance::get_quotes(YahooFinance::StandardQuote, @ticker)[@ticker].dayHigh
  @low_price = YahooFinance::get_quotes(YahooFinance::StandardQuote, @ticker)[@ticker].dayLow
  @name = YahooFinance::get_quotes(YahooFinance::StandardQuote, @ticker)[@ticker].name

  erb(:index)

end
