class GamesController < ApiController

  def show
    @game = Game.joins(:difficulty).where(:difficulties => {:slug => params[:id]})
    render json: @game.to_json
  end
end