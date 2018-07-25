class GamesController < ApiController
  def index
    @games = Game.all
    render json: @games.to_json
  end
end