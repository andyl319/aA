# I wrote a crawler that visits web pages, stores a few keywords in a
# database, and follows links to other web pages. I noticed that my crawler
# was wasting a lot of time visiting the same pages over and over, so I
# made a set, visited, where I'm storing URLs I've already visited. Now the
# crawler only visits a URL if it hasn't already been visited.
#
# Thing is, the crawler is running on my old desktop computer in my parents'
# basement (where I totally don't live anymore), and it keeps running out of
# memory because visited is getting so huge.
#
# How can I trim down the amount of space taken up by visited?

class Trie

  def initialize
      @root_node = {}
  end

  def check_present_and_add(word)

      current_node = @root_node
      is_new_word = false

      # Work downwards through the trie, adding nodes
      # as needed, and keeping track of whether we add
      # any nodes.
      word.each_char do |char|
          if !current_node.key? char
              is_new_word = true
              current_node[char] = {}
          end
          current_node = current_node[char]
      end

      # Explicitly mark the end of a word.
      # Otherwise, we might say a word is
      # present if it is a prefix of a different,
      # longer word that was added earlier.
      if !current_node.key? "End Of Word"
          is_new_word = true
          current_node["End Of Word"] = {}
      end

      return is_new_word
  end
end
