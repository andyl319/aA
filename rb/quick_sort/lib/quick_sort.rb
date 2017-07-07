class QuickSort
  # Quick sort has average case time complexity O(nlogn), but worst
  # case O(n**2).

  # Not in-place. Uses O(n) memory.
  def self.sort1(array)
    return array if array.length == 0

    new_piv = rand(array.length)
    temp = array[0]
    array[0] = array[new_piv]
    array[new_piv] = temp

    piv = array[0]

    l = array.select { |x| piv > x }
    r = array.select { |x| piv < x }
    mid = piv

    sort1(l) + mid + sort1(r)

  end

  # In-place.
  def self.sort2!(array, start = 0, length = array.length, &prc)
    prc ||= Proc.new { |x1, x2| x1 <=> x2 }
    return array if length < 2

    piv_i = partition(array, start, length, &prc)
    l_length = piv_i - start
    r_length = length - (l_length + 1)
    sort2!(array, start, l_length, &prc)
    sort2!(array, piv_i+1, r_length, &prc)
    array
  end

  def self.partition(array, start, length, &prc)
    prc ||= Proc.new { |el1, el2| el1 <=> el2 }
    piv = array[start]
    piv_i = start
    ((start+1)...(start+length)).each do |i|
      if prc.call(piv, array[i]) > 0
        temp = array[i]
        array[i] = array[piv_i + 1]
        array[piv_i + 1] = temp
        piv_i += 1
      end
    end
    temp = array[start]
    array[start] = array[piv_i]
    array[piv_i] = temp

    piv_i
  end
end
