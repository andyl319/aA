require 'open-uri'

urls = []

(1...5000).each do |i|
  begin
  print "Trying #{i}\t"
  open("https://scottduane.github.io/SecretClue#{i}/") { |f|
    urls << i
  }
  rescue OpenURI::HTTPError => e
    puts "failed #{i}"
  end
end

p urls
