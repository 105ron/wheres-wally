class GamesController < ApiController
  def index
    @games = Game.find(1)
    render json: @games.to_json
  end
end