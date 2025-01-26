# from qiskit_aer import AerSimulator
# from qiskit_optimization import QuadraticProgram
# from qiskit_optimization.algorithms import MinimumEigenOptimizer
# from qiskit_algorithms import QAOA
# from qiskit_algorithms.optimizers import COBYLA
# from qiskit_algorithms.utils import algorithm_globals
# from qiskit.primitives import Sampler

# def calculate_optimal_path(nodes, edges, edge_costs):
#     qp = QuadraticProgram()

#     # Add binary variables for each edge
#     for i in range(len(edges)):
#         qp.binary_var(name=f'x{i}')

#     # Define the objective function to minimize the total path cost
#     linear = {f'x{i}': edge_costs[i] for i in range(len(edges))}
#     qp.minimize(linear=linear)

#     # Add constraints to ensure a valid path from source to target
#     for node in range(nodes):
#         in_edges = {f'x{i}': 1 for i, (u, v) in enumerate(edges) if v == node}
#         out_edges = {f'x{i}': 1 for i, (u, v) in enumerate(edges) if u == node}

#         if node == 0:
#             qp.linear_constraint(linear=out_edges, sense='==', rhs=1, name=f'out_{node}')
#         elif node == nodes - 1:
#             qp.linear_constraint(linear=in_edges, sense='==', rhs=1, name=f'in_{node}')
#         else:
#             qp.linear_constraint(linear={**in_edges, **{k: -v for k, v in out_edges.items()}},
#                                  sense='==', rhs=0, name=f'flow_{node}')

#     # Configure the QAOA optimizer
#     algorithm_globals.random_seed = 42
#     sampler = Sampler()
#     qaoa = QAOA(sampler=sampler, optimizer=COBYLA(), reps=1)
#     optimizer = MinimumEigenOptimizer(qaoa)

#     # Solve the problem
#     result = optimizer.solve(qp)

#     # Extract selected edges and cost
#     selected_edges = [edges[i] for i, value in enumerate(result.x) if value > 0.5]

#     return {
#         "optimal_cost": result.fval,
#         "selected_edges": selected_edges
#     }







#change



from qiskit_aer import AerSimulator
from qiskit_optimization import QuadraticProgram
from qiskit_optimization.algorithms import MinimumEigenOptimizer
from qiskit_algorithms import QAOA
from qiskit_algorithms.optimizers import COBYLA
from qiskit_algorithms.utils import algorithm_globals
from qiskit.primitives import Sampler

def calculate_optimal_path_with_time(nodes, edges, edge_costs, edge_times):
    qp = QuadraticProgram()

    # Add binary variables for each edge
    for i in range(len(edges)):
        qp.binary_var(name=f'x{i}')

    # Define the objective function to minimize the total path cost
    linear = {f'x{i}': edge_costs[i] for i in range(len(edges))}
    qp.minimize(linear=linear)

    # Add constraints to ensure a valid path from source to target
    for node in range(nodes):
        in_edges = {f'x{i}': 1 for i, (u, v) in enumerate(edges) if v == node}
        out_edges = {f'x{i}': 1 for i, (u, v) in enumerate(edges) if u == node}

        if node == 0:
            qp.linear_constraint(linear=out_edges, sense='==', rhs=1, name=f'out_{node}')
        elif node == nodes - 1:
            qp.linear_constraint(linear=in_edges, sense='==', rhs=1, name=f'in_{node}')
        else:
            qp.linear_constraint(linear={**in_edges, **{k: -v for k, v in out_edges.items()}},
                                 sense='==', rhs=0, name=f'flow_{node}')

    # Configure the QAOA optimizer
    algorithm_globals.random_seed = 42
    sampler = Sampler()
    qaoa = QAOA(sampler=sampler, optimizer=COBYLA(), reps=1)
    optimizer = MinimumEigenOptimizer(qaoa)

    # Solve the problem
    result = optimizer.solve(qp)

    # Extract selected edges and their times
    selected_edges = [edges[i] for i, value in enumerate(result.x) if value > 0.5]
    total_time = sum(edge_times[i] for i, value in enumerate(result.x) if value > 0.5)

    return {
        "optimal_cost": result.fval,
        "selected_edges": selected_edges,
        "total_time": total_time
    }