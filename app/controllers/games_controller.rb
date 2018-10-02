class GamesController < ApiController

  def show
    @game = Game.friendly.find(params[:id])
    # buttons = @games.map do |button|
    #   { :id => button.id, :label => button.title, :url => "/api/levels/#{params[:id]}/#{button.slug}" }
    # end
    # buttonsData = { :title => "#{params[:id].capitalize} - Choose Your game", :buttonData => buttons }
    buttons = [
      { :id => 1, :label => "Play", :url => "/boards/#{@game.title}" },
      { :id => 2, :label => "High Scores", :url => "/high-scores/#{@game.title}" }
    ]
    buttonsData = { :title => "Select your option", :buttonData => buttons }
    render json: buttonsData.to_json
  end
end