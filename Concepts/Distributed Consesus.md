![[Pasted image 20260401105720.png]]

pull data via , async or sync


![[Pasted image 20260401110125.png]]


Slave never gets the write access
it just copiesz data from its master


---

## Master-Master Architecture
peer to peer not master-slave
If any one db crashes, servers can route to other db
![[Pasted image 20260401110226.png]]


## Problem :

![[Pasted image 20260401110441.png]]
Called Split brain problem


can be solved by 

![[Pasted image 20260401110658.png]]

-  2Pc, 3pc,mvcc
- 