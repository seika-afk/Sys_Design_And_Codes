  ![[Pasted image 20260314173528.png]]

Caching - avoiding repeated work through storage 
low latency

caching

- LRU Caching
- LFU Caching
# Drawbacks

- If wrong type of caching -> stored what isnot needed by a lot of clients -> time increased
-> server->cache->no->server->database------------ **THRASHING**

IN memory cache
global cache (cache server)
