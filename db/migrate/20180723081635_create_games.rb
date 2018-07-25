class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.text :src, null: false
      t.text :title
      t.references :difficulty, foreign_key: true
      t.timestamps
    end
  end
end
