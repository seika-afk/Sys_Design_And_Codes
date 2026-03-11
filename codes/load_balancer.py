
import hashlib
import bisect
  
import hashlib
import bisect


class ConsistentHashing:
    def __init__(self, replicas=3):
        self.replicas = replicas          # number of virtual nodes
        self.ring = []                    # sorted hash ring
        self.hash_to_server = {}          # hash -> server mapping

    def _hash(self, key):
        return int(hashlib.md5(key.encode()).hexdigest(), 16)

    def add_server(self, server):
        for i in range(self.replicas):
            virtual_node = f"{server}#{i}"
            h = self._hash(virtual_node)

            bisect.insort(self.ring, h)
            self.hash_to_server[h] = server

    def remove_server(self, server):
        for i in range(self.replicas):
            virtual_node = f"{server}#{i}"
            h = self._hash(virtual_node)

            index = bisect.bisect_left(self.ring, h)
            if index < len(self.ring) and self.ring[index] == h:
                self.ring.pop(index)
                del self.hash_to_server[h]

    def get_server(self, key):
        if not self.ring:
            return None

        h = self._hash(key)

        index = bisect.bisect(self.ring, h)

        if index == len(self.ring):
            index = 0

        return self.hash_to_server[self.ring[index]]
def route_request(load_balancer, user_id, request_data):
    server = load_balancer.get_server(user_id)

    print(f"Routing request '{request_data}' from {user_id} to {server}")

    # simulate server processing
    return f"{server} processed: {request_data}"



lb = ConsistentHashing(replicas=3)

lb.add_server("ServerA")
lb.add_server("ServerB")
lb.add_server("ServerC")


route_request(lb, "user123", "GET /home")
route_request(lb, "user456", "GET /profile")
route_request(lb, "user789", "POST /login")

