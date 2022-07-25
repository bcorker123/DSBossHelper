# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
User.destroy_all
Boss.destroy_all
Character.destroy_all 
Build.destroy_all
puts 'seeding bosses'
Boss.create(name:"Asylum Demon", health:825, image_url:'https://darksouls.wiki.fextralife.com/file/Dark-Souls/Boss_0036_Asylum%20Demon.jpg', location:'Undead Asylum')
Boss.create(name:"Taurus Demon", health:1215, image_url:'https://darksouls.wiki.fextralife.com/file/Dark-Souls/Boss_0015_Taurus%20Demon.jpg', location:'Undead Burg')
Boss.create(name:"Bell Gargoyle", health:1480, image_url:'https://darksouls.wiki.fextralife.com/file/Dark-Souls/Boss_0035_Bell%20Gargoyle.jpg', location:'Undead Parish')
Boss.create(name:"Capra Demon", health:1176, image_url:'https://darksouls.wiki.fextralife.com/file/Dark-Souls/Boss_0034_Capra%20Demon.jpg', location:'Undead Burg')
Boss.create(name:"Gaping Dragon", health:4401, image_url:'https://darksouls.wiki.fextralife.com/file/Dark-Souls/Boss_0026_Gaping%20Dragon.jpg', location:'Depths')
Boss.create(name:"Chaos Witch Quelaag", health:3139, image_url:'https://darksouls.wiki.fextralife.com/file/Dark-Souls/Boss_0031_Chaos%20Witch%20Quelaag.jpg', location:'Blighttown')
Boss.create(name:"Stray Demon", health:5250, image_url:'https://darksouls.wiki.fextralife.com/file/Dark-Souls/Boss_0017_Stray%20Demon.jpg', location:'Undead Asylum')
Boss.create(name:"Iron Golem", health:2880, image_url:'https://darksouls.wiki.fextralife.com/file/Dark-Souls/Boss_0023_Iron%20Golem.jpg', location:'Sen\'s Fortress')
Boss.create(name:"Dragon Slayer Ornstein and Executioner Smough", health:4287, image_url:'https://darksouls.wiki.fextralife.com/file/Dark-Souls/Boss_0020_Ornstein%20&%20Smough.jpg', location:'Anor Londo')
Boss.create(name:"Dark Sun Gwyndolin", health:2000, image_url:'https://darksouls.wiki.fextralife.com/file/Dark-Souls/Boss_0029_Dark%20Sun%20Gwyndolin.jpg', location:'Anor Londo')
Boss.create(name:"Crossbreed Priscilla", health:2300, image_url:'https://darksouls.wiki.fextralife.com/file/Dark-Souls/Boss_0030_Crossbreed%20Priscilla.jpg', location:'Painted World of Ariamis')
Boss.create(name:"Black Hydra", health:3864, image_url:'https://darksouls.wiki.fextralife.com/file/Dark-Souls/Boss_0013_Black%20Hydra.jpg', location:'Ash Lake')
Boss.create(name:"Moonlight Butterfly", health:1255, image_url:'https://darksouls.wiki.fextralife.com/file/Dark-Souls/Boss_0022_Moonlight%20Butterfly.jpg', location:'Darkroot Garden')
Boss.create(name:"Great Grey Wolf Sif", health:3432, image_url:'https://darksouls.wiki.fextralife.com/file/Dark-Souls/Boss_0025_Great%20Greywolf%20Sif.jpg', location:'Darkroot Garden')
Boss.create(name:"Hydra", health:2520, image_url:'https://darksouls.wiki.fextralife.com/file/Dark-Souls/Boss_0014_Hydra.jpg', location:'Darkroot Basin')
Boss.create(name:"Four Kings", health:9604, image_url:'https://darksouls.wiki.fextralife.com/file/Dark-Souls/Boss_0027_Four%20Kings.jpg', location:'Abyss')
Boss.create(name:"Seath the Scaleless
    ", health:5525, image_url:'https://darksouls.wiki.fextralife.com/file/Dark-Souls/Boss_0018_Seath%20the%20Scaleless.jpg', location:'Crystal Cave')
Boss.create(name:"Ceaseless Discharge", health:4200, image_url:'https://darksouls.wiki.fextralife.com/file/Dark-Souls/Boss_0033_Ceaseless%20Discharge.jpg', location:'Demon Ruins')
Boss.create(name:"Demon Firesage", health:5950, image_url:'https://darksouls.wiki.fextralife.com/file/Dark-Souls/Boss_0028_Demon%20Firesage.jpg', location:'Demon Ruins')
Boss.create(name:"Centipede Demon", health:3432, image_url:'https://darksouls.wiki.fextralife.com/file/Dark-Souls/Boss_0032_Centipede%20Demon.jpg', location:'Demon Ruins')
Boss.create(name:"The Bed of Chaos", health:2, image_url:'https://darksouls.wiki.fextralife.com/file/Dark-Souls/Boss_0016_Bed%20of%20Chaos.jpg', location:'Lost Izalith')
Boss.create(name:"Pinwheel", health:1326, image_url:'https://darksouls.wiki.fextralife.com/file/Dark-Souls/Boss_0019_Pinwheel.jpg', location:'The Catacombs')
Boss.create(name:"Gravelord Nito", health:4317, image_url:'https://darksouls.wiki.fextralife.com/file/Dark-Souls/Boss_0021_Nito.jpg', location:'Tomb of Giants')
Boss.create(name:"Gwyn Lord of Cinder", health:4250, image_url:'https://darksouls.wiki.fextralife.com/file/Dark-Souls/Boss_0024_Gwyn%20Lord%20of%20Cinder.jpg', location:'Kiln of the First Flame')

puts 'seeding builds'
Build.create(name:'Warrior', image_url:'https://darksouls.wiki.fextralife.com/file/Dark-Souls/warrior-starting-class-male-dark-souls.jpg')
Build.create(name:'Knight', image_url:'https://darksouls.wiki.fextralife.com/file/Dark-Souls/knight-starting-class-male-dark-souls.jpg')
Build.create(name:'Wanderer', image_url:'https://darksouls.wiki.fextralife.com/file/Dark-Souls/wanderer-starting-class-male-dark-souls.jpg')
Build.create(name:'Thief', image_url:'https://darksouls.wiki.fextralife.com/file/Dark-Souls/thief-starting-class-male-dark-souls.jpg')
Build.create(name:'Bandit', image_url:'https://darksouls.wiki.fextralife.com/file/Dark-Souls/bandit-starting-class-male-dark-souls.jpg')
Build.create(name:'Hunter', image_url:'https://darksouls.wiki.fextralife.com/file/Dark-Souls/hunter-starting-class-male-dark-souls.jpg')
Build.create(name:'Sorcerer', image_url:'https://darksouls.wiki.fextralife.com/file/Dark-Souls/sorcerer-starting-class-male-dark-souls.jpg')
Build.create(name:'Pyromancer', image_url:'https://darksouls.wiki.fextralife.com/file/Dark-Souls/pyromancer-starting-class-male-dark-souls.jpg')
Build.create(name:'Cleric', image_url:'https://darksouls.wiki.fextralife.com/file/Dark-Souls/cleric-starting-class-male-dark-souls.jpg')
Build.create(name:'Deprived', image_url:'https://darksouls.wiki.fextralife.com/file/Dark-Souls/deprived-starting-class-male-dark-souls.jpg')