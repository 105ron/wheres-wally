AdminUser.create!(email: Figaro.env.admin_username, password: Figaro.env.admin_password, password_confirmation: Figaro.env.admin_password)

easy = Difficulty.create(name: "Easy")
medium = Difficulty.create(name: "Medium")
hard = Difficulty.create(name: "Hard")

def easy_games
  [
    {src: "fire.jpg", title: "Fire"},
    {src: "beach.jpg", title: "Beach"},
    {src: "market.jpg", title: "Market"}
  ]
end

def medium_games
  [
    {src: "game.jpg", title: "Game"},
    {src: "soldier.jpg", title: "Soldier"},
    {src: "christmas.jpg", title: "Christmas"}
  ]
end

def hard_games
  [
    {src: "carnival.jpg", title: "Carnival"},
    {src: "fair.jpg", title: "Fair"},
    {src: "gobbling-gluttons.jpg", title: "Gobbling Gluttons"}
  ]
end

easy_games.each do |game|
  Game.create(
    game.merge( {difficulty: easy} )
    )
end

medium_games.each do |game|
  Game.create(
    game.merge( {difficulty: medium} )
    )
end

hard_games.each do |game|
  Game.create(
    game.merge( {difficulty: hard} )
    )
end