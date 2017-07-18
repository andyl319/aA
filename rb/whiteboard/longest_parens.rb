# Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.
#
# For "(()", the longest valid parentheses substring is "()", which has length = 2.
#
# Another example is ")()())", where the longest valid parentheses substring is "()()", which has length = 4.

def longestValidParentheses(string)
	longest = 0
	stack = []

	string.each_with_index do |char, index|
		if string[index] == '('
			stack << index
		else
			if !stack.empty?
				string[stack.length - 1] == '(' ? stack.pop : stack.push(index)
			end
		end
	end

	if stack.empty?
		longest = string.length
	else
		a = string.length
		b = 0
		while !stack.empty?
			b = stack[stack.length - 1]
			stack.pop
			longest = [longest, a-b-1].max
			a = b
		end
		longest = [longest, a].max
	end

	longest
end
