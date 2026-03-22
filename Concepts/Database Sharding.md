quering a database

**Common SQL optimization techniques**

- Use **indexes**    
- Avoid `SELECT *`
- Use **proper joins**
- Limit results (`LIMIT`)
- Filter early with `WHERE`

---

# WHAT IS SHARDING

sharding -> breaking a huge data -> into sub datas
incase of sysd , we are breaking the huge data and storing in shard/smaller databases

such that ,they are divided by attributes

eg. tinder -> divided acc to location

so we dont have to iterate over whole database







![[Pasted image 20260313165111.png]]


# problems 

- JOINS Crossshards
	- go to two diff shards and join the data
	- expensive
	- cant have more or less pizza slices
	- use consistent hashing -> memcached
- cant have dynamic num of shards
- Heirarchical sharding -> solves dynamic num of shards
- CREATE INDEX in SHARDs

if a shard fails , can have master slave architecture 


```
**Master–Slave architecture** (in databases)

**Idea**

- **1 Master** → handles **writes (insert/update/delete)**
    
- **Multiple Slaves** → handle **reads**
    

---

**Flow**

1. App sends **write query** → **Master**
    
2. Master **updates database**
    
3. Master **replicates changes** to **Slaves**
    
4. App sends **read queries** → **Slaves**
```