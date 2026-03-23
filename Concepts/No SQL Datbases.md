
- schema is changeable
- Insertion and retrieval
- Built for scale
limitations
- not built for updates
- consistency 
- not read optimized , "ages of all employees " := not as efficient as SQL(so read time slower)


### Casandra cluster

![[Pasted image 20260323105755.png]]


Quorum

**Quorum** is about **how many nodes must agree for a read or write to be considered successful**.

A **quorum = majority of replicas**

Formula:

QUORUM = floor((replication_factor / 2)) + 1

Example:

- Replication Factor (RF) = 3
- Quorum = (3/2 → 1) + 1 = **2 nodes**