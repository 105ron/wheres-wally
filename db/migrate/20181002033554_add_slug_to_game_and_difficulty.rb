class AddSlugToGameAndDifficulty < ActiveRecord::Migration[5.2]
  def change
    add_column :games, :slug, :string
    add_index :games, :slug
    add_column :difficulties, :slug, :string
    add_index :difficulties, :slug
  end
end
