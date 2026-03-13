from queue import Queue
from threading import Thread 
import time 
import random


q=Queue()

def producer(pid):
    for i in range(5):
        msg=f"P{pid}-task-{i}"
        print(f"Produced {msg}")
        q.put(msg)
        time.sleep(random.random())

def consumer(cid):
    while True:
        msg= q.get()
        print(f"Consumer {cid} processing {msg}")
        time.sleep(2)
        q.task_done()

# start producers
for i in range(3):
    Thread(target=producer, args=(i,)).start()

# start consumers
for i in range(2):
    Thread(target=consumer, args=(i,), daemon=True).start()

q.join()
print("All tasks done")
