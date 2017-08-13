# (Question and solution taken from Interview Cake) You've created an
# extremely popular game. You rank players in the game from highest to
# lowest score. So far you're using an algorithm that sorts in O(nlogn)
# time, but players are complaining that their rankings aren't updated fast
# enough. You need a faster sorting algorithm.
#
# Write a function that takes:
#
# an array of unsorted_scores
# the highest_possible_score in the game
# and returns a sorted array of scores in less than O(nlogn) time.
#
# Example (doin't give to interviewee; let them come up with their own inputs and outputs):
#
# unsorted_scores = [37, 89, 41, 65, 91, 53]
# HIGHEST_POSSIBLE_SCORE = 100
#
# sort_scores(unsorted_scores, HIGHEST_POSSIBLE_SCORE)
# # returns [37, 41, 53, 65, 89, 91]
# Clarification (again, not to be given out to interviewee unless asked for):
#
# In aiming for nlogn, we define n as the number of unsorted_scores because
# we're expecting the number of players to keep growing.
# We'll treat highest_possible_score as a constant instead of factoring it
# into our big O time and space costs, because the highest possible score won't change.
# Bonus: If the interviewee finishes early: Our solution returns a separate,
# sorted array. Could we instead sort the array in place? Does this change
# the time complexity? The space complexity?


def sort_scores(unsorted_scores, highest_possible_score)

  # array of 0s at indices 0..highest_possible_score
  score_counts = [0] * (highest_possible_score+1)

  # populate score_counts
  unsorted_scores.each do |score|
      score_counts[score] += 1
  end

  # populate the final sorted array
  sorted_scores = []

  # for each item in score_counts
  score_counts.each_with_index do |count, score|

      # for the number of times the item occurs
      (0...count).each do |time|

          # add it to the sorted array
          sorted_scores.push(score)
      end
  end

  return sorted_scores
end
