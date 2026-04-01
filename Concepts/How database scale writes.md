
![[Pasted image 20260330111921.png]]


writign is fastest in linked list 
O(1) ,we just need to append at last


Log using linked list


advantages
- less i/o operations
- fast writes

Drawbacks
- additional memory
- slow reads



-> Sorted array -> serachtime (O(log(n)))


B+tree  or linkd list

![[Pasted image 20260330113209.png]]


linked list + sorted array

log(n),O(1)





#### When should you merge the sorted chunks

> Bloom Filter 

 Bloom filter is a probabilistic data structure in Redis Open Source that enables you to check if an element is present in a set using a very small memory space of a fixed size.

Instead of storing all the items in a set, a Bloom Filter stores only the items' hashed representations, thus sacrificing some precision. The trade-off is that Bloom Filters are very space-efficient and fast

