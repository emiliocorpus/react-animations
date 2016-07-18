class CreatePokemons < ActiveRecord::Migration
  def change
    create_table :pokemons do |t|
      t.string :name
      t.string :picture_url
      t.text :description

      t.timestamps null: false
    end
  end
end
