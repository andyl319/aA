# Given an unsorted array of integers, find the length of the longest consecutive elements sequence.
#
# For example:
#
# Given [100, 4, 200, 1, 3, 2],
# The longest consecutive elements sequence is [1, 2, 3, 4].
#
# Return its length: 4.

require 'set'

def longest_consecutive(nums)
	nums_set = nums.to_set
	best = 0

	nums_set.each do |x|
		if !nums_set.include?(x - 1)
			y = x + 1
			while nums_set.include?(y)
				y += 1
			end
			best = [best, y - x].max
		end
	end

	best
end
